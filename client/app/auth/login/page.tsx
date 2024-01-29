"use client"

import Link from "next/link";
import Input from "@/app/components/Input";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { getUser, signIn, updateAccessToken } from "@/app/services/UserService";
import { useRouter } from "next/navigation";
import FormError from "@/app/components/FormError";
import UserContext from "@/app/context/UserContext";
import Loading from "@/app/components/Loading";

const LoginPage = () => {
    const { setUser } = useContext(UserContext);
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState({ auth: "" })
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const enableButtonClassName = `w-full bg-blue-500 hover:bg-blue-700
                                   text-white font-bold 
                                   py-3 px-4 mb-2
                                   rounded`;
    const disableButtonClassName = `w-full bg-blue-200
                                   text-white font-bold 
                                   py-3 px-4 mb-2
                                   rounded`;

    const auth = async () => {
        setIsLoading(true);

        console.log(email, password)
        // APIにデータ送信
        const result = await signIn({ email, password })
        // エラー設定
        if (!result || result.error) {
            setError(result?.error || { auth: "Internal Error!" })
            console.log(result?.error)
        } else {
            const token = result?.access_token;
            if (!token) return;

            //Cookie にアクセストークンを保存
            await updateAccessToken(token);

            //ユーザ設定
            const user = await getUser(token);
            await setUser(user)

            //トップページにリダイレクト
            router.replace('/');
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setIsButtonDisabled(!(email && password))
    }, [email, password])

    return (
        <div className="mx-auto w-1/3">
            <h1 className="my-2 p-1 flex justify-center text-2xl font-bold">
                <RiLockPasswordFill className="mt-2 me-2" />
                Sign in
            </h1>

            <div>
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
                <FormError message={error?.auth} />
            </div>

            {
                isLoading ?
                    <Loading />
                    :
                    <div>
                        <button
                            onClick={auth}
                            className={isButtonDisabled ? disableButtonClassName : enableButtonClassName}
                            disabled={isButtonDisabled}>
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
            }
        </div>
    );
}

export default LoginPage;