import {Link, useLocation} from "react-router-dom";
import {sidebarLinks} from "../../../../constants";
import {INavLink} from "@/types";

const Bottombar = () => {

    /*获取当前路由路径*/
    const { pathname } = useLocation()

    return (
        <section className="bottom-bar">
            {sidebarLinks.map((link:INavLink) => {
                /*判断路径是否相等*/
                const isActive = pathname === link.route;
                return (
                    <Link
                        to={link.route}
                        key={link.label}
                        className={`${isActive && "bg-primary-500 rounded-[10px]"
                        } flex-center flex-col gap-1 p2 transition`}
                    >
                        <img
                            src={link.imgURL}
                            alt={link.label}
                            width={16}
                            height={16}
                            className={`${isActive && "invert-white"}`}
                        />

                        <p className="tiny-medium text-light-2">{link.label}</p>
                    </Link>
                )
            })

            }
        </section>
    )
}

export default Bottombar