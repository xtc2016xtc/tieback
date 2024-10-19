import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {INITIAL_USER, useUserContext} from "@/context/AuthContext.tsx";
import {useSignOutAccount} from "@/lib/react-query/queries.ts";
import React from "react";
import {Loader} from "lucide-react";
import {INavLink} from "@/types";
import {sidebarLinks} from "../../../../constants";
import {Button} from "@/components/ui/button.tsx";

const LeftSidebar = () => {
    const navigate = useNavigate()

    const { pathname } = useLocation();

    const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();

    const { mutate: signOut } = useSignOutAccount();
    /*
    * LeftSidebar组件使用useNavigate和useLocation钩子来处理导航和获取当前路径。
    * useUserContext钩子用于获取用户信息和状态。
    * useSignOutAccount钩子用于处理用户登出操作
    * */

    const handleSignOut = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        signOut();
        setIsAuthenticated(false);
        setUser(INITIAL_USER);
        navigate("/sign-in");
    };

    return (
        <nav className="leftsidebar">
            <div className="flex flex-col gap-11">
                <Link to="/" className="flex gap-3 items-center">
                    <div className="flex justify-between">
                        <img src="/assets/images/logo.svg" alt="logo"/>
                        <div className="flex-center text-white h3-bold text-right">交流平台</div>
                    </div>
                </Link>

                {/*用户信息加载...*/}
                {isLoading || !user.email ? (
                    <div className="h-14">
                        <Loader/>
                    </div>
                ) : (
                    <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
                        <img
                            src={user.imageUrl || '/assets/images/profile.png'}
                            alt="profile"
                            className="h-14 w-14 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="body-bold">{user.name}</p>
                            <p className="small-regular text-light-3">@{user.username}</p>
                        </div>
                    </Link>
                )}

                {/*便利导航*/}
                <ul className="flex flex-col gap-6">
                    {sidebarLinks.map((link: INavLink) => {
                        const isActive = pathname === link.route;

                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${isActive && "bg-primary-500"
                                }`}>
                                <NavLink
                                    to={link.route}
                                    className="flex gap-4 items-center p-4">
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white ${isActive && "invert-white"
                                        }`}
                                    />
                                    {link.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/*登出*/}
            <Button
                variant="ghost"
                className="shad-button_ghost"
                onClick={(e) => handleSignOut(e)}>
                <img src="/assets/icons/logout.svg" alt="logout" />
                <p className="small-medium lg:base-medium">退出登录</p>
            </Button>
        </nav>
    )
}

export default LeftSidebar