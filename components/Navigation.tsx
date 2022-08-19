import Image from "next/image";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { HiOutlineMenu } from "react-icons/hi";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'




export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menus = [
        {
            lable: "Home",
            link: '#',
        },
        {
            lable: "Services",
            link: '#',
        },
        {
            lable: "Contact",
            link: '#',
        },
        {
            lable: "Blog",
            link: '#',
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
                    <div className="nav-logo flex-grow-0">
                        <Image className="w-full h-auto max-w-full" width={100} height="25" src="/logo/full-logo.png" alt="" />
                    </div>
                    <div className="nav-item flex-grow flex items-center justify-end">
                        <div className="nav-link mr-3">
                            {
                                menus.map((menu, index) => {
                                    return (
                                        <NavLink label={menu.lable} link={menu.link} key={index}></NavLink>
                                    );
                                })
                            }
                        </div>
                        <div className="nav-btn-group">
                            <button className=" btn btn-primary">Get Quote</button>
                        </div>
                    </div>
                </div>

                <div className="mobile-navigation w-full felx items-center justify-between md:hidden">
                    <div className="nav-logo">
                        <Image className="w-full h-auto max-w-full" width={70} height="18" src="/logo/full-logo.png" alt="" />
                    </div>
                <div className="menu-icon-container flex items-center justify-center">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <span className="inline-block">
                            <HiOutlineMenu />
                        </span>
                    </div>
                </div>
                </div>


                <Drawer
                    open={isOpen}
                    onClose={toggleMenu}
                    direction='left'
                >
                    <h1>rawer Content</h1>
                </Drawer>
            </nav>
        </>
    );

}