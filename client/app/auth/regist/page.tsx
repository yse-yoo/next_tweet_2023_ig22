"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";

const RegistPage = () => {
    return (
        <div>
            <h1 className="p-3 flex justify-center text-3xl font-bold">
                <FaUser className="mt-1 me-3" />
                Sign up
            </h1>

            <div>
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    );
}

export default RegistPage;