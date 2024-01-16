"use client"

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Input from "@/app/components/Input";

const RegistPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const regist = async () => {
        console.log(name, email, password)
    }

    return (
        <div className="mx-auto w-1/3">
            <h1 className="my-2 p-1 flex justify-center text-2xl font-bold">
                <FaUser className="mt-2 me-2" />
                Sign up
            </h1>

            <div>
                <Input
                    type="text"
                    onChange={setName}
                    placeholder="Your Name"
                />
                <Input
                    type="text"
                    onChange={setEmail}
                    placeholder="Email"
                />
                <Input
                    type="password"
                    onChange={setPassword}
                    placeholder="******"
                />
            </div>

            <div>
                <button
                    onClick={regist}
                    className="
                            w-full
                          bg-blue-500 hover:bg-blue-700
                          text-white font-bold 
                          py-3 px-4 mb-2
                          rounded
                         ">
                    Sign up
                </button>
                <Link
                    href="/auth/login"
                    className="
                            flex justify-center
                          bg-gray-200 hover:bg-gray-300
                          text-gray-500 font-bold 
                          py-3 px-4 
                          rounded
                         ">
                    Sing in
                </Link>
            </div>
        </div>
    );
}

export default RegistPage;