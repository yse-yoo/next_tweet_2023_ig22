"use client"

import { useEffect, useState } from "react"
import { getTweets } from "./services/TweetService"
import { User, testUser } from "./models/User"
import { Tweet } from "./models/Tweet"

export default function Home() {

  const [user, setUser] = useState<User>(testUser)
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    (async() => {
        const tweets = await getTweets(user.accessToken);
        console.log(tweets);
        setTweets(tweets);
    })();
  }, [user])
  

  return (
    <div>
      <textarea className="resize-none w-full h-24 border rounded-md p-2" placeholder="今なにしてる？"></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
    </div>
  )
}
