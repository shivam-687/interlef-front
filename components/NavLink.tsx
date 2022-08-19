
export type NavlinkParams = {
    label: string;
    link: string;
}


export const NavLink = ({label, link}: NavlinkParams) => {
    return (
        <div className="nav-link mr-3 inline-block">
            <a href={link} className="navLink inline-block p-2 hover:text-primary transition duration-300">{label}</a>
        </div>
    )
}