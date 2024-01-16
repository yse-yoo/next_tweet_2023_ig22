"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";

const RegistPage = () => {
    return (
        <div className="mx-auto w-1/3">
            <h1 className="mt-2 p-1 flex justify-center text-2xl font-bold">
                <FaUser className="mt-2 me-2" />
                Sign up
            </h1>

            <div>
                <Input type="text" placeholder="Your Name" />
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="******" />
            </div>
        </div>
    );
}

export default RegistPage;