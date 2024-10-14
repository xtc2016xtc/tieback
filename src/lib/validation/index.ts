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