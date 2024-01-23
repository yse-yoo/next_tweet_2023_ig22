"use client"

import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Input from "@/app/components/Input";
import { registUser } from "@/app/services/UserService";
import { useRouter } from "next/navigation";
import FormError from "@/app/components/FormError";

interface registError {
    name: string;
    email: string;
    password: string;
}

const RegistPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<registError>({ name: "", email: "", password: "" })

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const enableButtonClassName = `w-full bg-blue-500 hover:bg-blue-700
                                   text-white font-bold 
                                   py-3 px-4 mb-2
                                   rounded`;
    const disableButtonClassName = `w-full bg-blue-200
                                   text-white font-bold 
                                   py-3 px-4 mb-2
                                   rounded`;

    //ルーター作成
    const router = useRouter();

    const regist = async () => {
        console.log(name, email, password)
        // APIにデータ送信（ユーザ登録）
        const result = await registUser({ name, email, password });
        if (result.error) {
            console.log(result.error)
            setError(result.error)
            // エラー表示
        } else {
            // リダイレクト
            router.replace('/');
        }
    }

    useEffect(() => {
        // console.log(name, email, password)
        setIsButtonDisabled(!(name && email && password))
    }, [name, email, password])


    return (
        <div className="mx-auto w-1/3">
            <h1 className="my-2 p-1 flex justify-center text-2xl font-bold">
                <FaUser className="mt-2 me-2" />
                Register
            </h1>

            <div>
                <Input
                    type="text"
                    onChange={setName}
                    placeholder="Your Name"
                />
                <FormError message={error.name} />
                <Input
                    type="text"
                    onChange={setEmail}
                    placeholder="Email"
                />
                <FormError message={error.email} />
                <Input
                    type="password"
                    onChange={setPassword}
                    placeholder="******"
                />
                <FormError message={error.password} />
            </div>

            <div>
                <button
                    onClick={regist}
                    className={isButtonDisabled ? disableButtonClassName : enableButtonClassName}
                    disabled={isButtonDisabled}>
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