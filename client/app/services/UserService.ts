import { PostUser, User } from "@/app/models/User";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

export const registUser = async (postUser: PostUser) => {
    const url = LARAVEL_API_URL + "regist/store";
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
