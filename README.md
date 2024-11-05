# 交流平台项目教学
## 第一步 [创建目录]
## 第二步 [打开终端]
```bash
#  创建项目于当前目录
    npm create vite@latest ./

```
```javascript
/*选择React
* ? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
* */
/*选择typescript
* ? Select a variant: » - Use arrow-keys. Return to submit.
>   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗
* */
```
```bash
# 继续输入npm install 进行补包
 npm install
# 补包完成之后启动项目 
 npm run dev
 
# ctrl + c关闭当前项目

```

### 第三步 [删除src目录下所有文件]
## <a name="snippets">🕸️ 片段</a>
<details>
<summary><code>App.tsx</code></summary>

```typescript jsx
const App = () => {
    return (
        <h1>
            Hello world!
        </h1>
    )
}

export default App

```
</details>

<details>
<summary><code>main.tsx</code></summary>

```typescript jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


```

</details>

<details>
<summary><code>vite-env.d.ts</code></summary>

```typescript
/// <reference types="vite/client" />

```

</details>

### 第四步 [安装tailwindcss框架]
```bash
#   终端输入
npm install -D tailwindcss postcss autoprefixer
# 初始化
npx tailwindcss init -p
# 安装ts模块
 npm install -D @types/tailwindcss
```
## 第五步 [配置tailwindcss]

# 安装 shadcn/ui框架
# 选择vite
```bash
# 依次输入
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p


```
# 配置内容

<details>
<summary><code>tsconfig.json</code></summary>

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}


```


</details>

<details>
<summary><code>tsconfig.app.json</code></summary>

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",


    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}



```


</details>

<details>
<summary><code>vite.config.ts</code></summary>

```bash
# 终端输入
# (确保解析不失误)
npm i -D @types/node

```


```typescript 

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})



```


</details>


# <a href="https://ui.shadcn.com/">shadcn/ui框架地址</a>



# <a>🕸️ 片段</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}



```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;




```

</details>

# 安装ui

```bash
npx shadcn@latest init

```
# 配置components.json
```md

Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes

```
# 添加组件

```bash
# 
npx shadcn@latest add button

```
# ui组件使用

```typescript jsx

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

```

# 自定义主题tailwindcss配置

<details>
<summary><code>tailwindcss.config.js</code></summary>

```js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',

      },
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
      },
      screens: {
        'xs': '480px',

      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```
</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply box-border list-none p-0 m-0 scroll-smooth;
  }

  body {
    @apply bg-dark-1 text-white min-h-screen font-inter;
  }
}

@layer utilities {
  /* TYPOGRAPHY */
  .h1-bold {
    @apply text-[36px] font-bold leading-[140%] tracking-tighter;
  }

  .h1-semibold {
    @apply text-[36px] font-semibold leading-[140%] tracking-tighter;
  }

  .h2-bold {
    @apply text-[30px] font-bold leading-[140%] tracking-tighter;
  }

  .h3-bold {
    @apply text-[24px] font-bold leading-[140%] tracking-tighter;
  }

  .base-semibold {
    @apply text-[16px] font-semibold leading-[140%] tracking-tighter;
  }

  .base-medium {
    @apply text-[16px] font-medium leading-[140%];
  }

  .base-regular {
    @apply text-[16px] font-normal leading-[140%];
  }

  .body-bold {
    @apply text-[18px] font-bold leading-[140%];
  }

  .body-medium {
    @apply text-[18px] font-medium leading-[140%];
  }

  .small-semibold {
    @apply text-[14px] font-semibold leading-[140%] tracking-tighter;
  }

  .small-medium {
    @apply text-[14px] font-medium leading-[140%];
  }

  .small-regular {
    @apply text-[14px] font-normal leading-[140%];
  }

  .subtle-semibold {
    @apply text-[12px] font-semibold leading-[140%];
  }

  .tiny-medium {
    @apply text-[10px] font-medium leading-[140%];
  }

  /* UTILITIES */
  .invert-white {
    @apply invert brightness-0 transition;
  }

  .flex-center {
    @apply flex justify-center items-center;
  }

  .flex-between {
    @apply flex justify-between items-center;
  }

  .flex-start {
    @apply flex justify-start items-center;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    border-radius: 2px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #09090a;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #5c5c7b;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #7878a3;
  }

  .common-container {
    @apply flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar;
  }

  /* All Users */
  .user-container {
    @apply max-w-5xl flex flex-col items-start w-full gap-6 md:gap-9;
  }

  .user-grid {
    @apply w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 max-w-5xl;
  }

  /* Explore */
  .explore-container {
    @apply flex flex-col flex-1 items-center overflow-scroll py-10 px-5 md:p-14 custom-scrollbar;
  }

  .explore-inner_container {
    @apply max-w-5xl flex flex-col items-center w-full gap-6 md:gap-9;
  }

  .explore-search {
    @apply h-12 bg-dark-4 border-none placeholder:text-light-4 focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0 !important;
  }

  /* Home */
  .home-container {
    @apply flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar;
  }

  .home-posts {
    @apply max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9;
  }

  .home-creators {
    @apply hidden xl:flex flex-col w-72 2xl:w-465 px-6 py-10 gap-10  overflow-scroll custom-scrollbar;
  }

  /* Post Details */
  .post_details-container {
    @apply flex flex-col flex-1 gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar items-center;
  }

  .post_details-card {
    @apply bg-dark-2 w-full max-w-5xl rounded-[30px] flex-col flex xl:flex-row border border-dark-4 xl:rounded-l-[24px];
  }

  .post_details-img {
    @apply h-80 lg:h-[480px] xl:w-[48%] rounded-t-[30px] xl:rounded-l-[24px] xl:rounded-tr-none object-cover p-5 bg-dark-1;
  }

  .post_details-info {
    @apply bg-dark-2 flex flex-col gap-5 lg:gap-7 flex-1 items-start p-8 rounded-[30px];
  }

  .post_details-delete_btn {
    @apply p-0 flex gap-3 hover:bg-transparent hover:text-light-1  text-light-1 small-medium lg:base-medium;
  }

  /* Profile */
  .profile-container {
    @apply flex flex-col items-center flex-1 gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar;
  }

  .profile-inner_container {
    @apply flex items-center md:mb-8 xl:items-start gap-8 flex-col xl:flex-row relative max-w-5xl w-full;
  }

  .profile-tab {
    @apply flex-center gap-3 py-4 w-48 bg-dark-2  transition flex-1 xl:flex-initial;
  }

  /* Saved */
  .saved-container {
    @apply flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar;
  }

  /* Bottom bar */
  .bottom-bar {
    @apply z-50 flex-between w-full sticky bottom-0 rounded-t-[20px] bg-dark-2 px-5 py-4 md:hidden;
  }

  /* File uploader */
  .file_uploader-img {
    @apply h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top;
  }

  .file_uploader-label {
    @apply text-light-4 text-center small-regular w-full p-4 border-t border-t-dark-4;
  }

  .file_uploader-box {
    @apply flex-center flex-col p-7 h-80 lg:h-[612px];
  }

  /* Grid Post List */
  .grid-container {
    @apply w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 max-w-5xl;
  }

  .grid-post_link {
    @apply flex rounded-[24px] border border-dark-4 overflow-hidden cursor-pointer w-full h-full;
  }

  .grid-post_user {
    @apply absolute bottom-0 p-5 flex-between w-full bg-gradient-to-t from-dark-3 to-transparent rounded-b-[24px] gap-2;
  }

  /* Left sidebar */
  .leftsidebar {
    @apply hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-dark-2;
  }

  .leftsidebar-link {
    @apply rounded-lg base-medium hover:bg-primary-500 transition;
  }

  /* Post Card */
  .post-card {
    @apply bg-dark-2 rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm;
  }

  .post-card_img {
    @apply h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5;
  }

  /* Topbar */
  .topbar {
    @apply sticky top-0 z-50 md:hidden bg-dark-2 w-full;
  }

  /* User card */
  .user-card {
    @apply flex-center flex-col gap-4 border border-dark-4 rounded-[20px] px-5 py-8;
  }
}

@layer components {
  /* SHADCN COMPONENTS */
  /* Form */
  .shad-form_label {
    @apply text-white !important;
  }

  .shad-form_message {
    @apply text-red !important;
  }

  .shad-input {
    @apply h-12 bg-dark-4 border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important;
  }

  .shad-textarea {
    @apply h-36 bg-dark-3 rounded-xl border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important;
  }

  /* Button */
  .shad-button_primary {
    @apply bg-primary-500 hover:bg-primary-500 text-light-1 flex gap-2 !important;
  }

  .shad-button_dark_4 {
    @apply h-12 bg-dark-4 px-5 text-light-1 flex gap-2 !important;
  }

  .shad-button_ghost {
    @apply flex gap-4 items-center justify-start hover:bg-transparent hover:text-white !important;
  }
}

```

</details>

```bash
# 安装React-router-dom

 npm install react-router-dom
 
```

# main.tsx配置

<details>
<summary><code>main.tsx</code></summary>

```typescript jsx
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import './globals.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

```

</details>

# 创建路由以及配套组件

<details>
<summary><code>App.tsx</code></summary>

```typescript jsx
import {Route, Routes} from 'react-router-dom'
import Home from '@/_root/pages/Home'
import AuthLayout from "@/_auth/AuthLayout.tsx";
import SigninFrom from "@/_auth/forms/SigninFrom.tsx";
import SignupFrom from "@/_auth/forms/SignupFrom.tsx";
import RootLayout from "@/_root/RootLayout.tsx";
import AllUsers from "@/_root/pages/AllUsers";
import Explore from "@/_root/pages/Explore";
import Saved from "@/_root/pages/Saved";
import CreatePost from "@/_root/pages/CreatePost";
import EditPost from "@/_root/pages/EditPost";
import PostDetails from "@/_root/pages/PostDetails";
import Profile from "@/_root/pages/Profile";
import UpdateProfile from "@/_root/pages/UpdateProfile";

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


```

</details>

<details>
<summary><code>AuthLayout.tsx</code></summary>

```typescript jsx
    import {Navigate, Outlet} from "react-router-dom";

const AuthLayout = () => {
    const isAuthenticated = false //验证是否登录
    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" /> //登录传送首页
            ):(
                <>
                    <section className="flex flex-1 justify-center items-center flex-col py-10">
                        <Outlet/> {/*内组件放在*/}
                    </section>

                    <img
                        src="/assets/images/side-img.svg"
                        alt="logo"
                        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                    />
                </>
            )}
        </>
    )
}

export default AuthLayout
```
</details>

# 登录
```bash
# npx shadcn@latest add from and input
npx shadcn@latest add from
npx shadcn@latest add input
```
# 步骤1
<details>
<summary><code>SigninFrom.tsx</code></summary>

```typescript jsx
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const SigninFrom = () => {

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <img src="/assets/images/logo.svg" alt="logo"/>
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                    登录你的账户
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    欢迎你，请登录你的账户以继续使用我们的服务。
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">邮箱账户</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">密码</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Form>
    )
}

export default SigninFrom

