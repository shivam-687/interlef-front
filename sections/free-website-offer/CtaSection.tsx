import React from 'react'
import Image from 'next/image';
import { MdOutlineLocalOffer, MdPhoneCallback } from 'react-icons/md';
import Link from 'next/link';


const CtaSection = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className="relative w-full h-full">
            <Image src="/images/get-free-site/get-gree-site-footer-img.jpg" layout='fill' alt="" objectFit='cover' />
        </div>

        <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white text-5xl  font-bold py-14 px-5">
            <h1>Don&apos;t Wait Any Longer,<br></br> Get Your Website Today!</h1>
            <p className='text-lg max-w-xl '>Our team of experts is ready to create a stunning website that will take your business to the next level. With our custom-built static websites, you can have an online presence that stands out from the competition. And the best part? You can get it for free!</p>
            <div className='mt-10 flex justify-center md:justify-start'>
            <Link href="/offer/registration"><button className="btn md:btn-lg btn-warning shadow-lg shadow-warning/20 gap-2"><MdOutlineLocalOffer className='text-2xl' />Get Free Website!</button></Link>
            </div>
        </div>
    </div>
  )
}

export default CtaSection