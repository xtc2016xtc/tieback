import PostForm from "@/components/forms/PostForm"
import Loader from "@/components/shared/Loader"
import { useGetPostById } from "@/lib/react-query/queries"
import { useParams } from "react-router-dom"

const EditPost = () => {
    const { id } = useParams()
    //获取帖子的详细信息，用于编辑
    const { data: post, isLoading } = useGetPostById(id);

    if (isLoading)
        return (
            <div className="flex-center w-full h-full">
                <Loader />
            </div>
        );
    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="flex-start gap-3 justify-start w-full max-w-5xl">
                    <img
                        src="/assets/icons/edit.svg"
                        alt="add post"
                        width={36}
                        height={36}
                        className="invert-white"
                    />
                    <h2 className="h3-bold md:h2-bold text-left w-full">编辑</h2>
                </div>

                {isLoading ? <Loader /> : <PostForm action="更新" post={post} />}
            </div>
        </div>
    )
}

export default EditPost
