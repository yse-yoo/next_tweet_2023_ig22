"use client"

import { useEffect, useState, } from 'react';
import TweetDetail from '@/app/components/tweet/TweetDetail';
import { Tweet } from '@/app/models/Tweet';

interface TweetListProps {
    initialTweets: Tweet[];
    newTweet: Tweet;
}

const TweetList = ({ initialTweets, newTweet }: TweetListProps) => {
    const [tweets, setTweets] = useState<Tweet[]>(initialTweets);

    useEffect(() => {
        setTweets(initialTweets);
    }, [initialTweets]);

    useEffect(() => {
        //新しい投稿があれば、投稿データ（Tweetの配列）の最初に追加
        (newTweet?.id) && setTweets(currentTweets => [newTweet, ...currentTweets]);
    }, [newTweet]);

    return (
        <div>
            {
                tweets?.map((tweet) => (
                    <TweetDetail key={tweet.id} tweet={tweet} />
                ))
            }
        </div>
    );
}

export default TweetList;