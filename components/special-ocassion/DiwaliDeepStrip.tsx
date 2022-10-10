import React, { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'


const DiwaliDeepStrip = () => {
    const [nums, setNums] = useState<number[]>([1, 2, 3]);
    const image = '/images/deep-transparent.png';
    const count = 5;

    const setArr = () => {
        setNums([]);
        for (let index = 0; index < count; index++) {
            setNums(prev => [...prev, index])
        }
    }
    useEffect(() => {
        setArr();
    }, [])

    useEffect(() => {
        console.log(nums)
    }, [nums])
    return (
        <div className='flex items-center justify-between'>
            {
                nums.map((n, index) => {
                    return <div key={index} className="w-full h-full">
                        <div className="relative w-full flex items-center justify-center" >
                            {/* <Image src={image} alt="" layout="fill" objectFit="cover"></Image> */}
                            <Image src={image} alt="" width={50} height={50}></Image>
                            {/* <img src={image} alt="" className='max-w-full object-cover absolute left-0 right-0 w-full h-auto'/> */}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default DiwaliDeepStrip