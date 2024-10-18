

import {useMutation} from "@tanstack/react-query";
import {createUserAccount, signInAccount, signOutAccount} from "@/lib/appwrite/api.ts";
import {INewUser} from "@/types";

/*用户登录*/
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) =>
            signInAccount(user),
    });
}

/*用户注册*/
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

/*用户登出*/
export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};