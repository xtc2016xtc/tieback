import {account, appwriteConfig, avatars, databases, storage} from "@/lib/appwrite/config.ts";
import {INewPost, INewUser, IUpdatePost} from "@/types";
import {ID, Query} from "appwrite";

/*用户登录*/
export async function signInAccount(user: { email: string; password: string }) {
    try {
        /*获取账户密码*/
        return await account.createEmailSession(user.email, user.password);
    } catch (error) {
        console.log(error);
    }
}

/*用户注册*/
export async function createUserAccount(user:INewUser) {
    try {
        /*创建新的账户*/
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        if(!newAccount) throw new Error("创建账户错误")

        /*获取用户头像Url*/
        const avatarUrl = avatars.getInitials(user.name)

        /*保存信息到数据库*/
        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        });

        return newUser

    }catch (error){
        console.error(error)
    }
}

/*保存用户信息到后端数据库*/
export async function saveUserToDB(user:{
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}){
    try {
        /*创建新的用户信息*/
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );

        return newUser
    }catch (error){
        console.error(error)
    }
}

/*查询用户信息*/
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();

        if (!currentAccount) throw Error;

       /*根据ID查找用户信息*/
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

/*获取当前账户信息*/
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;

    } catch (error) {
        console.log(error);
    }
}

/*用户登出*/
export async function signOutAccount() {
    try {
        /*删除当前登录信息*/
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        console.log(error);
    }
}

/*上传文件*/
export async function uploadFile(file: File) {
    try {
        /*创建新文件*/
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        );

        return uploadedFile;
    } catch (error) {
        console.log(error);
    }
}

/*获取文件预览*/
export function getFilePreview(fileId: string) {
    try {
        /*获取文件预览URL*/
        const fileUrl = storage.getFilePreview(
            appwriteConfig.storageId,
            fileId,
            2000,
            2000,
            "top",
            100
        );

        if (!fileUrl) throw Error;

        return fileUrl;
    } catch (error) {
        console.log(error);
    }
}

/*删除文件*/
export async function deleteFile(fileId: string) {
    try {
        /*删除*/
        await storage.deleteFile(appwriteConfig.storageId, fileId);

        return { status: "ok" };
    } catch (error) {
        console.log(error);
    }
}

/*创建帖子*/
export async function createPost(post: INewPost) {
    try {
       /* 上传文件到Appwrite存储*/
        const uploadedFile = await uploadFile(post.file[0]);

        if (!uploadedFile) throw Error;

        /*获取文件预览URL*/
        const fileUrl = getFilePreview(uploadedFile.$id);
        if (!fileUrl) {
            await deleteFile(uploadedFile.$id);
            throw Error;
        }

        /*将标签转换为数组*/
        const tags = post.tags?.replace(/ /g, "").split(",") || [];

        /*创建帖子*/
        const newPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            ID.unique(),
            {
                creator: post.userId,
                caption: post.caption,
                imageUrl: fileUrl,
                imageId: uploadedFile.$id,
                location: post.location,
                tags: tags,
            }
        );

        if (!newPost) {
            await deleteFile(uploadedFile.$id);
            throw Error;
        }

        return newPost;
    } catch (error) {
        console.log(error);
    }
}

/*更新帖子*/
export async function updatePost(post: IUpdatePost) {
    const hasFileToUpdate = post.file.length > 0;

    try {
        let image = {
            imageUrl: post.imageUrl,
            imageId: post.imageId,
        };

        if (hasFileToUpdate) {
            // 上传新文件到Appwrite存储
            const uploadedFile = await uploadFile(post.file[0]);
            if (!uploadedFile) throw Error;

            // 获取新文件预览URL
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
                await deleteFile(uploadedFile.$id);
                throw Error;
            }

            image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
        }

        // 将标签转换为数组
        const tags = post.tags?.replace(/ /g, "").split(",") || [];

        // 更新帖子
        const updatedPost = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            post.postId,
            {
                caption: post.caption,
                imageUrl: image.imageUrl,
                imageId: image.imageId,
                location: post.location,
                tags: tags,
            }
        );

        // 更新失败
        if (!updatedPost) {
            // 删除新上传的文件
            if (hasFileToUpdate) {
                await deleteFile(image.imageId);
            }

            // 如果没有新文件上传，抛出错误
            throw Error;
        }

        // 更新成功后，安全删除旧文件
        if (hasFileToUpdate) {
            await deleteFile(post.imageId);
        }

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*获取最新的帖子*/
export async function getRecentPosts() {
    try {
        // 查询最近帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(20)]
        );

        if (!posts) throw Error;

        return posts;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户*/
export async function getUsers(limit?: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queries: any[] = [Query.orderDesc("$createdAt")];

    if (limit) {
        queries.push(Query.limit(limit));
    }

    try {
        const users = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            queries
        );

        if (!users) throw Error;

        return users;
    } catch (error) {
        console.log(error);
    }
}

/*点赞帖子*/
export async function likePost(postId: string, likesArray: string[]) {
    try {
        /*更新帖子点赞信息*/
        const updatedPost = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId,
            {
                likes: likesArray,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*保存帖子*/
export async function savePost(userId: string, postId: string) {
    try {
        // 创建新文档保存帖子
        const updatedPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.savesCollectionId,
            ID.unique(),
            {
                user: userId,
                post: postId,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*删除保存的贴子*/
export async function deleteSavedPost(savedRecordId: string) {
    try {
        // 删除保存的帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.savesCollectionId,
            savedRecordId
        );

        if (!statusCode) throw Error;

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}

/*根据id获取帖子详细信息*/
export async function getPostById(postId?: string) {
    if (!postId) throw Error;

    try {
        /*根据帖子ID查询帖子信息*/
        const post = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户的帖子*/
export async function getUserPosts(userId?: string) {
    if (!userId) return;

    try {
        // 根据用户ID查询用户帖子
        const post = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*删除帖子*/
export async function deletePost(postId?: string, imageId?: string) {
    if (!postId || !imageId) return;

    try {
        // 删除帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!statusCode) throw Error;

        // 删除帖子对应的文件
        await deleteFile(imageId);

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}