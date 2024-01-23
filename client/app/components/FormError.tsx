
interface FormErorProps {
    message?: string;
}

const FormError = ({ message }: FormErorProps) => {
    if (!message) return;
    return (
        <div className="p-2 flex text-red-700 bg-red-100 rounded-lg">
            {message}
        </div>
    );
}

export default FormError;