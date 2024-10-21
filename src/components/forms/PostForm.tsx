import {Models} from "appwrite";
import {useNavigate} from "react-router-dom";
import {useToast} from "@/hooks/use-toast";
import {useUserContext} from "@/context/AuthContext.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {PostValidation} from "@/lib/validation";
import { Input } from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
/*import FileUploaders from "@/components/shared/file/FileUploaders.tsx";*/
import FileUploader from "@/components/shared/file/FileUploader.tsx";
import {Button} from "@/components/ui/button.tsx";
import Loader from "@/components/shared/Loader.tsx";
import {useCreatePost, useUpdatePost} from "@/lib/react-query/queries.ts";

/*定义表单属性*/
type PostFormProps = {
    post?: Models.Document;
    action: "创建" | "更新";
};



const PostForm = ({ post, action }: PostFormProps) => {

    const navigate = useNavigate();

    const { toast } = useToast();

    const { user } = useUserContext()


    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.caption : "",
            file: [],
            location: post ? post.location : "",
            tags: post ? post.tags.join(",") : "",
        },
    });

    /*创建*/
    const { mutateAsync: createPost, isLoading: isLoadingCreate } =
        useCreatePost();
    /*更新*/
    const { mutateAsync: updatePost, isLoading: isLoadingUpdate } =
        useUpdatePost();

    const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
        // 如果是更新帖子
        if (post && action === "更新") {
            const updatedPost = await updatePost({
                ...value,
                postId: post.$id,
                imageId: post.imageId,
                imageUrl: post.imageUrl,
            });

            if (!updatedPost) {
                toast({
                    title: `${action} 再试一次.`,
                });
            }
            return navigate(`/posts/${post.$id}`);
        }

        // 如果是创建帖子
        const newPost = await createPost({
            ...value,
            userId: user.id,
        });

        if (!newPost) {
            toast({
                title: `${action} 失败再试一次吧.`,
            });
        }
        navigate("/");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-9 w-full  max-w-5xl"
            >
                {/*标题*/}
                <FormField
                    control={form.control}
                    name="caption"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">标题</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="shad-textarea custom-scrollbar"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                {/*上传*/}
                <FormField
                    control={form.control}
                    name="file"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">上传照片</FormLabel>
                            <FormControl>
                                <FileUploader
                                    fieldChange={field.onChange}
                                    mediaUrl={post?.imageUrl}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                {/*位置*/}
                <FormField
                    control={form.control}
                    name="location"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">位置</FormLabel>
                            <FormControl>
                                <Input type="text" className="shad-input" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                {/*标签*/}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">
                                添加标签 (用 " , "分开)
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="学习，欣赏，等等"
                                    type="text"
                                    className="shad-input"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                <div className="flex gap-4 items-center justify-end">
                    <Button
                        type="button"
                        className="shad-button_dark_4"
                        onClick={() => navigate(-1)}>
                        取消
                    </Button>
                    <Button
                        type="submit"
                        className="shad-button_primary whitespace-nowrap"
                        disabled={isLoadingCreate || isLoadingUpdate}>
                        {(isLoadingCreate || isLoadingUpdate) && <Loader/>}
                        {action} 新的话题
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default PostForm