

import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    createPost,
    createUserAccount,
    getRecentPosts, getUsers,
    signInAccount,
    signOutAccount,
    updatePost
} from "@/lib/appwrite/api.ts";
import {INewPost, INewUser, IUpdatePost} from "@/types";
import {QUERY_KEYS} from "@/lib/react-query/queryKeys.ts";

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

/*创建帖子*/
export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: INewPost) => createPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

/*更新帖子*/
export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: IUpdatePost) => updatePost(post),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
            });
        },
    });
};

/*获最新的帖子*/
export const useGetRecentPosts = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        queryFn: getRecentPosts,
    });
};

/*获取用户*/
export const useGetUsers = (limit?: number) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USERS],
        queryFn: () => getUsers(limit),
    });
};
