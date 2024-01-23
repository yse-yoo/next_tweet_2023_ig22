import { PostUser, User } from "@/app/models/User";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

export const registUser = async (postUser: PostUser) => {
    // Development URL: http://localhost:8000/api/regist/store
    const url = LARAVEL_API_URL + "regist/store";
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
