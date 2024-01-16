"use client"

import { FaUser } from "react-icons/fa";

const RegistPage = () => {
    return (
        <div>
            <h1 className="p-3 flex justify-center text-3xl font-bold">
                <FaUser className="mt-1 me-3" />
                Sign up
            </h1>

            <div>
                <input type="text" 
                className="
                    my-2 border-2 
                    border-gray-200
                    rounded
                    w-full
                    p-3
                    focus:outline-none
                    focus:bg-white
                    focus:border-blue-500
                "/>
            </div>
        </div>
    );
}

export default RegistPage;