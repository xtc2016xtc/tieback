import {useGetRecentPosts, useGetUsers} from "@/lib/react-query/queries.ts";
import Loader from "@/components/shared/Loader.tsx";
import {Models} from "appwrite";
import PostCard from "@/components/shared/Card/PostCard.tsx";

const Home = () => {
    /*获取最新的帖子*/
    const { data: posts, isLoading: isPostLoading, isError: isErrorPosts,} = useGetRecentPosts();
    /*获取用户*/
    const {data: creators, isLoading: isUserLoading, isError: isErrorCreators,} = useGetUsers(10);

    /*如果获取帖子或用户失败，则显示错误信息*/
    if (isErrorPosts || isErrorCreators) {
        return (
            <div className="flex flex-1">
                <div className="home-container">
                    <p className="body-medium text-light-1">获取失败</p>
                </div>
                <div className="home-creators">
                    <p className="body-medium text-light-1">还没有用户发布新的帖子</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1">
            <div className="home-container">
                <div className="home-posts">
                    <h2 className="h3-bold md:h2-bold text-left w-full">首页</h2>
                    {isPostLoading && !posts ? (
                        <Loader/>
                    ) : (
                        <ul className="flex flex-col flex-1 gap-9 w-full ">
                            {posts?.documents.map((post: Models.Document) => (
                                <li key={post.$id} className="flex justify-center w-full">
                                    {/*数据遍历*/}
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home