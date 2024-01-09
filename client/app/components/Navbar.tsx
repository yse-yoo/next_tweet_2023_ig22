import Link from 'next/link'

const Navbar = () => {
    console.log("Navbar!!!!")
    return (
        <nav>
            <div className='flex flex-wrap items-center mx-auto py-4'>
                <Link href="/" className='me-3'>
                    <span className='self-center text-2xl font-semibold'>Next Tweet</span>
                </Link>

                <div>
                    <ul className='flex flex-wrap'>
                        <li>
                            <Link href="/user/profile" className='py-2 px-3'>Profile</Link>
                        </li>
                        <li>
                            <Link href="/regist" className='py-2 px-3'>Register</Link>
                        </li>
                        <li>
                            <Link href="/login" className='py-2 px-3'>Sign in</Link>
                        </li>
                        <li>
                            <Link href="/user/logout" className='py-2 px-3'>Sign out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;