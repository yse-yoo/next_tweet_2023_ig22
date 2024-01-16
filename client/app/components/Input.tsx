
interface InputProps {
    type: string;
    value?: string;
    placeholder?: string;
    onChange?: (value:any) => void;
}

const Input = ({type, value, onChange, placeholder} : InputProps) => {
    return (
        <input type={type}
            value={value}
            onChange={(e) => { onChange && onChange(e.target.value)}}
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