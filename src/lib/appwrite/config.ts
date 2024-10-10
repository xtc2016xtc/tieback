import { Client,Account,Databases,Storage,Avatars } from "appwrite";

export const appwriteConfig = {
    /*后端数据访问地址*/
    url: import.meta.env.VITE_APPWRITE_URL,
    /*后端项目ID*/
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    /*后端数据库ID*/
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    /*后端存储库ID*/
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    /*用户数据集合ID*/
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    /*用户发布帖子集合ID*/
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    /*用户保存集合ID*/
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);