

import {useMutation} from "@tanstack/react-query";
import {signInAccount} from "@/lib/appwrite/api.ts";

/*用户登录逻辑*/
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) =>
            signInAccount(user),
    });
}