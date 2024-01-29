"use client"

import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Input from "@/app/components/Input";
import { registUser } from "@/app/services/UserService";
import { useRouter } from "next/navigation";
import FormError from "@/app/components/FormError";
import Loading from "@/app/components/Loading";
import ClickButton from "@/app/components/ClickButton";
import LinkButton from "@/app/components/LinkButton";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //ルーター作成
    const router = useRouter();

    const regist = async () => {
        setIsLoading(true);

        console.log(name, email, password)
        // APIにデータ送信（ユーザ登録）
        const result = await registUser({ name, email, password });
        if (result.error) {
            console.log(result.error)
            setError(result.error)
            // エラー表示
        } else {
            // リダイレクト
            router.push('/auth/login');
        }
        setIsLoading(false);
    }

    const disabled = () => !(name && email && password)

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

            {
                isLoading ?
                    <Loading />
                    :
                    <div>
                         <ClickButton
                            label="Sign up"
                            onClick={regist}
                            disabled={disabled()}
                        />

                        <LinkButton
                            href="/auth/login"
                            label="Sign in"
                        />
                    </div>
            }
        </div>
    );
}

export default RegistPage;