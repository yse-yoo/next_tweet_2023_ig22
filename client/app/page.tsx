"use client"

import { useContext, useEffect, useState } from "react"
import { getTweets, postTweet } from "./services/TweetService"
import { User, initialUser, testUser } from "./models/User"
import { Tweet, initialTweet } from "./models/Tweet"
import TweetList from "./components/tweet/TweetList"
import TweetForm from "./components/tweet/TweetForm"
import { useRouter } from "next/navigation"
import { getAccessToken, getUser } from "@/app/services/UserService"
import UserContext from "./context/UserContext"

export default function Home() {
  const { user } = useContext(UserContext);

  const [tweets, setTweets] = useState<Tweet[]>([])
  const [newTweet, setNewTweet] = useState<Tweet>(initialTweet);

  useEffect(() => {
    (async () => {
      console.log("Home:", user)
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
