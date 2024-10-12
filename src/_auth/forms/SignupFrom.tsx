import {Link} from "react-router-dom";

const SignupFrom = () => {
    return (
        <>
            <p className="text-small-regular text-light-2 text-center mt-2">
                已有账户? <Link to={"/sign-in"} className="text-primary-500 text-small-semibold ml-1">前往登录</Link>
            </p>
        </>
    )
}

export default SignupFrom