import {Link} from "react-router-dom";

const SignupFrom = () => {
    return (
        <>
            <p className="text-small-regular text-light-2 text-center mt-2">
                Already have an account? <Link to={"/sign-in"} className="text-primary-500 text-small-semibold ml-1">Log
                in</Link>
            </p>
        </>
    )
}

export default SignupFrom