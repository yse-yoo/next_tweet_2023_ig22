import { PostUser, User } from "@/app/models/User";
import Cookies from "js-cookie";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

// Cookieからアクセストークン取得
export const getAccessToken = () => {
    return Cookies.get('access_token') || "";
}

// Cookieにアクセストークンを更新
export const updateAccessToken = async (token: string) => {
    if (!token) return;
    await Cookies.set("access_token", token, { expires: 30 });
}

// Cookieからアクセストークンを削除
export const removeAccessToken = async () => {
    await Cookies.remove("access_token");
}


export const registUser = async (postUser: PostUser) => {
    // Development URL: http://localhost:8000/api/regist/store
    const url = LARAVEL_API_URL + "regist/store";
    console.log(url)
    // APIにアクセス（ユーザ登録）
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postUser),
    })
    if (response.ok) {
        return await response.json();
    }
}

interface Credentials {
    email: string;
    password: string;
}

export const signIn = async (credentials: Credentials) => {
    // Development URL: http://localhost:8000/api/auth
    const url = LARAVEL_API_URL + "auth";
    // APIにアクセス（ユーザ認証）
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
    if (response.ok) {
        return await response.json();
    }
}

// Tweet取得
export const getUser = async (accessToken: string | null) => {
    if (!accessToken) return;
    // Development URL: http://localhost:8000/api/tweet/get
    const url = LARAVEL_API_URL + "user"
    // APIサーバにアクセス
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data) data.accessToken = accessToken;
        return data;
    }
}