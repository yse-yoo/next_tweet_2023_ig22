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
import ClickButton from "@/app/components/ClickButton";
import LinkButton from "@/app/components/LinkButton";

const LoginPage = () => {
    const { setUser } = useContext(UserContext);
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState({ auth: "" })
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    const disabled = () => !(email && password)

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
                        <ClickButton
                            label="Sign in"
                            onClick={auth}
                            disabled={disabled()}
                        />

                        <LinkButton
                            href="/auth/regist"
                            label="Register"
                        />
                    </div>
            }
        </div>
    );
}

export default LoginPage;