import { User, testUser } from "@/app/models/User";
import { postTweet } from "@/app/services/TweetService";
import { useState } from "react";

interface TweetFormProps {
    onPostTweet: (message: string) => void;
}


const TweetForm = ({onPostTweet}: TweetFormProps) => {
    const [message, setMessage] = useState<string>("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const enableButtonClassName = `w-full bg-blue-500 hover:bg-blue-700
                                   text-white font-bold 
                                   py-3 px-4 mb-2
                                   rounded`;
    const disableButtonClassName = `w-full bg-blue-200
                                   text-white font-bold 
                                   py-3 px-4 mb-2
                                   rounded`;

    const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(event.target.value)
        setIsButtonDisabled(event.target.value.length == 0);
    }

    function onPost(): void {
        onPostTweet(message)
        setMessage("");
        setIsButtonDisabled(true);
    }

    return (
        <div>
            <textarea
                value={message}
                onChange={messageHandler}
                className="resize-none 
                    w-full h-24 border rounded-md p-2"
                placeholder="今なにしてる？"></textarea>
            <div className="p-3">{message.length} characters.</div>
            <button
                onClick={onPost}
                className={isButtonDisabled ? disableButtonClassName : enableButtonClassName}
                disabled={isButtonDisabled}>
                Send</button>
        </div>
    );
}

export default TweetForm;