import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";
import {useUserContext} from "@/context/AuthContext.tsx";

const Topbar = () => {

    // const navigate = useNavigate();

    const { user } = useUserContext()



    return (
        <section className="topbar">
            <div className="flex-between py-4 px-5">
                {/*转到首页*/}
                <Link to="/" className="flex gap-3 items-center">
                    <div className="flex justify-between">
                        <img src="/assets/images/logo.svg" alt="logo"/>
                        <div className="flex-center text-white h3-bold text-right">交流平台</div>
                    </div>
                </Link>

                <div className="flex gap-4">
                    {/*登出按钮*/}
                    <Button
                        variant="ghost"
                        className="shad-button_ghost"
                    >
                        <img src="/assets/icons/logout.svg" alt="logout"/>
                    </Button>
                    {/* 跳转到用户个人主页 */}
                    <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                        <img
                            src={user.imageUrl || '/assets/images/profile.png'}
                            alt="profile"
                            className="h-8 w-8 rounded-full"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Topbar