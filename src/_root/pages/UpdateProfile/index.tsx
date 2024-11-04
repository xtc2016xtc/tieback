import {useToast} from "@/hooks/use-toast.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useUserContext} from "@/context/AuthContext.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useGetUserById, useUpdateUser} from "@/lib/react-query/queries.ts";
import Loader from "@/components/shared/Loader.tsx";
import {ProfileValidation} from "@/lib/validation";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import ProfileUploader from "@/components/shared/Profile/ProfileUploader.tsx";

const UpdateProfile = () => {
    // 使用useToast获取toast实例
    const { toast } = useToast();
    // 使用useNavigate获取导航实例
    const navigate = useNavigate();
    // 使用useParams获取路由参数
    const { id } = useParams();
    // 使用useUserContext获取用户上下文
    const { user, setUser } = useUserContext();
    // 使用useForm获取表单实例
    const form = useForm<z.infer<typeof ProfileValidation>>({
        resolver: zodResolver(ProfileValidation),
        defaultValues: {
            file: [],
            name: user.name,
            username: user.username,
            email: user.email,
            bio: user.bio || "",
        },
    });

    // Queries
    // 使用useGetUserById获取当前用户信息
    const { data: currentUser } = useGetUserById(id || "");
    // 使用useUpdateUser更新用户信息
    const { mutateAsync: updateUser, isLoading: isLoadingUpdate } =
        useUpdateUser();

    // 如果当前用户不存在，则返回加载器
    if (!currentUser)
        return (
            <div className="flex-center w-full h-full">
                <Loader />
            </div>
        );

    // Handler
    // 处理更新用户信息
    const handleUpdate = async (value: z.infer<typeof ProfileValidation>) => {
        // 更新用户信息
        const updatedUser = await updateUser({
            userId: currentUser.$id,
            name: value.name,
            bio: value.bio,
            file: value.file,
            imageUrl: currentUser.imageUrl,
            imageId: currentUser.imageId,
        });

        // 如果更新失败，则显示错误提示
        if (!updatedUser) {
            toast({
                title: `更新失败.`,
            });
        }

        // 更新用户上下文
        setUser({
            ...user,
            name: updatedUser?.name,
            bio: updatedUser?.bio,
            imageUrl: updatedUser?.imageUrl,
        });
        // 导航到用户个人主页
        return navigate(`/profile/${id}`);
    };

    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="flex-start gap-3 justify-start w-full max-w-5xl">
                    <img
                        src="/assets/icons/edit.svg"
                        width={36}
                        height={36}
                        alt="edit"
                        className="invert-white"
                    />
                    <h2 className="h3-bold md:h2-bold text-left w-full">编辑个人信息</h2>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleUpdate)}
                        className="flex flex-col gap-7 w-full mt-4 max-w-5xl">
                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => (
                                <FormItem className="flex">
                                    <FormControl>
                                        <ProfileUploader
                                            fieldChange={field.onChange}
                                            mediaUrl={currentUser.imageUrl}
                                        />
                                    </FormControl>
                                    <FormMessage className="shad-form_message" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">姓名</FormLabel>
                                    <FormControl>
                                        <Input type="text" className="shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">名称</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="shad-input"
                                            {...field}
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">邮件账户</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="shad-input"
                                            {...field}
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">简介</FormLabel>
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

                        <div className="flex gap-4 items-center justify-end">
                            <Button
                                type="button"
                                className="shad-button_dark_4"
                                onClick={() => navigate(-1)}>
                                返回
                            </Button>
                            <Button
                                type="submit"
                                className="shad-button_primary whitespace-nowrap"
                                disabled={isLoadingUpdate}>
                                {isLoadingUpdate && <Loader />}
                                更新 个人信息
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default UpdateProfile;