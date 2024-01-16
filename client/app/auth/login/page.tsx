"use client"

import Link from "next/link";
import Input from "@/app/components/Input";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
    return (
        <div className="mx-auto w-1/3">
            <h1 className="my-2 p-1 flex justify-center text-2xl font-bold">
                <RiLockPasswordFill className="mt-2 me-2"/>
                Sign in
            </h1>

            <div>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="******" />
            </div>

            <div>
                <button className="
                            w-full
                          bg-blue-500 hover:bg-blue-700
                          text-white font-bold 
                          py-3 px-4 mb-2
                          rounded
                         ">
                    Sign in
                </button>
                <Link
                    href="/auth/regist"
                    className="
                            flex justify-center
                          bg-gray-200 hover:bg-gray-300
                          text-gray-500 font-bold 
                          py-3 px-4 
                          rounded
                         ">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;