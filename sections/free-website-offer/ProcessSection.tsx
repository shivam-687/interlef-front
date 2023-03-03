import { nanoid } from 'nanoid'
import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image';

type ProcessCardProps = {
    img: string,
    title: string,
    des: string,
    count: number,
    direction: 'left' | 'right'
}

const processList: ProcessCardProps[] = [
    {
        title: 'REGISTER',
        des: 'Fill out our quick registration form with your details and requirements.',
        img: "/images/get-free-site/chat.png",
        count: 1,
        direction: 'left'
    },
    {
        title: 'Get Confirmation',
        des: 'Receive a confirmation message on WhatsApp from our team, and let us know your availability for a discussion.',
        img: '/images/get-free-site/mail.png',
        count: 2,
        direction: 'right'
    },
    {
        title: 'Discuss Your Website',
        des: 'Receive a confirmation message on WhatsApp from our team, and let us know your availability for a discussion.',
        img: '/images/get-free-site/chat.png',
        count: 3,
        direction: 'left'
    },
    {
        title: 'Pay One Time Charge',
        des: 'Pay a one-time charge of just $5 to get your website started.',
        img: '/images/get-free-site/payment.png',
        count: 4,
        direction: 'right'
    },
    {
        title: 'Provide Assets',
        des: 'Send us any images, logos, or text content you want to be included on your site.',
        img: '/images/get-free-site/image.png',
        count: 5,
        direction: 'left'
    },
    {
        title: 'Domain Name',
        des: 'Provide us with a domain name, or we can help you purchase one for an additional fee.',
        img: '/images/get-free-site/domain.png',
        count: 6,
        direction: 'right'
    },
    {
        title: 'Your Site Goes Live',
        des: 'Once we have all the information we need, our team will get to work and your website will be live in just 3 days!',
        img: '/images/get-free-site/website.png',
        count: 7,
        direction: 'left'
    },
];

const ProcessCardCircle = ({ count }: { count: number }) => {
    return <div className='w-24 h-24 text-5xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-full  shadow-xl shadow-primary/25 flex items-center justify-center'>{count}</div>
}

const ProcessCardContent = ({ img, title, des }: { img: string, title: string, des: string }) => {
    return (
        <div className='flex flex-col items-center gap-1 max-w-xs w-full bg-white rounded-lg z-20 border-dashed border-gray-600 border p-3'>
            <div className='w-28 h-28'>
                <Image src={img} alt="" width={200} height={200} />
            </div>

            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='text-center'>{des}</p>
        </div>
    )
}

const ProcessCard = ({
    img,
    title,
    des,
    count = 1,
    direction = 'left'
}: ProcessCardProps) => {
    return (
        <>
            <div className={`relative w-full md:flex items-stretch hidden `}>
                <div className='flex-grow  flex justify-center flex-shrink-0 relative'>
                    {direction === 'right' &&
                        <>
                            <ProcessCardContent {...{ img, title, des }} />
                            <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-center">
                                <div className='border-t-4 border-dashed border-gray-600 w-full'></div>
                            </div>
                        </>
                    }
                </div>
                <div className='flex-grow-0  flex justify-center items-center w-[100px]'>
                    <ProcessCardCircle count={count} />
                    {/* <div className='border-t-2 border-dotte'></div> */}
                </div>
                <div className="flex-grow flex justify-center flex-shrink-0 relative">
                    {direction === 'left' &&
                        <>
                            <ProcessCardContent {...{ img, title, des }} />
                            <div className="absolute left-0 bottom-0 w-1/2 h-full flex items-center">
                                <div className='border-t-4 border-dashed border-gray-600 w-full'></div>
                            </div>
                        </>
                    }
                </div>
            </div>

            <div className="flex flex-col justify-center space-y-10 md:hidden items-center">
                <ProcessCardCircle count={count} />
                <ProcessCardContent {...{ img, title, des }} />
            </div>

        </>
    )
}

const ProcessSection = () => {

    return (
        <Section title="Our Process">
            <div className='space-y-28 mt-20'>
                {
                    processList.map(val => {
                        return (
                            <ProcessCard {...val} key={nanoid()} />
                        )
                    })
                }
            </div>
        </Section>
    )
}

export default ProcessSection