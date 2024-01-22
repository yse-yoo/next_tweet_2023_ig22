"use client"

import { useEffect, useState, useContext, } from 'react';
import TweetDetail from '@/app/components/tweet/TweetDetail';
import { Tweet } from '@/app/models/Tweet';

interface TweetListProps {
    initialTweets: Tweet[];
}

const TweetList = ({ initialTweets, }: TweetListProps) => {
    const [tweets, setTweets] = useState<Tweet[]>(initialTweets);

    useEffect(() => {
        setTweets(initialTweets);
    }, [initialTweets]);

    return (
        <div>
            {
                tweets?.map((tweet) => (
                    <TweetDetail />
                ))
            }
        </div>
    );
}

export default TweetList;