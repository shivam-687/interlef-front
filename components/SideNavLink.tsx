import Link from "next/link";
import {Link as ScrollLink} from 'react-scroll';

export type SideNavLinkParams = {
    lable: string;
    link: string;
    type?: 'link' | 'scroll';
}


export const SideNavLink = ({ lable, link, type='link' }: SideNavLinkParams) => {

    return (
        <div className="mx-2  flex items-center px-4 py-2 w-full border border-gray-100 mt-2 rounded overflow-hidden ">
            {
                type === 'link' ?
                    <Link href={link}>
                        <a>{lable}</a>
                    </Link>
                    :
                    <ScrollLink activeClass="active-nav-link" to={link} spy={true} smooth={true} duration={1500}>
                        {lable}
                    </ScrollLink>
            }
        </div>
    );
}