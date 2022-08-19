import Image from "next/image";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { HiOutlineMenu } from "react-icons/hi";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import Link from "next/link";
import { ScrollNavLink } from "./ScrollNavLink";
import ScrollTo from "./ScrollTo";
import { SideNavLink } from "./SideNavLink";


export type NavMenuItem = {
    lable: string;
    link: string;
    icon?: any;
    type: "link" | "scroll";
}




export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menus: NavMenuItem[] = [
        {
            lable: "Home",
            link: 'home',
            type: 'scroll'
        },
        {
            lable: "Services",
            link: 'services',
            type: 'scroll'
        },
        {
            lable: "Contact",
            link: 'contact',
            type: 'scroll'
        },
        {
            lable: "Blog",
            link: 'blog',
            type: 'link'
        },
    ];

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
        console.log("toggleMenu", isOpen);
    }


    return (
        <>
            <nav className="navbar container mx-auto px-2 py-4 md:py-2 w-full min-h-0">
                <div className="desktop-nav px-5 py-2 hidden md:flex items-center w-full">
                    <Link href={'/'}>
                        <a className="nav-logo block flex-grow-0">
                            <Image className="w-full h-auto max-w-full" width={100} height="25" src="/logo/full-logo.png" alt="" />
                        </a>
                    </Link>
                    <div className="nav-item flex-grow flex items-center justify-end">
                        <div className="nav-link mr-3">
                            {
                                menus.map((menu, index) => {
                                    return (
                                        <span className="inline-block" key={index}>
                                            {menu.type === "link" ? <NavLink label={menu.lable} link={menu.link} /> : <ScrollNavLink label={menu.lable} link={menu.link} />}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className="nav-btn-group">
                            <ScrollTo name="contact"><button className=" btn btn-primary">Get Quote</button></ScrollTo>
                        </div>
                    </div>
                </div>

                <div className="mobile-navigation w-full felx items-center justify-between md:hidden">
                    <Link href={'/'} className="nav-logo">
                        <a><Image className="w-full h-auto max-w-full" width={100} height="25" src="/logo/full-logo.png" alt="" /></a>
                    </Link>
                    <div className="menu-icon-container flex items-center justify-center">
                        <div className="menu-icon" onClick={toggleMenu}>
                            <HiOutlineMenu className="text-xl" />
                        </div>
                    </div>
                </div>


                <Drawer
                    open={isOpen}
                    onClose={toggleMenu}
                    direction='left'
                >
                    <div className="py-5"></div>
                    <hr />

                    <ul>
                        {
                            menus.map((menu, index) => {
                                return (
                                    <li key={index} className="flex">
                                        <SideNavLink {...menu}></SideNavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </Drawer>
            </nav>
        </>
    );

}