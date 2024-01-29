"use client"

import React, { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { initialUser } from "../models/User";
import Cookies from "js-cookie";
import { getUser, updateAccessToken } from "../services/UserService";

export default function UserProvider({
    children,
}: {
    children: React.ReactNode,
}): React.ReactNode {
    const [user, setUser] = useState(initialUser)
    const token = Cookies.get('access_token') || "";

    //トークンからユーザ取得
    useEffect(() => {
        (async () => {
            //const token = await Cookies.get('access_token') || "";
            const user = await getUser(token);
            console.log("AuthProvider:", user)
            setUser(user);
        })();
    }, [token])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
