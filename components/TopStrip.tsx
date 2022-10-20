import React from 'react'
import { MdCall, MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const TopStrip = () => {
    return (
        <div className='bg-primary text-primary-content py-1 bg-gradient-to-r from-primary via-[#EB12A0] to-primary'>
            <div className='flex items-center container mx-auto justify-between text-xs md:text-sm w-full'>
                <a href='tel:7984226239' className='inline-flex items-center justify-center gap-2'> <MdCall className='text-lg' /> +91 7984226239</a>
                <a href='https://wa.me/7984226239' className='inline-flex items-center justify-center gap-2'> <FaWhatsapp className='text-lg' /> +91 7984226239</a>
                <a href="mailto:shivam@interlef.com" className='inline-flex items-center justify-center gap-2'> <MdEmail className='text-lg' /> shivam@interlef.com</a>
            </div>
        </div>
    )
}

export default TopStrip