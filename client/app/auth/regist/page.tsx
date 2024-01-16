"use client"

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Input from "@/app/components/Input";

const RegistPage = () => {
    const [name, setName] = useState("");

    return (
        <div className="mx-auto w-1/3">
            <h1 className="my-2 p-1 flex justify-center text-2xl font-bold">
                <FaUser className="mt-2 me-2" />
                Sign up
            </h1>

            <div>
                <Input type="text" placeholder="Your Name" onChange={setName} />
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="******" />
            </div>

            <div>
                <button
                    onClick={() => { alert('Sign up') }}
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