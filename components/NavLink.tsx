import { useRouter } from 'next/router';
import Link from 'next/link';
export type NavlinkParams = {
    label: string;
    link: string;
}


export const NavLink = ({label, link}: NavlinkParams) => {

    const router = useRouter(); 

    return (
        <div className={`nav-link mr-3 inline-block cursor-pointer border border-transparent hover:border-primary transition duration-300 ${router.pathname === '/'+link ? 'active-nav-link': ''}`}>
            <Link href={link}><a>{label}</a></Link>
        </div>
    )
}