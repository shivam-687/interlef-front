import { nanoid } from 'nanoid'
import React from 'react'
import Section from '../../components/Section'


type WhatYouGetCardProps = {
    title: string,
    desc: string
}

const WhatYouGetCard = ({title, desc}: WhatYouGetCardProps ) => {
    return (
        <div className='p-5 rounded-lg shadow-primary/20 bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-none' >
            <h3 className='text-lg font-bold mb-3'>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

const WhatYouGetSection = () => {

    const whatYouGetList: WhatYouGetCardProps[] = [
        {title: 'Custom-built Static Website', desc: 'Your website will be custom-built to fit your specific needs and preferences, ensuring a unique online presence that sets you apart from the competition.'},
        {title: 'Premium design', desc: 'Our team of designers will work with you to create a stunning website that not only looks great but is also easy to navigate, ensuring a seamless user experience for your visitors'},
        {title: 'Fast loading speed', desc: 'Your website will be built using the latest technology to ensure lightning-fast loading times, helping to improve your search engine ranking and user engagement.'},
        {title: 'Mobile-responsive design', desc: 'Your website will be optimized for all devices, ensuring that it looks great and functions perfectly no matter how your visitors are accessing it.'},
        {title: 'SEO-friendly', desc: 'our website will be built with on-page SEO in mind, ensuring that it is easily discoverable by search engines and has the potential to rank higher in search results.'},
        {title: 'Google Analytics integration', desc: 'Your website will be built using the latest technology to ensure lightning-fast loading times, helping to improve your search engine ranking and user engagement.'},

    ]
  return (
    <Section title="What You Get FREE!" className='justify-between'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {
           whatYouGetList.map(val => {
            return <WhatYouGetCard key={nanoid()} title={val.title} desc={val.desc} />
           }) 
        }
        </div>
    </Section>
  )
}

export default WhatYouGetSection