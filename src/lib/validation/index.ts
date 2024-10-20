import * as z from 'zod'

/*登录*/
export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "密码至少为八位数." }),
});

/*注册*/
export const SignupValidation = z.object({
    name:z.string().min(2,{ message: '太短了' }),
    username: z.string().min(2,{ message: '太短了' }),
    email:z.string().email(),
    password: z.string().min(8,{ message: '密码至少为八位数' }),
})

/*创建*/
export const PostValidation = z.object({
    caption: z.string().min(5, { message: "最少五个字符." }).max(2200, { message: "最多2200个字符" }),
    file: z.custom<File[]>(),
    location: z.string().min(1, { message: "必填" }).max(1000, { message: "最多1000字符." }),
    tags: z.string(),
});