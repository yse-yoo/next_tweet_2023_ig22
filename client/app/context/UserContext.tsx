"use client"

import React from "react";
import { User, initialUser } from "@/app/models/User";

export interface UserContextType {
    user: User;
    setUser: (newUser: User) => void;
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
}

const defaultValue: UserContextType = {
    user: initialUser,
    setUser: () => { },
    accessToken: "",
    setAccessToken: () => { },
};

const UserContext = React.createContext<UserContextType>(defaultValue);

export default UserContext;
