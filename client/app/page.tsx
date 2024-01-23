"use client"

import { useEffect, useState } from "react"
import { getTweets, postTweet } from "./services/TweetService"
import { User, testUser } from "./models/User"
import { Tweet, initialTweet } from "./models/Tweet"
import TweetList from "./components/tweet/TweetList"
import TweetForm from "./components/tweet/TweetForm"

export default function Home() {
  const [user, setUser] = useState<User>(testUser)
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [newTweet, setNewTweet] = useState<Tweet>(initialTweet);

  useEffect(() => {
    (async () => {
      if (user?.accessToken) {
        //APIからTweetデータ取得
        const data = await getTweets(user.accessToken);
        console.log("Home:", tweets);
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
