import { useState } from "react";
import ClickButton from "../ClickButton";

interface TweetFormProps {
    onPostTweet: (message: string) => void;
}

const TweetForm = ({onPostTweet}: TweetFormProps) => {
    const [message, setMessage] = useState<string>("")

    const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(event.target.value)
    }

    function onPost(): void {
        onPostTweet(message)
        setMessage("");
    }

    const disabled = () => (message.length == 0)

    return (
        <div>
            <textarea
                value={message}
                onChange={messageHandler}
                className="resize-none 
                    w-full h-24 border rounded-md p-2"
                placeholder="今なにしてる？"></textarea>

            <div className="p-3">{message.length} characters.</div>

            <ClickButton
                onClick={onPost}
                label="Post"
                disabled={disabled()}
                />
        </div>
    );
}

export default TweetForm;