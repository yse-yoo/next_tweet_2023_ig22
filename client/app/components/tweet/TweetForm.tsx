import { useState } from "react";

const TweetForm = () => {
    const [message, setMessage] = useState<string>("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const enableButtonClassName = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg";
    const disableButtonClassName = "bg-blue-200 text-white font-bold py-2 px-4 rounded-lg";

    const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(event.target.value)
        setIsButtonDisabled(event.target.value.length == 0);
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
                className={isButtonDisabled ? disableButtonClassName : enableButtonClassName}
                disabled={isButtonDisabled}>
                Send</button>
        </div>
    );
}

export default TweetForm;