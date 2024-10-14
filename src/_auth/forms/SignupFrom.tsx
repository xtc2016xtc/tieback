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
import {Link} from "react-router-dom";
import {SigninValidation} from "@/lib/validation";

const SignupFrom = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof SigninValidation>) => {
        console.log(values)
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
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">邮箱账户</FormLabel>
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
                    {/*登录按钮*/}
                    <Button type="submit" className="shad-button_primary">
                        登录
                    </Button>

                    {/*转到注册*/}
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