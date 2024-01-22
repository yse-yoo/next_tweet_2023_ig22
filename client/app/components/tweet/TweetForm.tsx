import { useState } from "react";

const TweetForm = () => {
    const [message, setMessage] = useState<string>("")

    const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        console.log(event.target.value)
    }

    return (
        <div>
            <textarea 
                onChange={messageHandler}
                className="resize-none 
                    w-full h-24 border rounded-md p-2"
                placeholder="今なにしてる？"></textarea>

            <button 
                className="bg-blue-500 hover:bg-blue-700 
                    text-white font-bold 
                    py-2 px-4 
                    rounded-lg">
                Send
            </button>
        </div>
    );
}

export default TweetForm;