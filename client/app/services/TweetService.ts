import { User } from "@/app/models/User";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

// Tweet取得
export const getTweets = async (accessToken: string) => {
    const url = LARAVEL_API_URL + "tweet/get"
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        return await response.json();
    }
}

// Tweet投稿
export const postTweet = async (user: User, message: string) => {
    const url = LARAVEL_API_URL + "tweet/add";
    const user_id = user.id;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${user.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, user_id }),
    })
    if (response.ok) {
        return await response.json();
    }
}