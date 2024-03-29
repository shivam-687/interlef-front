import Image from "next/image";
import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdPhoneCallback } from 'react-icons/md'
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import Link from "next/link";
import { ScrollNavLink } from "./ScrollNavLink";
import ScrollTo from "./ScrollTo";
import { SideNavLink } from "./SideNavLink";
import { useInView } from 'react-intersection-observer';
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { nanoid } from "nanoid";


export type NavMenuItem = {
    lable: string;
    link: string;
    icon?: any;
    type: "link" | "scroll";
}




export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { inView, ref, entry } = useInView({
        threshold: 0,
    });


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
            lable: "Portfolio",
            link: 'portfolio',
            type: 'scroll'
        },
        {
            lable: "Pricing",
            link: 'pricing',
            type: 'scroll'
        },
        {
            lable: "Contact",
            link: 'contact',
            type: 'scroll'
        },
        // {
        //     lable: "Blog",
        //     link: 'blog',
        //     type: 'link'
        // },
    ];

    const socialContactList = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/myinterlef",
        },
        // {
        //     icon: <FaTwitter />,
        //     link: "https://www.twitter.com/",
        // },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/myinterlef",
        },
        {
            icon: <FaDribbble />,
            link: "https://dribbble.com/interlef",
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/company/interlef/",
        }
    ];

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
        console.log("toggleMenu", isOpen);
    }

    useEffect(() => {
        // console.log("useEffect", inView);
    }, [inView])



    return (
        <>
            <nav className="" ref={ref}>
                <div className={`w-full z-50 bg-white ${inView ? '' : 'fixed left-0 top-0 shadow-lg shadow-primary/10'}`}>
                    <div className="navbar container mx-auto px-2 py-4 md:py-2 w-full min-h-0">
                        <div className="desktop-nav px-5 py-2 hidden md:flex items-center w-full">
                            <Link href={'/'}>
                                <a className="nav-logo block flex-grow-0">
                                    <Image className="w-full h-auto max-w-full" width={150} height="35" src="/logo/full-logo.png" alt="" />
                                </a>
                            </Link>
                            <div className="nav-item flex-grow flex items-center justify-end">
                                <div className="nav-link mr-3 flex justify-center w-full">
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
                                    <ScrollTo name="contact"><button className=" btn btn-primary gap-2 w-max"><MdPhoneCallback className="text-lg"/>Get Call</button></ScrollTo>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-navigation w-full felx items-center justify-between md:hidden px-3">
                            <Link href={'/'} className="nav-logo">
                                <a><Image className="w-full h-auto max-w-full" width={100} height="25" src="/logo/full-logo.png" alt="" /></a>
                            </Link>
                            <div className="menu-icon-container flex items-center justify-center p-1">
                                <div className="menu-icon " onClick={toggleMenu}>
                                    {
                                        isOpen ? <HiMenuAlt4 className="text-2xl" /> : <HiMenuAlt4 className="text-2xl" />
                                    }
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

                            <div className="px-5 mt-5 border-t border-b border-t-gray-200 border-b-gray-200 py-2 flex items-center justify-center">
                                {
                                    socialContactList.map((socialContact, index) => {
                                        return (
                                            <a className="inline-block p-2 hover:text-secondary active:text-primary text-gray-500" href={socialContact.link} key={`${nanoid(5)}_${index}`}>{socialContact.icon}</a>
                                        )
                                    })
                                }
                            </div>
                        </Drawer>
                    </div>
                </div>
            </nav>
        </>
    );

}