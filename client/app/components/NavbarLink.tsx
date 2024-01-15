import Link from 'next/link'

interface NavbarLinkProps {
    href: string;
    label: string;
}

const className = "hidden p-3 md:inline-block text-black";

const NavbarLink = ({href, label} : NavbarLinkProps) => {
    return (
        <Link href={href} className={className}>{label}</Link>
    );
}

export default NavbarLink;