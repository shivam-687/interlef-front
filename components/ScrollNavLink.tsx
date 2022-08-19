import {Link as ScrollLink} from 'react-scroll';
export type NavlinkParams = {
    label: string;
    link: string;
}


export const ScrollNavLink = ({label, link}: NavlinkParams) => {
    return (
        <div className="nav-link mr-3 inline-block">
            <ScrollLink activeClass="active-nav-link" to={link} spy={true} smooth={true} duration={1500}>
          {label}
        </ScrollLink>
        </div>
    )
}