import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Link, useNavigate} from "react-router-dom";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader.tsx";
import {useToast} from "@/hooks/use-toast.ts";
import {useCreateUserAccount, useSignInAccount} from "@/lib/react-query/queries.ts";
import {useUserContext} from "@/context/AuthContext.tsx";



const SignupFrom = () => {

    const { toast } = useToast();
    const navigate = useNavigate();
    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
    const { mutateAsync: createUserAccount, isLoading: isCreatingAccount} = useCreateUserAccount()
    const { mutateAsync: signInAccount, isLoading: isSigningInUser } = useSignInAccount();

   /*注册表单数据*/
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            username: "",
            name:"",
            email: "",
            password: "",
        },
    })

    /*注册逻辑*/
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
        console.log(values)
        const newUser = await createUserAccount(values)

        if(!newUser) {
            toast({title:"注册遇到错误，请再试一遍"})

            return
        }

        const session = await signInAccount({
            email: values.email,
            password: values.password,
        })

        if (!session) {
            toast({ title: "网络出现了问题，请从新登录", });

            navigate("/sign-in");

            return;
        }

        const isLoggedIn = await checkAuthUser();

        if (isLoggedIn) {

            form.reset();
            navigate("/");
        } else {
            toast({ title: "登录失败，请再试一次", });

            return;
        }
    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <div className="flex justify-between">
                    <img src="/assets/images/logo.svg" alt="logo"/>
                    <div className="flex-center text-white h3-bold text-right">交流平台</div>
                </div>
                <h2 className="h4-bold md:h2-bold pt-5 sm:pt-12">
                    创建一个账户
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                   要使用交流平台，输入你的账户详细信息
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
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
                                <FormLabel className="shad-form_label">名字</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
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
                                <FormLabel className="shad-form_label">账户</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">密码</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/*注册加载*/}
                    <Button type="submit" className="shad-button_primary">
                        {isCreatingAccount || isSigningInUser || isUserLoading ? (
                            <div className="flex-center gap-2">
                                <Loader /> 加载中...
                            </div>
                        ) : (
                            "注册"
                        )}
                    </Button>

                    {/*转到登录*/}
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        已有&apos;账户？
                        <Link to={"/sign-in"}
                              className="text-primary-500 text-small-semibold ml-1">
                            前往登录
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default SignupFrom