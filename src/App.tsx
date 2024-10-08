import {Route, Routes} from 'react-router-dom'
import AuthLayout from "@/_auth/AuthLayout.tsx";
import RootLayout from "@/_root/RootLayout.tsx";
import SigninFrom from "@/_auth/forms/SigninFrom.tsx";
import SignupFrom from "@/_auth/forms/SignupFrom.tsx";
import {AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile} from "@/_root/pages";


const App = () => {
    return (
        <>
            {/*响应式整个屏幕占比宽度*/}
            <main className="flex h-screen">
                <Routes>
                    {/*登录注册*/}
                    <Route element={<AuthLayout />}>
                        <Route path="/sign-in" element={<SigninFrom />}/>
                        <Route path="/sign-up" element={<SignupFrom />}/>
                    </Route>

                    {/*页面左侧导航栏*/}
                    <Route element={<RootLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/all-users" element={<AllUsers />} />
                        <Route path="/create-post" element={<CreatePost />} />
                        <Route path="/update-post/:id" element={<EditPost />} />
                        <Route path="/posts/:id" element={<PostDetails />} />
                        <Route path="/profile/:id/*" element={<Profile />} />
                        <Route path="/update-profile/:id" element={<UpdateProfile />} />
                    </Route>
                </Routes>
            </main>
        </>
    )
}

export default App