```

</details>

# 定义加载组件[components-创建shared目录]

<details>
<summary><code>loader.tsx</code></summary>


```typescript jsx
const Loader = () => {
    return (
        <div className="flex-center w-full">
            <img src="/assets/icons/loader.svg" alt="loader" width={24} height={24}/>
        </div>
    )
}

export default Loader

```
</details>

# 创建后端链接配置[具体操作 https://cloud.appwrite.io/v1]
# 创建ts声明 [创建types文件夹]

<details>
<summary><code>index.ts</code></summary>

```ts
export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
};

export type IUpdateUser = {
    userId: string;
    name: string;
    bio: string;
    imageId: string;
    imageUrl: URL | string;
    file: File[];
};

export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
};

export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string;
};

export type IUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
};

export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
};
```
</details>

### 前端配置
# lib文件夹[创建appwrite文件夹]
# 配置

<details>
<summary><code>config.ts</code></summary>

```ts
import { Client,Account,Databases,Storage,Avatars } from "appwrite";

export const appwriteConfig = {
    /*后端数据访问地址*/
    url: import.meta.env.VITE_APPWRITE_URL,
    /*后端项目ID*/
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    /*后端数据库ID*/
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    /*后端存储库ID*/
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    /*用户数据集合ID*/
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    /*用户发布帖子集合ID*/
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    /*用户保存集合ID*/
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

```
</details>

# 后端框架数据测试配置[自定义配置]
# <a href="https://cloud.appwrite.io">后端框架地址</a>

# 第一步注册账号[也可直接github账号登录]
# 第二步创建项目[名称英文，其他随意]
```bash
# 生成的项目ID填入环境中

# 如

# 项目ID
VITE_APPWRITE_PROJECT_ID='随机生成的项目id'

# 后依次创建
# 数据库ID
VITE_APPWRITE_DATABASE_ID='创建完成后的随机数据库id'
# 存储ID
VITE_APPWRITE_STORAGE_ID='创建完成后的存储id'[设置权限与@操作一致]

# 下列集合注意大小写

# 用户集合ID
VITE_APPWRITE_USER_COLLECTION_ID='创建数据集合Users的id'
# 帖子集合ID
VITE_APPWRITE_POST_COLLECTION_ID='创建数据集合Posts的id'
# 保存集合ID
VITE_APPWRITE_SAVES_COLLECTION_ID="创建数据集合Saves的id"
```
# @ 点击数据库后点击users集合的设置[找到权限点击any,全部点上后更新，三个集合依次操作]

# 点击Users集合属性点击创建属性

# 操作1
```text
点击关系 ——> 点击双向关系 ——> 选择Posts集合 ——> Attribute Key值为[posts]:注意大小写 ——> Attribute Key(related collection)值为[creator]
关系选择[多对一]：{Many to one} ————> 删除文档时选择[Set NULL - set document ID as NULL in all related documents]

```

# 操作2
```text
点击关系 ——> 点击双向关系 ——> 选择Posts集合 ——> Attribute Key值为[liked]:注意大小写 ——> Attribute Key(related collection)值为[likes]
关系选择[多对多]：{Many to Many} ————> 删除文档时选择[Set NULL - set document ID as NULL in all related documents]

```

# 操作3
```text
点击关系 ——> 点击双向关系 ——> 选择Saves集合 ——> Attribute Key值为[save]:注意大小写 ——> Attribute Key(related collection)值为[user]
关系选择[多对一]：{Many to one} ————> 删除文档时选择[Set NULL - set document ID as NULL in all related documents]

```
# 添加属性

```text
Attribute Key: name
Size: 2200
```
```text
Attribute Key: username
Size: 2200
```
```text
Attribute Key: bio
Size: 2200 
```
```text
Attribute Key: imageId
Size: 2200
```
```text
选择email
Attribute Key: email
选择必填

Attribute Key:accountId
Size: 2200
选择必填

选择Url
Attribute Key:imageUrl
选择必填

```

# 选择Posts集合添加属性
```text

Attribute Key:caption
Size: 2200

Attribute Key: tags
Size: 2200
选择数组

选择URl
Attribute Key:imageUrl
Size: 2200
选择必填

Attribute Key:imageId
Size: 2200
选择必填

Attribute Key:location
Size: 2200
```
```text
点击关系 ——> 点击双向关系 ——> 选择Saves集合 ——> Attribute Key值为[save]:注意大小写 ——> Attribute Key(related collection)值为[post]
关系选择[多对一]：{Many to one} ————> 删除文档时选择[Set NULL - set document ID as NULL in all related documents]

```

# 前端

# [lib文件夹创建validation文件]

<details>
<summary><code>index.ts</code></summary>

# 输入框验证信息

```ts
import * as z from 'zod'

/*登录*/
export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "密码至少为八位数." }),
});
```
</details>

# 完善登录组件

<details>
<summary><code>SigninFrom.tsx</code></summary>

```typescript jsx
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Link} from "react-router-dom";
import {SigninValidation} from "@/lib/validation";

const SigninFrom = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof SigninValidation>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <div className="flex justify-between">
                    <img src="/assets/images/logo.svg" alt="logo"/>
                    <div className="flex-center text-white h3-bold text-right">交流平台</div>
                </div>
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                    登录你的账户
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    欢迎你，请登录你的账户以继续使用我们的服务。
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">邮箱账户</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">密码</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/*登录按钮*/}
                    <Button type="submit" className="shad-button_primary">
                        登录
                    </Button>

                    {/*转到注册*/}
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        没有&apos;账户？
                        <Link to={"/sign-up"}
                              className="text-primary-500 text-small-semibold ml-1">
                            前往注册
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default SigninFrom
```
</details>

# 完善注册表单

<details>
<summary>SignupFrom.tsx</summary>

```typescript jsx
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Link} from "react-router-dom";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader.tsx";


const SignupFrom = () => {

   /*注册表单数据*/
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            username: "",
            name:"",
            email: "",
            password: "",
        },
    })

    /*注册逻辑*/
    const onSubmit = async (values: z.infer<typeof SignupValidation>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <div className="flex justify-between">
                    <img src="/assets/images/logo.svg" alt="logo"/>
                    <div className="flex-center text-white h3-bold text-right">交流平台</div>
                </div>
                <h2 className="h4-bold md:h2-bold pt-5 sm:pt-12">
                    创建一个账户
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                   要使用交流平台，输入你的账户详细信息
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">姓名</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">名字</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">账户</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">密码</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/*注册加载*/}
                    <Button type="submit" className="shad-button_primary">
                        <div className="flex-center gap-2">
                            <Loader /> 加载中...
                        </div>
                        注册
                    </Button>

                    {/*转到登录*/}
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        已有&apos;账户？
                        <Link to={"/sign-in"}
                              className="text-primary-500 text-small-semibold ml-1">
                            前往登录
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default SignupFrom

```
</details>

# 转到appwrite文件夹

<details>
<summary><code>api.tsx</code></summary>

```typescript jsx
import {account, appwriteConfig, avatars, databases} from "@/lib/appwrite/config.ts";
import {INewUser} from "@/types";
import {ID, Query} from "appwrite";

/*用户登录*/
export async function signInAccount(user: { email: string; password: string }) {
    try {
        /*获取账户密码*/
        return await account.createEmailSession(user.email, user.password);
    } catch (error) {
        console.log(error);
    }
}

/*用户注册*/
export async function createUserAccount(user:INewUser) {
    try {
        /*创建新的账户*/
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        if(!newAccount) throw new Error("创建账户错误")

        /*获取用户头像Url*/
        const avatarUrl = avatars.getInitials(user.name)

        /*保存信息到数据库*/
        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        });

        return newUser

    }catch (error){
        console.error(error)
    }
}

/*保存用户信息到后端数据库*/
export async function saveUserToDB(user:{
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}){
    try {
        /*创建新的用户信息*/
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );

        return newUser
    }catch (error){
        console.error(error)
    }
}

/*查询用户信息*/
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();

        if (!currentAccount) throw Error;

       /*根据ID查找用户信息*/
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

/*获取当前账户信息*/
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;

    } catch (error) {
        console.log(error);
    }
}

```
</details>

# 转到 react-query

<details>
<summary><code>queries.tsx</code></summary>

```typescript jsx
import {useMutation} from "@tanstack/react-query";
import {createUserAccount, signInAccount} from "@/lib/appwrite/api.ts";
import {INewUser} from "@/types";

/*用户登录*/
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) =>
            signInAccount(user),
    });
}

/*用户注册*/
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

```
</details>

# 验证


<details>
<summary><code>【创建】QueryProvider.tsx</code></summary>

```typescript jsx
/*管理获取和缓存*/
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
```
</details>

# 【创建登录验证文件信息】【context】

# 验证信息

<details>
<summary><code>AuthContext.tsx</code></summary>

```typescript jsx
/*验证*/
import { useNavigate } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";

import { IUser } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";
/*
useNavigate：从 react-router-dom 导入的钩子，用于导航。
createContext、useContext、useEffect、useState：从 react 导入的钩子，用于创建上下文和管理状态。
IUser：从项目类型定义文件中导入的用户接口。
getCurrentUser：从项目的 Appwrite API 文件中导入的函数，用于获取当前登录用户的详细信息。*/

/*
* 定义初始用户和初始状态
* INITIAL_USER：定义了一个初始用户对象，所有字段都是空字符串。
* INITIAL_STATE：定义了初始状态对象，包括用户信息、加载状态、认证状态以及相应的设置函数和检查函数。
* */
// eslint-disable-next-line react-refresh/only-export-components
export const INITIAL_USER = {
    id: "",
    name: "",
    username: "",
    email: "",
    imageUrl: "",
    bio: "",
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean,
};

/*
*   定义上下文类型
*  IContextType：定义了上下文对象的类型，包括用户信息、加载状态、认证状态以及相应的设置函数和检查函数。
* */
type IContextType = {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};

/* 创建上下文
    AuthContext：使用 createContext 创建一个上下文对象，并传入初始状态。
*/
const AuthContext = createContext<IContextType>(INITIAL_STATE);

/*
* AuthProvider：这是一个高阶组件，它接收 children 属性，这个属性通常是包含其他组件的React元素。
    navigate：从 react-router-dom 获取的导航函数。
    user、isAuthenticated、isLoading：使用 useState 管理的状态变量。
    checkAuthUser：异步函数，用于检查当前用户是否已认证。如果用户已认证，更新用户信息和认证状态。
    useEffect：生命周期钩子，用于在组件挂载时检查用户的认证状态。如果本地存储中的 cookieFallback 为空或不存在，则导航到登录页面。
    value：上下文对象，包含用户信息、加载状态、认证状态以及相应的设置函数和检查函数。
    返回一个 AuthContext.Provider 组件，将 value 作为值传递给子组件。
* */

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    /* navigate：从 react-router-dom 获取的导航函数。
    user、isAuthenticated、isLoading：使用 useState 管理的状态变量。
    checkAuthUser：异步函数，用于检查当前用户是否已认证。如果用户已认证，更新用户信息和认证状态。*/
    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            const currentAccount = await getCurrentUser();
            if (currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio,
                });
                setIsAuthenticated(true);

                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    /*如果本地存储中的 cookieFallback 为空或不存在，则导航到登录页面*/
    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");
        if (
            cookieFallback === "[]" ||
            cookieFallback === null ||
            cookieFallback === undefined
        ) {
            navigate("/sign-in");
        }

        checkAuthUser();
    }, [navigate]);

    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/*useUserContext：自定义钩子，用于在其他组件中访问 AuthContext 上下文对象。*/
// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(AuthContext);

/*
* 实现了一个认证上下文，用于管理用户的认证状态和信息。通过 AuthProvider 组件，您可以将认证状态和用户信息传递给所有嵌套的子组件，并通过 useUserContext 钩子在任何地方访问这些信息
* */

```

</details>

# 合并

<details>
<summary><code>main.tsx</code></summary>

```typescript jsx
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import './globals.css'
import {BrowserRouter} from "react-router-dom";
import {QueryProvider} from "@/lib/react-query/QueryProvider.tsx";
import {AuthProvider} from "@/context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryProvider>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </QueryProvider>
    </BrowserRouter>
)


```
</details>


# 完成登录注册逻辑

<details>
<summary><code>SigninForm.tsx</code></summary>

```typescript jsx
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Link, useNavigate} from "react-router-dom";
import {SigninValidation} from "@/lib/validation";
import {useUserContext} from "@/context/AuthContext.tsx";
import {useSignInAccount} from "@/lib/react-query/queries.ts";
import {useToast} from "@/hooks/use-toast.ts";
import Loader from "@/components/shared/Loader";

const SigninFrom = () => {


    const { toast } = useToast();
    const navigate = useNavigate();
    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
    const { mutateAsync: signInAccount, isLoading } = useSignInAccount();

    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const handleSignin = async (user: z.infer<typeof SigninValidation>) => {

        const session = await signInAccount(user);

        if(!session) {
            toast({title:"登录失败，再试一次"})

            return
        }

        /*检测是否登录成功*/
        const isLoggedIn = await checkAuthUser();

        if (isLoggedIn) {
            form.reset();

            navigate("/")
        } else {
            toast({title:"登录失败，再试一次"})

            return
        }

    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <div className="flex justify-between">
                    <img src="/assets/images/logo.svg" alt="logo"/>
                    <div className="flex-center text-white h3-bold text-right">交流平台</div>
                </div>
                <h2 className="h4-bold md:h2-bold pt-5 sm:pt-12">
                    登录你的账户
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    欢迎你，请登录你的账户以继续使用我们的服务。
                </p>
                <form onSubmit={form.handleSubmit(handleSignin)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">邮箱账户</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">密码</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/*登录按钮*/}
                    <Button type="submit" className="shad-button_primary">
                        {isLoading || isUserLoading ? (
                            <div className="flex-center gap-2">
                                <Loader /> 加载中...
                            </div>
                        ) : (
                            "登录"
                        )}
                    </Button>

                    {/*转到注册*/}
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        没有&apos;账户？
                        <Link to={"/sign-up"}
                              className="text-primary-500 text-small-semibold ml-1">
                            前往注册
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default SigninFrom

```

</details>


<details>
<summary><code>SignupForm.tsx</code></summary>

```typescript jsx
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Link, useNavigate} from "react-router-dom";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader.tsx";
import {useToast} from "@/hooks/use-toast.ts";
import {useCreateUserAccount, useSignInAccount} from "@/lib/react-query/queries.ts";
import {useUserContext} from "@/context/AuthContext.tsx";



const SignupFrom = () => {

    const { toast } = useToast();
    const navigate = useNavigate();
    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
    const { mutateAsync: createUserAccount, isLoading: isCreatingAccount} = useCreateUserAccount()
    const { mutateAsync: signInAccount, isLoading: isSigningInUser } = useSignInAccount();

   /*注册表单数据*/
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            username: "",
            name:"",
            email: "",
            password: "",
        },
    })

    /*注册逻辑*/
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
        console.log(values)
        const newUser = await createUserAccount(values)

        if(!newUser) {
            toast({title:"注册遇到错误，请再试一遍"})

            return
        }

        const session = await signInAccount({
            email: values.email,
            password: values.password,
        })

        if (!session) {
            toast({ title: "网络出现了问题，请从新登录", });

            navigate("/sign-in");

            return;
        }

        const isLoggedIn = await checkAuthUser();

        if (isLoggedIn) {

            form.reset();
            navigate("/");
        } else {
            toast({ title: "登录失败，请再试一次", });

            return;
        }
    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <div className="flex justify-between">
                    <img src="/assets/images/logo.svg" alt="logo"/>
                    <div className="flex-center text-white h3-bold text-right">交流平台</div>
                </div>
                <h2 className="h4-bold md:h2-bold pt-5 sm:pt-12">
                    创建一个账户
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                   要使用交流平台，输入你的账户详细信息
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">姓名</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">名字</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">账户</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">密码</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/*注册加载*/}
                    <Button type="submit" className="shad-button_primary">
                        {isCreatingAccount || isSigningInUser || isUserLoading ? (
                            <div className="flex-center gap-2">
                                <Loader /> 加载中...
                            </div>
                        ) : (
                            "注册"
                        )}
                    </Button>

                    {/*转到登录*/}
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        已有&apos;账户？
                        <Link to={"/sign-in"}
                              className="text-primary-500 text-small-semibold ml-1">
                            前往登录
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default SignupFrom

```

</details>

# 用户登出功能

# api
```ts
/*用户登出*/
export async function signOutAccount() {
    try {
        /*删除当前登录信息*/
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        console.log(error);
    }
}
```

# queries

```ts
/*用户登出*/
export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};

```
# 创建样式组件[pages/]
<details>
<summary><code>RootLayout.tsx</code></summary>

```typescript jsx
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

```
</details>

# 逻辑使用指南

```typescript jsx
import { Button } from "@/components/ui/button";
import {Link, useNavigate} from "react-router-dom";
import {useUserContext} from "@/context/AuthContext.tsx";
import {useSignOutAccount} from "@/lib/react-query/queries.ts";
import {useEffect} from "react";

const Topbar = () => {

    const navigate = useNavigate();

    /*获取用户信息*/
    const { user } = useUserContext()

    /*用户登出逻辑*/
    const { mutate: signOut, isSuccess } = useSignOutAccount();

    /*监听变化是否登出,登出刷新页面*/
    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess, navigate]);


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
                        onClick={() => signOut()}
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



```
# 创建路由便利数据[创建constants]

```ts
/*左侧导航栏便利数据*/
export const sidebarLinks = [
    {
        imgURL: "/assets/icons/home.svg",
        route: "/",
        label: "首页",
    },
    {
        imgURL:'/assets/icons/wallpaper.svg',
        route: "/explore",
        label: "全部话题",
    },
    {
        imgURL:'/assets/icons/people.svg',
        route: "/all-users",
        label: "用户",
    },
    {
        imgURL: '/assets/icons/bookmark.svg',
        route: "/saved",
        label: "保存",
    },
    {
        imgURL: '/assets/icons/gallery-add.svg',
        route: "/create-post",
        label: "创建新的话题",
    },
];
/*底部缩放便利数据*/
export const bottombarLinks = [
    {
        imgURL: '/assets/icons/home.svg',
        route: "/",
        label: "首页",
    },
    {
        imgURL: '/assets/icons/wallpaper.svg',
        route: "/explore",
        label: "帖子",
    },
    {
        imgURL:'/assets/icons/bookmark.svg',
        route: "/saved",
        label: "保存",
    },
    {
        imgURL: '/assets/icons/gallery-add.svg',
        route: "/create-post",
        label: "创建",
    },
];

```



# 左侧导航栏

```tsx
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
```
# 等比例缩放底部导航栏

```typescript jsx
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

```

# pages/CreatePost

```tsx
import PostForm from "@/components/forms/PostForm.tsx";

const CreatePost = () => {
    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-5xl flex-start gap-3 justify-start w-full">
                    <img src="/assets/icons/add-post.svg" alt="add post" width={36} height={36} />
                    <h2 className="h3-bold md:h2-bold text-left w-full">创建新的话题</h2>
                </div>

                    <PostForm action={"创建"}/>
                </div>
            </div>
    )
}

export default CreatePost
```
# 

```bash
# 安装文本框
npx shadcn@latest add textarea

```

# components[创建forms/PostForm]

```tsx
import {Models} from "appwrite";
import {useNavigate} from "react-router-dom";
import {useToast} from "@/hooks/use-toast";
import {useUserContext} from "@/context/AuthContext.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {PostValidation} from "@/lib/validation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import FileUploader from "@/components/shared/file/FileUploader.tsx";

/*定义表单属性*/
type PostFormProps = {
    post?: Models.Document;
    action: "创建" | "更新";
};



const PostForm = ({ post, action }: PostFormProps) => {

    const navigate = useNavigate();

    const { toast } = useToast();

    const { user } = useUserContext()

    console.log(action,navigate,toast,user)

    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.caption : "",
            file: [],
            location: post ? post.location : "",
            tags: post ? post.tags.join(",") : "",
        },
    });

    const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
        console.log(value)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-9 w-full  max-w-5xl"
            >
                <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">标题</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="shad-textarea custom-scrollbar"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">上传照片 or 视频</FormLabel>
                            <FormControl>
                                <FileUploader
                                    fieldChange={field.onChange}
                                    mediaUrl={post?.imageUrl}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default PostForm

```


# 定义上传组件FileUploader
# components/[创建forms]
```tsx


type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
    return (
        <div>
            File Uploader
        </div>
    )
}
export default FileUploader
```

# 安装react-dropzone[来对照片进行路径转换]

```bash

npm install react-dropzone
```

# 上传组件

<details>
<summary><code>FileUploader.tsx</code></summary>

```typescript jsx
import {useCallback, useState} from "react";
import {FileWithPath, useDropzone} from "react-dropzone";
import {convertFileToUrl} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";


type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {

    /*文件状态*/
    const [file, setFile] = useState<File[]>([])

    /*Url状态*/
    const [fileUrl, setFileUrl] = useState<string>(mediaUrl)

    /*文件拖拽事件*/
    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            /*设置文件状态*/
            setFile(acceptedFiles);
            /*调用fieldChange函数，将文件传递给父组件*/
            fieldChange(acceptedFiles);
            /*将文件转换成Url*/
            setFileUrl(convertFileToUrl(acceptedFiles[0]));
        },
        /*eslint-disable-next-line react-hooks/exhaustive-deps*/
        [file]
    );

    /*获取拖拽区域和输入框的属性*/
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpeg", ".jpg"],
        },
    });

    return (
        <div
            {...getRootProps()}
            className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
        >
            <input {...getInputProps()} className="cursor-pointer"/>
            {fileUrl ? (
                <>
                    <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
                        <img src={fileUrl} alt="image" className="file_uploader-img"/>
                    </div>
                    <p className="file_uploader-label">点击或者拖拽来上传</p>
                </>
            ) : (
                <div className="file_uploader-box ">
                    <img
                        src='/assets/icons/file-upload.svg'
                        width={96}
                        height={77}
                        alt="file upload"
                    />

                    <h3 className="base-medium text-light-2 mb-2 mt-6">
                        拖拽照片到这里
                    </h3>
                    <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

                    <Button type="button" className="shad-button_dark_4">
                        在计算机中查找
                    </Button>
                </div>
            )}
        </div>
    )
}
export default FileUploader

```

</details>

# 位置

```typescript jsx
<FormField
    control={form.control}
    name="location"
    render={({field}) => (
        <FormItem>
            <FormLabel className="shad-form_label">位置</FormLabel>
            <FormControl>
                <Input type="text" className="shad-input" {...field} />
            </FormControl>
            <FormMessage className="shad-form_message"/>
        </FormItem>
    )}
/>

```

# 标签
```typescript jsx
{/*标签*/}
<FormField
    control={form.control}
    name="tags"
    render={({field}) => (
        <FormItem>
            <FormLabel className="shad-form_label">
                添加标签 (用 " , "分开)
            </FormLabel>
            <FormControl>
                <Input
                    placeholder="学习，欣赏，等等"
                    type="text"
                    className="shad-input"
                    {...field}
                />
            </FormControl>
            <FormMessage className="shad-form_message"/>
        </FormItem>
    )}
/>

```

# api

```ts
/*上传文件*/
export async function uploadFile(file: File) {
    try {
        /*创建新文件*/
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        );

        return uploadedFile;
    } catch (error) {
        console.log(error);
    }
}
```

```ts
/*获取文件预览*/
export function getFilePreview(fileId: string) {
    try {
        /*获取文件预览URL*/
        const fileUrl = storage.getFilePreview(
            appwriteConfig.storageId,
            fileId,
            2000,
            2000,
            "top",
            100
        );

        if (!fileUrl) throw Error;

        return fileUrl;
    } catch (error) {
        console.log(error);
    }
}

```

```ts
/*删除文件*/
export async function deleteFile(fileId: string) {
    try {
        /*删除*/
        await storage.deleteFile(appwriteConfig.storageId, fileId);

        return { status: "ok" };
    } catch (error) {
        console.log(error);
    }
}

```
```ts
/*创建帖子*/
export async function createPost(post: INewPost) {
    try {
        /* 上传文件到Appwrite存储*/
        const uploadedFile = await uploadFile(post.file[0]);

        if (!uploadedFile) throw Error;

        /*获取文件预览URL*/
        const fileUrl = getFilePreview(uploadedFile.$id);
        if (!fileUrl) {
            await deleteFile(uploadedFile.$id);
            throw Error;
        }

        /*将标签转换为数组*/
        const tags = post.tags?.replace(/ /g, "").split(",") || [];

        /*创建帖子*/
        const newPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            ID.unique(),
            {
                creator: post.userId,
                caption: post.caption,
                imageUrl: fileUrl,
                imageId: uploadedFile.$id,
                location: post.location,
                tags: tags,
            }
        );

        if (!newPost) {
            await deleteFile(uploadedFile.$id);
            throw Error;
        }

        return newPost;
    } catch (error) {
        console.log(error);
    }
}

```
# 转到appwrite,创建【queryKeys.ts】

```ts
export enum QUERY_KEYS {
    // AUTH KEYS
    CREATE_USER_ACCOUNT = "createUserAccount",

    // USER KEYS
    GET_CURRENT_USER = "getCurrentUser",
    GET_USERS = "getUsers",
    GET_USER_BY_ID = "getUserById",

    // POST KEYS
    GET_POSTS = "getPosts",
    GET_INFINITE_POSTS = "getInfinitePosts",
    GET_RECENT_POSTS = "getRecentPosts",
    GET_POST_BY_ID = "getPostById",
    GET_USER_POSTS = "getUserPosts",
    GET_FILE_PREVIEW = "getFilePreview",

    //  SEARCH KEYS
    SEARCH_POSTS = "getSearchPosts",
}
```

# queries.ts

```ts
/*创建帖子*/
export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: INewPost) => createPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

```
# api
```ts
/*更新帖子*/
export async function updatePost(post: IUpdatePost) {
    const hasFileToUpdate = post.file.length > 0;

    try {
        let image = {
            imageUrl: post.imageUrl,
            imageId: post.imageId,
        };

        if (hasFileToUpdate) {
            // 上传新文件到Appwrite存储
            const uploadedFile = await uploadFile(post.file[0]);
            if (!uploadedFile) throw Error;

            // 获取新文件预览URL
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
                await deleteFile(uploadedFile.$id);
                throw Error;
            }

            image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
        }

        // 将标签转换为数组
        const tags = post.tags?.replace(/ /g, "").split(",") || [];

        // 更新帖子
        const updatedPost = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            post.postId,
            {
                caption: post.caption,
                imageUrl: image.imageUrl,
                imageId: image.imageId,
                location: post.location,
                tags: tags,
            }
        );

        // 更新失败
        if (!updatedPost) {
            // 删除新上传的文件
            if (hasFileToUpdate) {
                await deleteFile(image.imageId);
            }

            // 如果没有新文件上传，抛出错误
            throw Error;
        }

        // 更新成功后，安全删除旧文件
        if (hasFileToUpdate) {
            await deleteFile(post.imageId);
        }

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*获取最新的帖子*/
export async function getRecentPosts() {
    try {
        // 查询最近帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(20)]
        );

        if (!posts) throw Error;

        return posts;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户*/
export async function getUsers(limit?: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queries: any[] = [Query.orderDesc("$createdAt")];

    if (limit) {
        queries.push(Query.limit(limit));
    }

    try {
        const users = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            queries
        );

        if (!users) throw Error;

        return users;
    } catch (error) {
        console.log(error);
    }
}

```

# queries
```ts
/*更新帖子*/
export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: IUpdatePost) => updatePost(post),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
            });
        },
    });
};

/*获最新的帖子*/
export const useGetRecentPosts = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        queryFn: getRecentPosts,
    });
};

/*获取用户*/
export const useGetUsers = (limit?: number) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USERS],
        queryFn: () => getUsers(limit),
    });
};


```

# 完善创建帖子功能
```tsx
import {Models} from "appwrite";
import {useNavigate} from "react-router-dom";
import {useToast} from "@/hooks/use-toast";
import {useUserContext} from "@/context/AuthContext.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {PostValidation} from "@/lib/validation";
import { Input } from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
/*import FileUploaders from "@/components/shared/file/FileUploaders.tsx";*/
import FileUploader from "@/components/shared/file/FileUploader.tsx";
import {Button} from "@/components/ui/button.tsx";
import Loader from "@/components/shared/Loader.tsx";
import {useCreatePost, useUpdatePost} from "@/lib/react-query/queries.ts";

/*定义表单属性*/
type PostFormProps = {
    post?: Models.Document;
    action: "创建" | "更新";
};



const PostForm = ({ post, action }: PostFormProps) => {

    const navigate = useNavigate();

    const { toast } = useToast();

    const { user } = useUserContext()


    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.caption : "",
            file: [],
            location: post ? post.location : "",
            tags: post ? post.tags.join(",") : "",
        },
    });

    /*创建*/
    const { mutateAsync: createPost, isLoading: isLoadingCreate } =
        useCreatePost();
    /*更新*/
    const { mutateAsync: updatePost, isLoading: isLoadingUpdate } =
        useUpdatePost();

    const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
        // 如果是更新帖子
        if (post && action === "更新") {
            const updatedPost = await updatePost({
                ...value,
                postId: post.$id,
                imageId: post.imageId,
                imageUrl: post.imageUrl,
            });

            if (!updatedPost) {
                toast({
                    title: `${action} 再试一次.`,
                });
            }
            return navigate(`/posts/${post.$id}`);
        }

        // 如果是创建帖子
        const newPost = await createPost({
            ...value,
            userId: user.id,
        });

        if (!newPost) {
            toast({
                title: `${action} 失败再试一次吧.`,
            });
        }
        navigate("/");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-9 w-full  max-w-5xl"
            >
                {/*标题*/}
                <FormField
                    control={form.control}
                    name="caption"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">标题</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="shad-textarea custom-scrollbar"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                {/*上传*/}
                <FormField
                    control={form.control}
                    name="file"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">上传照片</FormLabel>
                            <FormControl>
                                <FileUploader
                                    fieldChange={field.onChange}
                                    mediaUrl={post?.imageUrl}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                {/*位置*/}
                <FormField
                    control={form.control}
                    name="location"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">位置</FormLabel>
                            <FormControl>
                                <Input type="text" className="shad-input" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                {/*标签*/}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">
                                添加标签 (用 " , "分开)
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="学习，欣赏，等等"
                                    type="text"
                                    className="shad-input"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                    )}
                />

                <div className="flex gap-4 items-center justify-end">
                    <Button
                        type="button"
                        className="shad-button_dark_4"
                        onClick={() => navigate(-1)}>
                        取消
                    </Button>
                    <Button
                        type="submit"
                        className="shad-button_primary whitespace-nowrap"
                        disabled={isLoadingCreate || isLoadingUpdate}>
                        {(isLoadingCreate || isLoadingUpdate) && <Loader/>}
                        {action} 新的话题
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default PostForm
```
# 首页 [Home]

```tsx
import {useGetRecentPosts, useGetUsers} from "@/lib/react-query/queries.ts";
import {Loader} from "lucide-react";
import {Models} from "appwrite";

const Home = () => {
    /*获取最新的帖子*/
    const { data: posts, isLoading: isPostLoading, isError: isErrorPosts,} = useGetRecentPosts();
    /*获取用户*/
    const {data: creators, isLoading: isUserLoading, isError: isErrorCreators,} = useGetUsers(10);

    /*如果获取帖子或用户失败，则显示错误信息*/
    if (isErrorPosts || isErrorCreators) {
        return (
            <div className="flex flex-1">
                <div className="home-container">
                    <p className="body-medium text-light-1">获取失败</p>
                </div>
                <div className="home-creators">
                    <p className="body-medium text-light-1">还没有用户发布新的帖子</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1">
            <div className="home-container">
                <div className="home-posts">
                    <h2 className="h3-bold md:h2-bold text-left w-full">首页</h2>
                    {isPostLoading && !posts ? (
                        <Loader/>
                    ) : (
                        <ul className="flex flex-col flex-1 gap-9 w-full ">
                            {posts?.documents.map((post: Models.Document) => (
                                <li key={post.$id} className="flex justify-center w-full">
                                    {/*数据遍历*/}
                                    {/*<PostCard post={post}/>*/}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
```
# 数据获取与查询

```typescript jsx
import {Models} from "appwrite";
import {useUserContext} from "@/context/AuthContext.tsx";
import {Link} from "react-router-dom";
import {multiFormatDateString} from "@/lib/utils.ts";

type PostCardProps = {
    post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {

    /*获取用户上下文*/
    const { user } = useUserContext();


    return (
        <div className="post-card">
            <div className="flex-between">
                <div className="flex items-center gap-3">
                    <Link to={`/profile/${post.creator.$id}`}>
                        <img
                            src={
                                post.creator?.imageUrl ||
                                '/assets/images/profile.png'
                            }
                            alt="creator"
                            className="w-12 lg:h-12 rounded-full"
                        />
                    </Link>

                    <div className="flex flex-col">
                        <p className="base-medium lg:body-bold text-light-1">
                            {post.creator.name}
                        </p>
                        <div className="flex-center gap-2 text-light-3">
                            <p className="subtle-semibold lg:small-regular ">
                                {multiFormatDateString(post.$createdAt)}
                            </p>
                            •
                            <p className="subtle-semibold lg:small-regular">
                                {post.location}
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    to={`/update-post/${post.$id}`}
                    className={`${user.id !== post.creator.$id && "hidden"}`}>
                    <img
                        src='/assets/icons/edit.svg'
                        alt="edit"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>

            <Link to={`/posts/${post.$id}`}>
                <div className="small-medium lg:base-medium py-5">
                    <p>{post.caption}</p>
                    <ul className="flex gap-1 mt-2">
                        {post.tags.map((tag: string, index: string) => (
                            <li key={`${tag}${index}`} className="text-light-3 small-regular">
                                #{tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <img
                    src={post.imageUrl || '/assets/icons/edit.svg'}
                    alt="post image"
                    className="post-card_img"
                />
            </Link>
            {/* 点赞,收藏 */}
            {/*<PostStats post={post} userId={user.id}/>*/}
        </div>
    )
}

export default PostCard
```
# 点赞/收藏

```typescript jsx
import {Models} from "appwrite";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
    return (
        <div>

        </div>
    )
}

export default PostStats

```

# api

```ts
/*点赞帖子*/
export async function likePost(postId: string, likesArray: string[]) {
    try {
        /*更新帖子点赞信息*/
        const updatedPost = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId,
            {
                likes: likesArray,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*保存帖子*/
export async function savePost(userId: string, postId: string) {
    try {
        // 创建新文档保存帖子
        const updatedPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.savesCollectionId,
            ID.unique(),
            {
                user: userId,
                post: postId,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*删除保存的贴子*/
export async function deleteSavedPost(savedRecordId: string) {
    try {
        // 删除保存的帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.savesCollectionId,
            savedRecordId
        );

        if (!statusCode) throw Error;

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}

```

# queries

```ts
/*点赞帖子*/
export const useLikePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
                         postId,
                         likesArray,
                     }: {
            postId: string;
            likesArray: string[];
        }) => likePost(postId, likesArray),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*收藏帖子*/
export const useSavePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
            savePost(userId, postId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*删除已收藏的帖子*/
export const useDeleteSavedPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (savedRecordId: string) => deleteSavedPost(savedRecordId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*获取当前用户*/
export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        queryFn: getCurrentUser,
    });
};

```

# 完善帖子保存功能

```typescript jsx
import {Models} from "appwrite";
import {useDeleteSavedPost, useGetCurrentUser, useLikePost, useSavePost} from "@/lib/react-query/queries.ts";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {checkIsLiked} from "@/lib/utils.ts";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
    const location = useLocation();
    const likesList = post.likes.map((user: Models.Document) => user.$id);

    const [likes, setLikes] = useState<string[]>(likesList);
    const [isSaved, setIsSaved] = useState(false);

    const { mutate: likePost } = useLikePost();
    const { mutate: savePost } = useSavePost();
    const { mutate: deleteSavePost } = useDeleteSavedPost();

    const { data: currentUser } = useGetCurrentUser();
    //检查帖子是否被喜欢
    const savedPostRecord = currentUser?.save.find(
        (record: Models.Document) => record.post.$id === post.$id
    );
    
    /*
    ·示例:[
      如果有保存的post记录，假设Saved的对象为true,调佣一个感叹号保存后记录，返回false,再调佣一次.如果用另外一个true重复这个过程，测试字符串可能会返回false，因为一旦否定它，会得到一个假值，然后一个假值是真的，所以在假值这样做，返回一个假，因为首先转换为真，然后为假，所以返回假。
      { Saved: true } => !savedPostRecord => ！false = true
       'TEST' => !'test' => ！false = true
      ]
    */


    //保存帖子状态
    useEffect(() => {
        setIsSaved(!!savedPostRecord);
    }, [currentUser, savedPostRecord]);

    const handleLikePost = (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => {
        e.stopPropagation();

        let likesArray = [...likes];

        if (likesArray.includes(userId)) {
            likesArray = likesArray.filter((Id) => Id !== userId);
        } else {
            likesArray.push(userId);
        }

        setLikes(likesArray);
        likePost({ postId: post.$id, likesArray });
    };

    const handleSavePost = (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => {
        e.stopPropagation();

        if (savedPostRecord) {
            setIsSaved(false);
            return deleteSavePost(savedPostRecord.$id);
        }

        savePost({ userId: userId, postId: post.$id });
        setIsSaved(true);
    };

    const containerStyles = location.pathname.startsWith("/profile")
        ? "w-full"
        : "";

    return (
        <div
            className={`flex justify-between items-center z-20 ${containerStyles}`}>
            <div className="flex gap-2 mr-5">
                <img
                    src={`${
                        checkIsLiked(likes, userId)
                            ? '/assets/icons/liked.svg'
                            : '/assets/icons/like.svg'
                    }`}
                    alt="like"
                    width={20}
                    height={20}
                    onClick={(e) => handleLikePost(e)}
                    className="cursor-pointer"
                />
                <p className="small-medium lg:base-medium">{likes.length}</p>
            </div>

            <div className="flex gap-2">
                <img
                    src={isSaved ? '/assets/icons/saved.svg' : '/assets/icons/save.svg'}
                    alt="share"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    onClick={(e) => handleSavePost(e)}
                />
            </div>
        </div>
    );
};

export default PostStats;

```
# 回到首页[列出所以用户名单]

```typescript jsx
import {useGetRecentPosts, useGetUsers} from "@/lib/react-query/queries.ts";
import Loader from "@/components/shared/Loader.tsx";
import {Models} from "appwrite";
import PostCard from "@/components/shared/Card/PostCard.tsx";
import UserCard from "@/components/shared/Card/UserCard.tsx";

const Home = () => {
    /*获取最新的帖子*/
    const { data: posts, isLoading: isPostLoading, isError: isErrorPosts,} = useGetRecentPosts();
    /*获取用户*/
    const {data: creators, isLoading: isUserLoading, isError: isErrorCreators,} = useGetUsers(10);

    /*如果获取帖子或用户失败，则显示错误信息*/
    if (isErrorPosts || isErrorCreators) {
        return (
            <div className="flex flex-1">
                <div className="home-container">
                    <p className="body-medium text-light-1">获取失败</p>
                </div>
                <div className="home-creators">
                    <p className="body-medium text-light-1">还没有用户发布新的帖子</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1">
            <div className="home-container">
                <div className="home-posts">
                    <h2 className="h3-bold md:h2-bold text-left w-full">首页</h2>
                    {isPostLoading && !posts ? (
                        <Loader/>
                    ) : (
                        <ul className="flex flex-col flex-1 gap-9 w-full ">
                            {posts?.documents.map((post: Models.Document) => (
                                <li key={post.$id} className="flex justify-center w-full">
                                    {/*数据遍历*/}
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/*参与话题总人数*/}
            <div className="home-creators">
                <h3 className="h3-bold text-light-1">人员列表</h3>
                {isUserLoading && !creators ? (
                    <Loader/>
                ) : (
                    <ul className="grid 2xl:grid-cols-2 gap-6">
                        {creators?.documents.map((creator) => (
                            <li key={creator?.$id}>
                                <UserCard user={creator}/>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Home

```
# UserCard

```typescript jsx
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";




type UserCardProps = {
    user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {

    return (
        <Link to={`/profile/${user.$id}`} className="user-card">
            {/** 显示用户头像 */}
            <img
                src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
                alt="creator"
                className="rounded-full w-14 h-14"
            />

            {/** 显示用户名和用户名 */}
            <div className="flex-center flex-col gap-1">
                <p className="base-medium text-light-1 text-center line-clamp-1">
                    {user.name}
                </p>
                <p className="small-regular text-light-3 text-center line-clamp-1">
                    @{user.username}
                </p>
            </div>

            {/** 显示Follow按钮 */}
            <Button type="button" size="sm" className="shad-button_primary px-5">
                详细信息
            </Button>
        </Link>
    );
};


export default UserCard;

```
# 编辑帖子【转到PostDetails:详细信息】

```typescript jsx
const PostDetails = ( ) => {
    return (
        <div>
            post Details
        </div>
    )
}

export default PostDetails;

```

# api

```ts
/*根据id获取帖子详细信息*/
export async function getPostById(postId?: string) {
    if (!postId) throw Error;

    try {
        /*根据帖子ID查询帖子信息*/
        const post = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户的帖子*/
export async function getUserPosts(userId?: string) {
    if (!userId) return;

    try {
        // 根据用户ID查询用户帖子
        const post = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*删除帖子*/
export async function deletePost(postId?: string, imageId?: string) {
    if (!postId || !imageId) return;

    try {
        // 删除帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!statusCode) throw Error;

        // 删除帖子对应的文件
        await deleteFile(imageId);

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}

```
# queries

```ts
/*根据id获取帖子*/
export const useGetPostById = (postId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POST_BY_ID, postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    });
};

/*获取用户帖子*/
export const useGetUserPosts = (userId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USER_POSTS, userId],
        queryFn: () => getUserPosts(userId),
        enabled: !!userId,
    });
};

/*删除帖子*/
export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ postId, imageId }: { postId?: string; imageId: string }) =>
            deletePost(postId, imageId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

```

# 详细信息

```tsx
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDeletePost, useGetPostById, useGetUserPosts} from "@/lib/react-query/queries.ts";
import {useUserContext} from "@/context/AuthContext.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Loader} from "lucide-react";
import PostStats from "@/components/shared/Card/PostStats.tsx";
import {multiFormatDateString} from "@/lib/utils.ts";
import GridPostList from "@/components/shared/Card/GridPostList.tsx";

const PostDetails = ( ) => {
    const navigate = useNavigate();
    // 使用useNavigate函数获取导航对象

    const { id } = useParams();
    // 使用useParams函数获取路由参数中的id

    const { user } = useUserContext();
    // 使用useUserContext函数获取用户信息

    const { data: post, isLoading } = useGetPostById(id);
    // 使用useGetPostById函数获取指定id的帖子信息

    const { data: userPosts, isLoading: isUserPostLoading } = useGetUserPosts(
        post?.creator.$id
    );
    // 使用useGetUserPosts函数获取指定用户的帖子列表

    const { mutate: deletePost } = useDeletePost();
    // 使用useDeletePost函数获取删除帖子的函数

    const relatedPosts = userPosts?.documents.filter(
        (userPost) => userPost.$id !== id
    );
    // 过滤掉当前帖子，获取相关帖子列表

    const handleDeletePost = () => {
        deletePost({ postId: id, imageId: post?.imageId });
        // navigate(-1);
        navigate("/");
    };
    // 定义删除帖子的函数

    return (
        <div className="post_details-container">
           <div className="hidden md:flex max-w-5xl w-full">
               <Button
                onClick={() => navigate(-1)}
                variant="ghost"
                className="shad-button_ghost"
               >
                   <img src="/assets/icons/back.svg" alt="back" width={24} height={24}/>
                   <p className="small-medium lg:base-medium">返回</p>
               </Button>
           </div>

            {isLoading || !post ? (
                <Loader />
            ) : (
                <div className="post_details-card">
                    <img
                        src={post?.imageUrl}
                        alt="creator"
                        className="post_details-img"
                    />

                    <div className="post_details-info">
                        <div className="flex-between w-full">
                            <Link
                                to={`/profile/${post?.creator.$id}`}
                                className="flex items-center gap-3">
                                <img
                                    src={
                                        post?.creator.imageUrl ||
                                        '/assets/icons/profile-placeholder.svg'
                                    }
                                    alt="creator"
                                    className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                                />
                                <div className="flex gap-1 flex-col">
                                    <p className="base-medium lg:body-bold text-light-1">
                                        {post?.creator.name}
                                    </p>
                                    <div className="flex-center gap-2 text-light-3">
                                        <p className="subtle-semibold lg:small-regular ">
                                            {multiFormatDateString(post?.$createdAt)}
                                        </p>
                                        •
                                        <p className="subtle-semibold lg:small-regular">
                                            {post?.location}
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <div className="flex-center gap-4">
                                <Link
                                    to={`/update-post/${post?.$id}`}
                                    className={`${user.id !== post?.creator.$id && "hidden"}`}>
                                    <img
                                        src="/assets/icons/edit.svg"
                                        alt="edit"
                                        width={24}
                                        height={24}
                                    />
                                </Link>

                                <Button
                                    onClick={handleDeletePost}
                                    variant="ghost"
                                    className={`ost_details-delete_btn ${
                                        user.id !== post?.creator.$id && "hidden"
                                    }`}>
                                    <img
                                        src="/assets/icons/delete.svg"
                                        alt="delete"
                                        width={24}
                                        height={24}
                                    />
                                </Button>
                            </div>
                        </div>

                        <hr className="border w-full border-dark-4/80" />

                        <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
                            <p>{post?.caption}</p>
                            <ul className="flex gap-1 mt-2">
                                {post?.tags.map((tag: string, index: string) => (
                                    <li
                                        key={`${tag}${index}`}
                                        className="text-light-3 small-regular">
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full">
                            <PostStats post={post} userId={user.id} />
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full max-w-5xl">
                <hr className="border w-full border-dark-4/80" />

                <h3 className="body-bold md:h3-bold w-full my-10">
                    更多
                </h3>
                {isUserPostLoading || !relatedPosts ? (
                    <Loader />
                ) : (
                    <GridPostList posts={relatedPosts} />
                )}
            </div>
        </div>
    )
}

export default PostDetails;

```

# 编辑

```tsx
import PostForm from "@/components/forms/PostForm"
import Loader from "@/components/shared/Loader"
import { useGetPostById } from "@/lib/react-query/queries"
import { useParams } from "react-router-dom"

const EditPost = () => {
    const { id } = useParams()
    //获取帖子的详细信息，用于编辑
    const { data: post, isLoading } = useGetPostById(id);

    if (isLoading)
        return (
            <div className="flex-center w-full h-full">
                <Loader />
            </div>
        );
    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="flex-start gap-3 justify-start w-full max-w-5xl">
                    <img
                        src="/assets/icons/edit.svg"
                        alt="add post"
                        width={36}
                        height={36}
                        className="invert-white"
                    />
                    <h2 className="h3-bold md:h2-bold text-left w-full">编辑</h2>
                </div>

                {isLoading ? <Loader /> : <PostForm action="更新" post={post} />}
            </div>
        </div>
    )
}

export default EditPost

```
# 全部话题

```tsx
const Explore = () => {
    return (
        <div>
            Explore
        </div>
    )
}
export default Explore

```

# api

```ts
/*根据id获取帖子详细信息*/
export async function getPostById(postId?: string) {
    if (!postId) throw Error;

    try {
        /*根据帖子ID查询帖子信息*/
        const post = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户的帖子*/
export async function getUserPosts(userId?: string) {
    if (!userId) return;

    try {
        // 根据用户ID查询用户帖子
        const post = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*删除帖子*/
export async function deletePost(postId?: string, imageId?: string) {
    if (!postId || !imageId) return;

    try {
        // 删除帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!statusCode) throw Error;

        // 删除帖子对应的文件
        await deleteFile(imageId);

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}

/*获取帖子数据*/
export async function getInfinitePosts({ pageParam }: { pageParam: number }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queries: any[] = [Query.orderDesc("$updatedAt"), Query.limit(9)];

    if (pageParam) {
        queries.push(Query.cursorAfter(pageParam.toString()));
    }

    try {
        // 查询无限帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            queries
        );

        if (!posts) throw Error;

        return posts;
    } catch (error) {
        console.log(error);
    }
}

/*搜索帖子*/
export async function searchPosts(searchTerm: string) {
    try {
        // 根据搜索词查询帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.search("caption", searchTerm)]
        );

        if (!posts || !posts.documents || posts.documents.length === 0) {
            return { documents: [] }; // 返回空数组
        }

        return posts;

    } catch (error) {
        console.error('Error searching posts:', error);
        return { documents: [] }; // 返回空数组
    }
}


```
# queries

```ts
/*根据id获取帖子*/
export const useGetPostById = (postId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POST_BY_ID, postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    });
};

/*获取用户帖子*/
export const useGetUserPosts = (userId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USER_POSTS, userId],
        queryFn: () => getUserPosts(userId),
        enabled: !!userId,
    });
};

/*删除帖子*/
export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ postId, imageId }: { postId?: string; imageId: string }) =>
            deletePost(postId, imageId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

/*获取帖子数据*/
export const useGetPosts = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.GET_INFINITE_POSTS],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryFn: getInfinitePosts as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getNextPageParam: (lastPage: any) => {
            // 如果没有数据，就没有更多页面。
            if (lastPage && lastPage.documents.length === 0) {
                return null;
            }

            // 使用最后一个文档的$id作为游标。
            return lastPage.documents[lastPage.documents.length - 1].$id;
        },
    });
};

/*搜索帖子*/
export const useSearchPosts = (searchTerm: string) => {
    return useQuery(
        [QUERY_KEYS.SEARCH_POSTS, searchTerm], // queryKey 应该是一个数组
        () => searchPosts(searchTerm), // queryFn
        {
            enabled: !!searchTerm,
            retry: false, // 不重试
            refetchOnWindowFocus: false, // 不在窗口焦点变化时重新获取数据
            initialData: { documents: [], total: 0 }, // 初始数据符合 DocumentList 类型
            onError: (error) => {
                console.error('没有这个帖子:', error);
            },
            onSuccess: (data) => {
                console.log('Search posts success:', data);
            }
        }
    );
};

```
# 完成
```typescript jsx
import GridPostList from "@/components/shared/Card/GridPostList.tsx";
import Loader from "@/components/shared/Loader.tsx";
import { useInView } from "react-intersection-observer";
import { useGetPosts, useSearchPosts } from "@/lib/react-query/queries.ts";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce.tsx";
import { Input } from "@/components/ui/input.tsx";

/*定义搜索组件props类型*/
export type SearchResultProps = {
    isSearchFetching: boolean;
    /*eslint-disable-next-line @typescript-eslint/no-explicit-any*/
    searchedPosts: { documents: any[] };
};

/*搜索组件*/
const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
    /*如果正在搜索，则显示加载器*/
    if (isSearchFetching) {
        return <Loader />;
    }
    /*如果搜索结果不为空，则显示搜索结果*/
    else if (searchedPosts && searchedPosts.documents.length > 0) {
        return <GridPostList posts={searchedPosts.documents} />;
    }
    /*否则显示没有找到结果*/
    else {
        return (
            <p className="text-light-4 mt-10 text-center w-full">没有这个结果</p>
        );
    }
};

const Explore = () => {
    /*使用useInView获取ref和inView状态*/
    const { ref, inView } = useInView();

    /*获取帖子数据：一共有多少帖子*/
    const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

    /*定义搜索值和防抖搜索值状态*/
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useDebounce(searchValue, 500);

    /*获取搜索结果*/
    const { data: searchedPosts = { documents: [] }, isFetching: isSearchFetching } = useSearchPosts(debouncedSearch);

    /*当inView为true且没有搜索值时，调用fetchNextPage函数*/
    useEffect(() => {
        if (inView && !searchValue) {
            fetchNextPage().then(r => {
                console.log(r);
            }).catch(error => {
                console.error('错误是:', error);
            });
        }
    }, [fetchNextPage, inView, searchValue]);

    /*如果帖子无任何数据*/
    if (!posts) {
        return (
            <div className="flex-center w-full h-full">
                <Loader />
            </div>
        );
    }

    /*定义是否显示搜索结果和是否显示帖子的状态*/
    const shouldShowSearchResults = searchValue !== "";
    const shouldShowPosts = !shouldShowSearchResults &&
        posts.pages.every((item) => item.documents.length === 0);


    return (
        <div className="explore-container">
            <div className="explore-inner_container">
                <h2 className="h3-bold md:h2-bold w-full">搜索</h2>
                <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
                    <img
                        src='/assets/icons/search.svg'
                        width={24}
                        height={24}
                        alt="search"
                    />
                    <Input
                        type="text"
                        placeholder="输入关键词"
                        className="explore-search"
                        value={searchValue}
                        onChange={(e) => {
                            const { value } = e.target;
                            setSearchValue(value);
                        }}
                    />
                </div>
            </div>

            <div className="flex-between w-full max-w-5xl mt-16 mb-7">
                <h3 className="body-bold md:h3-bold">今天的帖子</h3>

                <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
                    <p className="small-medium md:base-medium text-light-2">更多</p>
                    <img
                        src='/assets/icons/filter.svg'
                        width={20}
                        height={20}
                        alt="filter"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-9 w-full max-w-5xl">
                {shouldShowSearchResults ? (
                    <SearchResults
                        isSearchFetching={isSearchFetching}
                        searchedPosts={searchedPosts}
                    />
                ) : shouldShowPosts ? (
                    <p className="text-light-4 mt-10 text-center w-full">结束</p>
                ) : (
                    posts.pages.map((item, index) => (
                        <GridPostList key={`page-${index}`} posts={item.documents} />
                    ))
                )}
            </div>

            {hasNextPage && !searchValue && (
                <div ref={ref} className="mt-10">
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default Explore;
```
# api
```ts
/*用于根据用户ID获取用户信息*/
export async function getUserById(userId: string) {
    try {
        // 从数据库中获取指定用户ID的用户信息
        const user = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            userId
        );

        // 如果没有获取到用户信息，则抛出错误
        if (!user) throw Error;

        // 返回用户信息
        return user;
    } catch (error) {
        // 打印错误信息
        console.log(error);
    }
}

/*更新用户个人信息*/
export async function updateUser(user: IUpdateUser) {
    const hasFileToUpdate = user.file.length > 0;
    try {
        let image = {
            imageUrl: user.imageUrl,
            imageId: user.imageId,
        };

        if (hasFileToUpdate) {
            // Upload new file to appwrite storage
            const uploadedFile = await uploadFile(user.file[0]);
            if (!uploadedFile) throw Error;

            // Get new file url
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
                await deleteFile(uploadedFile.$id);
                throw Error;
            }

            image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
        }

        //  Update user
        const updatedUser = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            user.userId,
            {
                name: user.name,
                bio: user.bio,
                imageUrl: image.imageUrl,
                imageId: image.imageId,
            }
        );

        // Failed to update
        if (!updatedUser) {
            // Delete new file that has been recently uploaded
            if (hasFileToUpdate) {
                await deleteFile(image.imageId);
            }
            // If no new file uploaded, just throw error
            throw Error;
        }

        // Safely delete old file after successful update
        if (user.imageId && hasFileToUpdate) {
            await deleteFile(user.imageId);
        }

        return updatedUser;
    } catch (error) {
        console.log(error);
    }
}

```
# queries
```ts
/*用于根据用户ID获取用户信息*/
export const useGetUserById = (userId: string) => {
    // 使用useQuery函数，传入查询键、查询函数和是否启用查询
    return useQuery({
        // 查询键为QUERY_KEYS.GET_USER_BY_ID和用户ID
        queryKey: [QUERY_KEYS.GET_USER_BY_ID, userId],
        // 查询函数为getUserById，传入用户ID
        queryFn: () => getUserById(userId),
        // 如果用户ID存在，则启用查询
        enabled: !!userId,
    });
};

/*更新用户个人信息*/
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (user: IUpdateUser) => updateUser(user),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_USER_BY_ID, data?.$id],
            });
        },
    });
};


```
# 编辑个人信息

```tsx
import {useToast} from "@/hooks/use-toast.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useUserContext} from "@/context/AuthContext.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useGetUserById, useUpdateUser} from "@/lib/react-query/queries.ts";
import Loader from "@/components/shared/Loader.tsx";
import {ProfileValidation} from "@/lib/validation";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import ProfileUploader from "@/components/shared/Profile/ProfileUploader.tsx";

const UpdateProfile = () => {
    // 使用useToast获取toast实例
    const { toast } = useToast();
    // 使用useNavigate获取导航实例
    const navigate = useNavigate();
    // 使用useParams获取路由参数
    const { id } = useParams();
    // 使用useUserContext获取用户上下文
    const { user, setUser } = useUserContext();
    // 使用useForm获取表单实例
    const form = useForm<z.infer<typeof ProfileValidation>>({
        resolver: zodResolver(ProfileValidation),
        defaultValues: {
            file: [],
            name: user.name,
            username: user.username,
            email: user.email,
            bio: user.bio || "",
        },
    });

    // Queries
    // 使用useGetUserById获取当前用户信息
    const { data: currentUser } = useGetUserById(id || "");
    // 使用useUpdateUser更新用户信息
    const { mutateAsync: updateUser, isLoading: isLoadingUpdate } =
        useUpdateUser();

    // 如果当前用户不存在，则返回加载器
    if (!currentUser)
        return (
            <div className="flex-center w-full h-full">
                <Loader />
            </div>
        );

    // Handler
    // 处理更新用户信息
    const handleUpdate = async (value: z.infer<typeof ProfileValidation>) => {
        // 更新用户信息
        const updatedUser = await updateUser({
            userId: currentUser.$id,
            name: value.name,
            bio: value.bio,
            file: value.file,
            imageUrl: currentUser.imageUrl,
            imageId: currentUser.imageId,
        });

        // 如果更新失败，则显示错误提示
        if (!updatedUser) {
            toast({
                title: `更新失败.`,
            });
        }

        // 更新用户上下文
        setUser({
            ...user,
            name: updatedUser?.name,
            bio: updatedUser?.bio,
            imageUrl: updatedUser?.imageUrl,
        });
        // 导航到用户个人主页
        return navigate(`/profile/${id}`);
    };

    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="flex-start gap-3 justify-start w-full max-w-5xl">
                    <img
                        src="/assets/icons/edit.svg"
                        width={36}
                        height={36}
                        alt="edit"
                        className="invert-white"
                    />
                    <h2 className="h3-bold md:h2-bold text-left w-full">编辑个人信息</h2>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleUpdate)}
                        className="flex flex-col gap-7 w-full mt-4 max-w-5xl">
                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => (
                                <FormItem className="flex">
                                    <FormControl>
                                        <ProfileUploader
                                            fieldChange={field.onChange}
                                            mediaUrl={currentUser.imageUrl}
                                        />
                                    </FormControl>
                                    <FormMessage className="shad-form_message" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">姓名</FormLabel>
                                    <FormControl>
                                        <Input type="text" className="shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">名称</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="shad-input"
                                            {...field}
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">邮件账户</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="shad-input"
                                            {...field}
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">简介</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="shad-textarea custom-scrollbar"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="shad-form_message" />
                                </FormItem>
                            )}
                        />

                        <div className="flex gap-4 items-center justify-end">
                            <Button
                                type="button"
                                className="shad-button_dark_4"
                                onClick={() => navigate(-1)}>
                                返回
                            </Button>
                            <Button
                                type="submit"
                                className="shad-button_primary whitespace-nowrap"
                                disabled={isLoadingUpdate}>
                                {isLoadingUpdate && <Loader />}
                                更新 个人信息
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default UpdateProfile;
```
# 显示全部的用户

```tsx
import Loader from "@/components/shared/Loader";


// 引入获取用户数据的hook
import { useGetUsers } from "@/lib/react-query/queries";
import {useToast} from "@/hooks/use-toast.ts";
import UserCard from "@/components/shared/Card/UserCard.tsx";

const AllUsers = () => {
    // 使用toast组件
    const { toast } = useToast();

    // 使用获取用户数据的hook
    const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

    // 如果获取用户数据出错，则显示错误信息
    if (isErrorCreators) {
        toast({ title: "Something went wrong." });

        return;
    }

    return (
        <div className="common-container">
            <div className="user-container">
                <h2 className="h3-bold md:h2-bold text-left w-full">所有的用户</h2>
                {isLoading && !creators ? (
                    // 如果正在加载用户数据，则显示加载组件
                    <Loader />
                ) : (
                    // 否则，显示用户列表
                    <ul className="user-grid">
                        {creators?.documents.map((creator) => (
                            <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                                <UserCard user={creator} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AllUsers;

```
# 已收藏的帖子/话题
```tsx
import { Models } from "appwrite";
import { useGetCurrentUser } from "@/lib/react-query/queries";
import Loader from "@/components/shared/Loader";
import GridPostList from "@/components/shared/Card/GridPostList.tsx";


// 定义Saved组件
const Saved = () => {
    // 使用useGetCurrentUser钩子获取当前用户数据
    const { data: currentUser } = useGetCurrentUser();

    // 将当前用户的保存的帖子数据转换为GridPostList组件需要的格式
    const savePosts = currentUser?.save
        .map((savePost: Models.Document) => ({
            ...savePost.post,
            creator: {
                imageUrl: currentUser.imageUrl,
            },
        }))
        .reverse();

    // 返回Saved组件的JSX
    return (
        <div className="saved-container">
            <div className="flex gap-2 w-full max-w-5xl">
                <img
                    src="/assets/icons/save.svg"
                    width={36}
                    height={36}
                    alt="edit"
                    className="invert-white"
                />
                <h2 className="h3-bold md:h2-bold text-left w-full">收藏</h2>
            </div>

            {!currentUser ? (
                // 如果当前用户数据不存在，则显示加载器
                <Loader />
            ) : (
                // 如果当前用户数据存在，则显示GridPostList组件
                <ul className="w-full flex justify-center max-w-5xl gap-9">
                    {savePosts.length === 0 ? (
                        // 如果保存的帖子数据为空，则显示提示信息
                        <p className="text-light-4">没有收藏的帖子</p>
                    ) : (
                        // 否则，显示GridPostList组件
                        <GridPostList posts={savePosts} showStats={false} />
                    )}
                </ul>
            )}
        </div>
    );
};

// 导出Saved组件
export default Saved;
```

# 组件上传

```tsx
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";

type ProfileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
};

// 定义ProfileUploader组件，用于上传用户头像
const ProfileUploader = ({ fieldChange, mediaUrl }: ProfileUploaderProps) => {
    // 定义file状态，用于存储上传的文件
    const [file, setFile] = useState<File[]>([]);
    // 定义fileUrl状态，用于存储上传文件的URL
    const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

    // 定义onDrop函数，用于处理文件上传
    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            // 设置file状态为上传的文件
            setFile(acceptedFiles);
            // 调用fieldChange函数，将上传的文件传递给父组件
            fieldChange(acceptedFiles);
            // 设置fileUrl状态为上传文件的URL
            setFileUrl(convertFileToUrl(acceptedFiles[0]));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [file]
    );

    // 使用useDropzone钩子，获取getRootProps和getInputProps函数
    const { getRootProps, getInputProps } = useDropzone({
        // 调用onDrop函数，处理文件上传
        onDrop,
        // 设置可接受的文件类型
        accept: {
            "image/*": [".png", ".jpeg", ".jpg"],
        },
    });

    return (
        // 返回一个div，包含getRootProps和getInputProps函数
        <div {...getRootProps()}>
            <input {...getInputProps()} className="cursor-pointer" />

            <div className="cursor-pointer flex-center gap-4">
                {/* 显示上传的文件，如果没有上传文件，则显示默认的占位图 */}
                <img
                    src={fileUrl || "/assets/icons/profile-placeholder.svg"}
                    alt="image"
                    className="h-24 w-24 rounded-full object-cover object-top"
                />
                {/* 显示“Change profile photo”文字 */}
                <p className="text-primary-500 small-regular md:bbase-semibold">
                    上传新的图像
                </p>
            </div>
        </div>
    );
};

export default ProfileUploader;
```

### 项目完成

# 功能总览

# api

```ts
import {account, appwriteConfig, avatars, databases, storage} from "@/lib/appwrite/config.ts";
import {INewPost, INewUser, IUpdatePost, IUpdateUser} from "@/types";
import {ID, Query} from "appwrite";

/*用户登录*/
export async function signInAccount(user: { email: string; password: string }) {
    try {
        /*获取账户密码*/
        return await account.createEmailSession(user.email, user.password);
    } catch (error) {
        console.log(error);
    }
}

/*用户注册*/
export async function createUserAccount(user:INewUser) {
    try {
        /*创建新的账户*/
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        if(!newAccount) throw new Error("创建账户错误")

        /*获取用户头像Url*/
        const avatarUrl = avatars.getInitials(user.name)

        /*保存信息到数据库*/
        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        });

        return newUser

    }catch (error){
        console.error(error)
    }
}

/*保存用户信息到后端数据库*/
export async function saveUserToDB(user:{
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}){
    try {
        /*创建新的用户信息*/
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );

        return newUser
    }catch (error){
        console.error(error)
    }
}

/*查询用户信息*/
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();

        if (!currentAccount) throw Error;

       /*根据ID查找用户信息*/
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

/*获取当前账户信息*/
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;

    } catch (error) {
        console.log(error);
    }
}

/*用户登出*/
export async function signOutAccount() {
    try {
        /*删除当前登录信息*/
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        console.log(error);
    }
}

/*上传文件*/
export async function uploadFile(file: File) {
    try {
        /*创建新文件*/
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        );

        return uploadedFile;
    } catch (error) {
        console.log(error);
    }
}

/*获取文件预览*/
export function getFilePreview(fileId: string) {
    try {
        /*获取文件预览URL*/
        const fileUrl = storage.getFilePreview(
            appwriteConfig.storageId,
            fileId,
            2000,
            2000,
            "top",
            100
        );

        if (!fileUrl) throw Error;

        return fileUrl;
    } catch (error) {
        console.log(error);
    }
}

/*删除文件*/
export async function deleteFile(fileId: string) {
    try {
        /*删除*/
        await storage.deleteFile(appwriteConfig.storageId, fileId);

        return { status: "ok" };
    } catch (error) {
        console.log(error);
    }
}

/*创建帖子*/
export async function createPost(post: INewPost) {
    try {
       /* 上传文件到Appwrite存储*/
        const uploadedFile = await uploadFile(post.file[0]);

        if (!uploadedFile) throw Error;

        /*获取文件预览URL*/
        const fileUrl = getFilePreview(uploadedFile.$id);
        if (!fileUrl) {
            await deleteFile(uploadedFile.$id);
            throw Error;
        }

        /*将标签转换为数组*/
        const tags = post.tags?.replace(/ /g, "").split(",") || [];

        /*创建帖子*/
        const newPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            ID.unique(),
            {
                creator: post.userId,
                caption: post.caption,
                imageUrl: fileUrl,
                imageId: uploadedFile.$id,
                location: post.location,
                tags: tags,
            }
        );

        if (!newPost) {
            await deleteFile(uploadedFile.$id);
            throw Error;
        }

        return newPost;
    } catch (error) {
        console.log(error);
    }
}

/*更新帖子*/
export async function updatePost(post: IUpdatePost) {
    const hasFileToUpdate = post.file.length > 0;

    try {
        let image = {
            imageUrl: post.imageUrl,
            imageId: post.imageId,
        };

        if (hasFileToUpdate) {
            // 上传新文件到Appwrite存储
            const uploadedFile = await uploadFile(post.file[0]);
            if (!uploadedFile) throw Error;

            // 获取新文件预览URL
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
                await deleteFile(uploadedFile.$id);
                throw Error;
            }

            image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
        }

        // 将标签转换为数组
        const tags = post.tags?.replace(/ /g, "").split(",") || [];

        // 更新帖子
        const updatedPost = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            post.postId,
            {
                caption: post.caption,
                imageUrl: image.imageUrl,
                imageId: image.imageId,
                location: post.location,
                tags: tags,
            }
        );

        // 更新失败
        if (!updatedPost) {
            // 删除新上传的文件
            if (hasFileToUpdate) {
                await deleteFile(image.imageId);
            }

            // 如果没有新文件上传，抛出错误
            throw Error;
        }

        // 更新成功后，安全删除旧文件
        if (hasFileToUpdate) {
            await deleteFile(post.imageId);
        }

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*获取最新的帖子*/
export async function getRecentPosts() {
    try {
        // 查询最近帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(20)]
        );

        if (!posts) throw Error;

        return posts;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户*/
export async function getUsers(limit?: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queries: any[] = [Query.orderDesc("$createdAt")];

    if (limit) {
        queries.push(Query.limit(limit));
    }

    try {
        const users = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            queries
        );

        if (!users) throw Error;

        return users;
    } catch (error) {
        console.log(error);
    }
}

/*点赞帖子*/
export async function likePost(postId: string, likesArray: string[]) {
    try {
        /*更新帖子点赞信息*/
        const updatedPost = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId,
            {
                likes: likesArray,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*保存帖子*/
export async function savePost(userId: string, postId: string) {
    try {
        // 创建新文档保存帖子
        const updatedPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.savesCollectionId,
            ID.unique(),
            {
                user: userId,
                post: postId,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

/*删除保存的贴子*/
export async function deleteSavedPost(savedRecordId: string) {
    try {
        // 删除保存的帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.savesCollectionId,
            savedRecordId
        );

        if (!statusCode) throw Error;

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}

/*根据id获取帖子详细信息*/
export async function getPostById(postId?: string) {
    if (!postId) throw Error;

    try {
        /*根据帖子ID查询帖子信息*/
        const post = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*获取用户的帖子*/
export async function getUserPosts(userId?: string) {
    if (!userId) return;

    try {
        // 根据用户ID查询用户帖子
        const post = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

/*删除帖子*/
export async function deletePost(postId?: string, imageId?: string) {
    if (!postId || !imageId) return;

    try {
        // 删除帖子
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            postId
        );

        if (!statusCode) throw Error;

        // 删除帖子对应的文件
        await deleteFile(imageId);

        return { status: "Ok" };
    } catch (error) {
        console.log(error);
    }
}

/*获取帖子数据*/
export async function getInfinitePosts({ pageParam }: { pageParam: number }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queries: any[] = [Query.orderDesc("$updatedAt"), Query.limit(9)];

    if (pageParam) {
        queries.push(Query.cursorAfter(pageParam.toString()));
    }

    try {
        // 查询无限帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            queries
        );

        if (!posts) throw Error;

        return posts;
    } catch (error) {
        console.log(error);
    }
}

/*搜索帖子*/
export async function searchPosts(searchTerm: string) {
    try {
        // 根据搜索词查询帖子
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            [Query.search("caption", searchTerm)]
        );

        if (!posts || !posts.documents || posts.documents.length === 0) {
            return { documents: [] }; // 返回空数组
        }

        return posts;

    } catch (error) {
        console.error('Error searching posts:', error);
        return { documents: [] }; // 返回空数组
    }
}

/*用于根据用户ID获取用户信息*/
export async function getUserById(userId: string) {
    try {
        // 从数据库中获取指定用户ID的用户信息
        const user = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            userId
        );

        // 如果没有获取到用户信息，则抛出错误
        if (!user) throw Error;

        // 返回用户信息
        return user;
    } catch (error) {
        // 打印错误信息
        console.log(error);
    }
}

/*更新用户个人信息*/
export async function updateUser(user: IUpdateUser) {
    const hasFileToUpdate = user.file.length > 0;
    try {
        let image = {
            imageUrl: user.imageUrl,
            imageId: user.imageId,
        };

        if (hasFileToUpdate) {
            // Upload new file to appwrite storage
            const uploadedFile = await uploadFile(user.file[0]);
            if (!uploadedFile) throw Error;

            // Get new file url
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
                await deleteFile(uploadedFile.$id);
                throw Error;
            }

            image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
        }

        //  Update user
        const updatedUser = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            user.userId,
            {
                name: user.name,
                bio: user.bio,
                imageUrl: image.imageUrl,
                imageId: image.imageId,
            }
        );

        // Failed to update
        if (!updatedUser) {
            // Delete new file that has been recently uploaded
            if (hasFileToUpdate) {
                await deleteFile(image.imageId);
            }
            // If no new file uploaded, just throw error
            throw Error;
        }

        // Safely delete old file after successful update
        if (user.imageId && hasFileToUpdate) {
            await deleteFile(user.imageId);
        }

        return updatedUser;
    } catch (error) {
        console.log(error);
    }
}
```
# queries
```ts
import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    createPost,
    createUserAccount,
    deletePost,
    deleteSavedPost,
    getCurrentUser,
    getInfinitePosts,
    getPostById,
    getRecentPosts, getUserById,
    getUserPosts,
    getUsers,
    likePost,
    savePost,
    searchPosts,
    signInAccount,
    signOutAccount,
    updatePost, updateUser
} from "@/lib/appwrite/api.ts";
import {INewPost, INewUser, IUpdatePost, IUpdateUser} from "@/types";
import {QUERY_KEYS} from "@/lib/react-query/queryKeys.ts";

/*用户登录*/
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) =>
            signInAccount(user),
    });
}

/*用户注册*/
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

/*用户登出*/
export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};

/*创建帖子*/
export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: INewPost) => createPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

/*更新帖子*/
export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: IUpdatePost) => updatePost(post),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
            });
        },
    });
};

/*获最新的帖子*/
export const useGetRecentPosts = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        queryFn: getRecentPosts,
    });
};

/*获取用户*/
export const useGetUsers = (limit?: number) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USERS],
        queryFn: () => getUsers(limit),
    });
};

/*点赞帖子*/
export const useLikePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
                         postId,
                         likesArray,
                     }: {
            postId: string;
            likesArray: string[];
        }) => likePost(postId, likesArray),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*收藏帖子*/
export const useSavePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
            savePost(userId, postId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*删除已收藏的帖子*/
export const useDeleteSavedPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (savedRecordId: string) => deleteSavedPost(savedRecordId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_POSTS],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
        },
    });
};

/*获取当前用户*/
export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        queryFn: getCurrentUser,
    });
};

/*根据id获取帖子*/
export const useGetPostById = (postId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POST_BY_ID, postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    });
};

/*获取用户帖子*/
export const useGetUserPosts = (userId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USER_POSTS, userId],
        queryFn: () => getUserPosts(userId),
        enabled: !!userId,
    });
};

/*删除帖子*/
export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ postId, imageId }: { postId?: string; imageId: string }) =>
            deletePost(postId, imageId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

/*获取帖子数据*/
export const useGetPosts = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.GET_INFINITE_POSTS],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryFn: getInfinitePosts as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getNextPageParam: (lastPage: any) => {
            // 如果没有数据，就没有更多页面。
            if (lastPage && lastPage.documents.length === 0) {
                return null;
            }

            // 使用最后一个文档的$id作为游标。
            return lastPage.documents[lastPage.documents.length - 1].$id;
        },
    });
};

/*搜索帖子*/
export const useSearchPosts = (searchTerm: string) => {
    return useQuery(
        [QUERY_KEYS.SEARCH_POSTS, searchTerm], // queryKey 应该是一个数组
        () => searchPosts(searchTerm), // queryFn
        {
            enabled: !!searchTerm,
            retry: false, // 不重试
            refetchOnWindowFocus: false, // 不在窗口焦点变化时重新获取数据
            initialData: { documents: [], total: 0 }, // 初始数据符合 DocumentList 类型
            onError: (error) => {
                console.error('没有这个帖子:', error);
            },
            onSuccess: (data) => {
                console.log('Search posts success:', data);
            }
        }
    );
};

/*用于根据用户ID获取用户信息*/
export const useGetUserById = (userId: string) => {
    // 使用useQuery函数，传入查询键、查询函数和是否启用查询
    return useQuery({
        // 查询键为QUERY_KEYS.GET_USER_BY_ID和用户ID
        queryKey: [QUERY_KEYS.GET_USER_BY_ID, userId],
        // 查询函数为getUserById，传入用户ID
        queryFn: () => getUserById(userId),
        // 如果用户ID存在，则启用查询
        enabled: !!userId,
    });
};

/*更新用户个人信息*/
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (user: IUpdateUser) => updateUser(user),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_USER_BY_ID, data?.$id],
            });
        },
    });
};


```

http://localhost:5173/sign-in