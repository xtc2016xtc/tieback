import {account, appwriteConfig, avatars, databases} from "@/lib/appwrite/config.ts";
import {INewUser} from "@/types";
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