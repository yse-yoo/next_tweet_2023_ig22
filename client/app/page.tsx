"use client"

import { useContext, useEffect, useState } from "react"
import { getTweets, postTweet } from "./services/TweetService"
import { Tweet, initialTweet } from "./models/Tweet"
import TweetList from "./components/tweet/TweetList"
import TweetForm from "./components/tweet/TweetForm"
import UserContext from "./context/UserContext"
import Loading from "./components/Loading"

export default function Home() {
  const { user } = useContext(UserContext);

  const [tweets, setTweets] = useState<Tweet[]>([])
  const [newTweet, setNewTweet] = useState<Tweet>(initialTweet);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      console.log("Home:", user)
      if (!user?.accessToken) return;
      //APIからTweetデータ取得
      const data = await getTweets(user.accessToken);
      //データ設定
      setTweets(data);
      setIsLoading(false);
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

      {
        isLoading ?  
        <Loading />
        :
        <TweetList initialTweets={tweets} newTweet={newTweet} />
      }
    </div>
  )
}
