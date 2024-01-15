import Link from 'next/link'

const NavbarLink = () => {
    return (
        <Link href="/user/profile" className='py-2 px-3'>Profile</Link>
    );
}

export default NavbarLink;