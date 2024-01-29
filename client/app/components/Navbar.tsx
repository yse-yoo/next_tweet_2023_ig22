"use client"

import Link from 'next/link'
import { SiLoopback } from 'react-icons/si';
import NavbarLink from './NavbarLink';
import { removeAccessToken } from '../services/UserService';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { initialUser } from '../models/User';

const Navbar = () => {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);

    const signOut = async () => {
        // ユーザ情報削除
        await setUser(initialUser)
        // Cookie削除
        await removeAccessToken();
        // ログインページにリダイレクト
        router.replace('/auth/login');
    }

    return (
        <nav className="px-5 py-3 flex border-b">
            <div className="flex items-center mr-6">
                <SiLoopback className="me-3" size="2em" />
                <Link href="/" className="text-black">
                    <span className="font-semibold text-xl">Next Tweet</span>
                </Link>
            </div>

            <div className="text-sm md:flex-grow">
                {
                    (user == undefined || user?.id > 0) ?
                        <>
                            <NavbarLink href="/user/profile" label="Profile" />
                            <NavbarLink href="#" label="Sign out" onClick={signOut} />
                        </>
                        :
                        <>
                            <NavbarLink href="/auth/regist" label="Register" />
                            <NavbarLink href="/auth/login" label="Sign in" />
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar;