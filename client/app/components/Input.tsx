
interface InputProps {
    type: string;
    value?: string;
    placeholder?: string;
}

const Input = ({type, value, placeholder} : InputProps) => {
    return (
        <input type={type}
            value={value}
            placeholder={placeholder}
            className="my-2 border-2 
                border-gray-200
                rounded
                w-full
                p-3
                focus:outline-none
                focus:bg-white
                focus:border-blue-500"
        />
    );
}

export default Input;