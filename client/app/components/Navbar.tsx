import Link from 'next/link'
import { SiLoopback } from 'react-icons/si';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    console.log("Navbar!!!!")
    return (
        <nav>
            <div className="flex flex-wrap items-center mx-auto py-4">
                <SiLoopback className="me-3" size="2em" />
                <Link href="/" className='me-3'>
                    <span className="text-2xl font-semibold">Next Tweet</span>
                </Link>

                <div className='flex flex-wrap'>
                    <NavbarLink href="/user/profile" label="Profile" />
                    <NavbarLink href="/auth/regist" label="Register" />
                    <NavbarLink href="/auth/login" label="Sign in" />
                    <NavbarLink href="#" label="Sign out" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;