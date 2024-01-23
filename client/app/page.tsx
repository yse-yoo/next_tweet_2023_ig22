"use client"

import { useEffect, useState } from "react"
import { getTweets, postTweet } from "./services/TweetService"
import { User, initialUser, testUser } from "./models/User"
import { Tweet, initialTweet } from "./models/Tweet"
import TweetList from "./components/tweet/TweetList"
import TweetForm from "./components/tweet/TweetForm"
import { getUser } from "./services/UserService"
import { getCookie } from "./services/CookieService"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  // const [user, setUser] = useState<User>(testUser)
  const [user, setUser] = useState<User>()
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [newTweet, setNewTweet] = useState<Tweet>(initialTweet);

  useEffect(() => {
    (async () => {
      const data = await getUser(getCookie('access_token'));
      if (data?.accessToken) {
        setUser(data);
      } else {
        router.replace('/auth/login')
      }
    })();
  }, [])

  useEffect(() => {
    (async () => {
      if (user?.accessToken) {
        //APIからTweetデータ取得
        const data = await getTweets(user.accessToken);
        //データ設定
        setTweets(data);
      }
    })();
  }, [user])

  const onPostTweet = async (message: string) => {
    if (user?.accessToken) {
      // APIにデータ投稿
      const data = await postTweet(user, message)
      data.user = user;
      setNewTweet(data);
    }
  }

  return (
    <div>
      <TweetForm onPostTweet={onPostTweet} />

      <TweetList initialTweets={tweets} newTweet={newTweet} />
    </div>
  )
}
