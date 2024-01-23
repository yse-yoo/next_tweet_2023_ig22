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
