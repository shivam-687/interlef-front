import { MdMail, MdCall } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { nanoid } from 'nanoid';

const ContactInfoCard = () => {

    const contactList = [
        {
            icon: <MdMail />,
            lable: 'info@interlef.com',
            link: 'mailto:info@interlef.com'
        },
        {
            icon: <MdMail />,
            lable: 'shivam@interlef.com',
            link: 'mailto:shivam@interlef.com'
        },
        {
            icon: <MdCall />,
            lable: '+91-7984226239',
            link: 'tel:+91-7984226239'
        },
        {
            icon: <FaWhatsapp />,
            lable: '+91-7984226239',
            link: 'https://wa.me/7984226239'
        }
    ]

    return (
        <div className="rounded-lg h-full p-5 flex flex-col items-center justify-start bg-gradient-to-b from-primary to-[#331782] text-white">
            <h1 className="text-4xl text-center mb-4">Contact:</h1>
            <div>
                {contactList.map((contact, index) => {
                        return (
                            
                                <a key={`${nanoid()}_${index}`} target="_blank" rel='noreferrer' href={contact.link} className="flex items-center gap-3 hover:underline underline-offset-2 text-xl mb-2">
                                    <span>
                                        {contact.icon}
                                    </span>
                                    {contact.lable}
                                </a>
                            
                        )
                    })
                }
            </div>
            <p></p>
        </div>
    );
}


export default ContactInfoCard;