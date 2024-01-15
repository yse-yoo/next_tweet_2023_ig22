import Link from 'next/link'

interface NavbarLinkProps {
    href: string;
    label: string;
}

const NavbarLink = ({href, label} : NavbarLinkProps) => {
    return (
        <Link href={href} className='py-2 px-3'>{label}</Link>
    );
}

export default NavbarLink;