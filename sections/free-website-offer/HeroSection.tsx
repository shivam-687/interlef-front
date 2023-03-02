import Image from 'next/image'
import React from 'react'
import { MdPhoneCallback } from 'react-icons/md'

const HeroSection = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 py-20 md:py-28 px-5 gap-10 md:gap-0'>
            <div className=' flex items-center justify-center'>
                <div className='max-w-md lg:max-w-xl '>
                    <h1 className='text-5xl md:text-7xl font-bold'>
                        Your <br></br>
                        <span className='font-black text-[#ffb100]'>Free Website</span> <br></br>
                        Awaits <br></br>
                        <span className='font-black text-[#ffb100]'>Register Now!</span>
                    </h1>

                    <p className='m-0 text-[#ffb100] mt-3 text-xl'>
                        Don&apos;t miss out on our limited-time offer - let us help you take your online presence to the next level with our custom-built static websites.
                    </p>
                    <div className='mt-10'>
                    <button className="btn md:btn-lg btn-warning shadow-lg shadow-warning/20 gap-2"><MdPhoneCallback className='text-2xl'/>Get Callback</button>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden relative '>
                <div className='relative'>
                    <div className='relative hidden md:block'><Image className='z-20  image' src={`/images/get-free-site/get-free-site-hero.png`} alt="" width={1535} height={1135} /></div>
                    <div className='relative block md:hidden'><Image className='z-20' src={`/images/get-free-site/h1.png`} alt="" width={775} height={681} /></div>

                    <div className="absolute w-2/3 h-72 rounded-3xl translate-x-1/3 z-10 bg-warning bottom-[6px]"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection