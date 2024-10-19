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