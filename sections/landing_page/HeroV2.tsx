import React, { useEffect, useRef, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import { BsWhatsapp } from 'react-icons/bs';
import { MdPhoneCallback } from 'react-icons/md'
import DiwaliDeepStrip from '../../components/special-ocassion/DiwaliDeepStrip';

import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'

function HeroV2() {
    const [lineNo, setLineNo] = useState(0);
    const [activeGradient, setActiveGradient] = useState<string>('')
    const gradientPattern = [
        'bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]  ',
        'bg-gradient-to-r from-[#662D8C] to-[#ED1E79]  ',
        'bg-gradient-to-r from-[#D4145A] to-[#FBB03B]   '
    ]
    const vidref = useRef<HTMLVideoElement>(null);
    const ref = useRef<FireworksHandlers>(null)
    const texts = [
        'A Digital Agency',
        'Focused On',
        'Website Things'
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (lineNo >= texts.length - 1) {
                setLineNo(0);
            } else {
                setLineNo(prevCount => prevCount + 1);
            }
            // console.log("Line No: ", lineNo);
        }, 3000);
        setActiveGradient(gradientPattern[lineNo]);
        return () => clearInterval(intervalId);
    }, [lineNo]);

    useEffect(() => {
        if (vidref) {
            vidref.current?.play()
        }
    })

    return (
        <div className='min-h-[calc(100vh-70px)] flex flex-col justify-center items-center relative overflow-hidden'>
            {/* <div className="absolute w-full h-full left-0 top-0"> */}
            {/* <video ref={vidref} className='absolute w-full  left-0 top-0 aspect-video' autoPlay={true} loop >
                <source src="https://res.cloudinary.com/dzqdvl4di/video/upload/v1665390194/interlef/Fireworks_-_10863_crfefe.mp4" />
            </video> */}
            <div className=" absolute w-full h-full left-0 top-0 bg-transparent backdrop-blur-sm ">
                <Fireworks
                    ref={ref}
                    options={{ opacity: 0.5, intensity: 9}}
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: "inherit",
                        background: '#fff'
                    }}
                />
            </div>

            {/* </div> */}
            <div className="absolute left-0 bottom-10 w-full">
                <DiwaliDeepStrip />
            </div>
            <div className=' flex flex-col items-center'>
                {
                    texts.map((t, i) => {
                        return <div className='overflow-hidden' key={i}>
                            <Fade direction="up" delay={(i + 1) * 300}>
                                <h2 key={i} className={`
                        leading-none text-6xl 
                        sm:text-6xl md:text-9xl lg:text-8xl xl:text-9xl 
                        font-[900] text-center transition-all ease-out duration-1000 
                        pb-2 bg-clip-text 
                        relative
                        z-20
                        ${gradientPattern[i]} ${lineNo === i ? 'text-transparent before:opacity-100' : 'text-black before:opacity-0'}`}
                                >{t}</h2>
                            </Fade>
                        </div>
                    })
                }
            </div>
            <div className="flex items-center gap-5 mt-10 md:mt-10">
                <div className="">
                    <Fade direction='left'><button className="btn md:btn-lg btn-primary shadow-lg shadow-primary/20 gap-2"><MdPhoneCallback className='text-2xl' />Get Callback</button></Fade>
                </div>
                <div className="">
                    <Fade direction='right'>
                        <div className={`rounded-[12px] relative `}>
                            <div className={`absolute top-0 left-0 w-full h-full -z-10 blur-3xl ${activeGradient}`}></div>
                            <a href="https://wa.me/7984226239" target="_blank" rel="noreferrer" className={`btn md:btn-lg bg-base-100 hover:bg-base-200 text-black gap-2 shadow-lg border-none transition-all ease-out duration-1000`}>
                                <BsWhatsapp className=" text-2xl" />
                                Whatsapp
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="mt-10 md:mt-10 max-w-3xl px-5 overflow-hidden ">
                <Fade direction='up'>
                    <p className="text-lg leading-tight text-center md:text-xl lg:2xl">
                        <span className='text-3xl'>🙏</span>
                        {` We’re different… and by different we mean better. Using a proven method of innovative design and personalized strategies, we can elevate your brand above the competition.`}
                        <span className='text-3xl'>🙏</span>
                    </p>
                </Fade>
            </div>
        </div>
    )
}

export default HeroV2