
const Input = ({type, placeholder}) => {
    return (
        <input type={type}
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