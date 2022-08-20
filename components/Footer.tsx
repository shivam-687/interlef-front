import { nanoid } from "nanoid";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {

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

    const contactList = [
        {
            lable: 'info@interlef.com',
            link: 'mailto:info@interlef.com'
        },
        {
            lable: 'shivam@interlef.com',
            link: 'mailto:shivam@interlef.com'
        },
        {
            lable: '+91-7984226239',
            link: 'tel:+91-7984226239'
        },
        {
            lable: '+91-7984226239',
            link: 'https://wa.me/7984226239'
        }
    ]

    return (
        <footer className="footer text-white bg-gradient-to-b from-primary to-[#331782] py-10">
            <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-start">
                    <div className="bg-secondary inline-block max-w-[150px]">
                        <Image src="/logo/full-logo.png" alt="" width={300} height={80}></Image>
                    </div>
                    <div className="mt-3 max-w-xs">
                        <p>
                            Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way.
                        </p>
                    </div>
                </div>

                <div className="flex items-center w-full justify-start md:justify-end  mt-5 md:mt-0">
                    <div className="contact_info">
                        <h3 className="text-md font-bold mb-2">
                            Reach Us:
                        </h3>
                        {
                            contactList.map((contact, index) => {
                                return (
                                    <a className="block mb-1 hover:underline transition-all duration-300" href={contact.link} key={`${nanoid()}_${index}`}>{contact.lable}</a>
                                )
                            })
                        }

                        <div className="flex items-center">
                            {
                                socialContactList.map((socialContact, index) => {
                                    return (
                                        <a className="inline-block p-2 hover:text-secondary" href={socialContact.link} key={`${nanoid(5)}_${index}`}>{socialContact.icon}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;