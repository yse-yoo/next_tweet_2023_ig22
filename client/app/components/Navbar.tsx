"use client"

import Link from 'next/link'
import { SiLoopback } from 'react-icons/si';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    return (
        <nav className="px-5 py-3 flex border-b">
            <div className="flex items-center mr-6">
                <SiLoopback className="me-3" size="2em" />
                <Link href="/" className="text-black">
                    <span className="font-semibold text-xl">Next Tweet</span>
                </Link>
            </div>

            <div className="text-sm md:flex-grow">
                <NavbarLink href="/user/profile" label="Profile" />
                <NavbarLink href="/auth/regist" label="Register" />
                <NavbarLink href="#" label="Sign out" onClick={() => {alert('Ok')}} />
                <NavbarLink href="/auth/login" label="Sign in" />
            </div>
        </nav>
    )
}

export default Navbar;