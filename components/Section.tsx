import React from 'react'
import { twMerge } from 'tailwind-merge'
import Divider from './Divider'

export type SectionProps = {
    title?: string,
    subTitle?: string,
    divider?: boolean,
    className?: string,
    container?: boolean,
    titleContainerClass?: string,
    children?: any
}

const Section = ({
    title,
    subTitle,
    divider=true,
    className='',
    container=true,
    titleContainerClass="",
    children
}: SectionProps) => {

    const baseClass = "";

    return (
        <div className={twMerge(`${container?'container mx-auto': 'w-full'} px-5 py-14`, className)}>
            <div className={twMerge(`w-full mb-14 flex justify-center items-center flex-col gap-3`, className)}>
                {title && <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>}
                {subTitle && <h3 className='text-lg font-normal max-w-sm text-center'>{subTitle}</h3>}
                
                
                {divider && <div className="max-w-xl w-full"><Divider/></div>}
            </div>

            {children}

        </div>
    )
}

export default Section