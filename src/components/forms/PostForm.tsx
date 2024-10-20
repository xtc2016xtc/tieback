import {Models} from "appwrite";
import {useNavigate} from "react-router-dom";
import {useToast} from "@/hooks/use-toast";
import {useUserContext} from "@/context/AuthContext.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {PostValidation} from "@/lib/validation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import FileUploader from "@/components/shared/file/FileUploader.tsx";

/*定义表单属性*/
type PostFormProps = {
    post?: Models.Document;
    action: "创建" | "更新";
};



const PostForm = ({ post, action }: PostFormProps) => {

    const navigate = useNavigate();

    const { toast } = useToast();

    const { user } = useUserContext()

    console.log(action,navigate,toast,user)

    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.caption : "",
            file: [],
            location: post ? post.location : "",
            tags: post ? post.tags.join(",") : "",
        },
    });

    const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
        console.log(value)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-9 w-full  max-w-5xl"
            >
                <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">标题</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="shad-textarea custom-scrollbar"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">上传照片 or 视频</FormLabel>
                            <FormControl>
                                <FileUploader
                                    fieldChange={field.onChange}
                                    mediaUrl={post?.imageUrl}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default PostForm