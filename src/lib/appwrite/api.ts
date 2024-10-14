import {account} from "@/lib/appwrite/config.ts";

/*用户登录*/
export async function signInAccount(user:{email: string, password: string}) {
    try{
        /*获取账户密码*/
        return await account.createEmailSession(user.email, user.password);
    }catch (error){
        /*报错信息*/
        console.error(error)
    }
}