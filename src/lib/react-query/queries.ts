import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    createPost,
    createUserAccount,
    deletePost,
    deleteSavedPost,
    getCurrentUser,
    getInfinitePosts,
    getPostById,
    getRecentPosts,
    getUserPosts,
    getUsers,
    likePost,
    savePost,
    searchPosts,
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

/*点赞帖子*/
export const useLikePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
                         postId,
                         likesArray,
                     }: {
            postId: string;
            likesArray: string[];
        }) => likePost(postId, likesArray),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*收藏帖子*/
export const useSavePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
            savePost(userId, postId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*删除已收藏的帖子*/
export const useDeleteSavedPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (savedRecordId: string) => deleteSavedPost(savedRecordId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*获取当前用户*/
export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        queryFn: getCurrentUser,
    });
};

/*根据id获取帖子*/
export const useGetPostById = (postId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POST_BY_ID, postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    });
};

/*获取用户帖子*/
export const useGetUserPosts = (userId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USER_POSTS, userId],
        queryFn: () => getUserPosts(userId),
        enabled: !!userId,
    });
};

/*删除帖子*/
export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ postId, imageId }: { postId?: string; imageId: string }) =>
            deletePost(postId, imageId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

/*获取帖子数据*/
export const useGetPosts = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.GET_INFINITE_POSTS],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryFn: getInfinitePosts as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getNextPageParam: (lastPage: any) => {
            // 如果没有数据，就没有更多页面。
            if (lastPage && lastPage.documents.length === 0) {
                return null;
            }

            // 使用最后一个文档的$id作为游标。
            return lastPage.documents[lastPage.documents.length - 1].$id;
        },
    });
};

/*搜索帖子*/
export const useSearchPosts = (searchTerm: string) => {
    return useQuery(
        [QUERY_KEYS.SEARCH_POSTS, searchTerm], // queryKey 应该是一个数组
        () => searchPosts(searchTerm), // queryFn
        {
            enabled: !!searchTerm,
            retry: false, // 不重试
            refetchOnWindowFocus: false, // 不在窗口焦点变化时重新获取数据
            initialData: { documents: [], total: 0 }, // 初始数据符合 DocumentList 类型
            onError: (error) => {
                console.error('没有这个帖子:', error);
            },
            onSuccess: (data) => {
                console.log('Search posts success:', data);
            }
        }
    );
};
