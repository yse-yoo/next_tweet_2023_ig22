"use client"

import { useEffect, useState } from "react"
import { getTweets } from "./services/TweetService"
import { User, testUser } from "./models/User"
import { Tweet } from "./models/Tweet"
import TweetList from "./components/tweet/TweetList"
import TweetForm from "./components/tweet/TweetForm"

export default function Home() {
  const [user, setUser] = useState<User>(testUser)
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    (async () => {
      //APIからTweetデータ取得
      if (user?.accessToken) {
        const tweets = await getTweets(user.accessToken);
        console.log("Home:", tweets);
        //データ設定
        setTweets(tweets);
      }
    })();
  }, [user])


  return (
    <div>
      <TweetForm />

      <TweetList initialTweets={tweets} />
    </div>
  )
}
