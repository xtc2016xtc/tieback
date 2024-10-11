import * as z from 'zod'

/*登录*/
export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "密码至少为八位数." }),
});