import { Outlet } from "react-router-dom";
import Topbar from "@/components/shared/top/Topbar.tsx";
import LeftSidebar from "@/components/shared/left/LeftSidebar.tsx";
import Bottombar from "@/components/shared/bottom/Bottombar.tsx";
const RootLayout = () => {
    return (
        <div className="w-full md:flex">

            {/*顶部导航*/}
            <Topbar />
            {/*左侧导航*/}
            <LeftSidebar />

            {/*主体*/}
            <section className="flex flex-1 h-full">
                <Outlet/>
            </section>

            {/*底部760*420px导航栏*/}
            <Bottombar />
        </div>
    )
}

export default RootLayout