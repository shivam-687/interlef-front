import React from 'react'
import { MdCall, MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const TopStrip = () => {
    return (
        <div className='bg-primary text-primary-content py-1 bg-gradient-to-r from-primary via-[#EB12A0] to-primary'>
            <div className='flex items-center container mx-auto justify-between text-xs md:text-sm w-full'>
                <span className='inline-flex items-center justify-center gap-2'> <MdCall className='text-lg' /> +91 798422623</span>
                <span className='inline-flex items-center justify-center gap-2'> <FaWhatsapp className='text-lg' /> +91 798422623</span>
                <span className='inline-flex items-center justify-center gap-2'> <MdEmail className='text-lg' /> shivam@interlef.com</span>
            </div>
        </div>
    )
}

export default TopStrip