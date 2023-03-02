import React from 'react'
import { mergeClasses } from '../helpers/helpers';

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
    divider=false,
    className='',
    container=true,
    titleContainerClass="",
    children
}: SectionProps) => {

    const baseClass = "";

    return (
        <div className={mergeClasses(`${container?'container mx-auto': 'w-full'} px-5 py-14`, className)}>
            <div className={mergeClasses(`w-full mb-10 flex justify-center flex-col gap-3`, className)}>
                {title && <h2 className='text-2xl '>{title}</h2>}
                {subTitle && <h3 className='text-lg font-normal max-w-sm text-center'>{subTitle}</h3>}
            </div>

            {children}

        </div>
    )
}

export default Section