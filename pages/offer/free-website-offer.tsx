import { GetStaticPropsContext } from 'next'
import React from 'react'
import Footer from '../../components/Footer'
import CtaSection from '../../sections/free-website-offer/CtaSection'
import HeroSection from '../../sections/free-website-offer/HeroSection'
import ProcessSection from '../../sections/free-website-offer/ProcessSection'
import WhatYouGetSection from '../../sections/free-website-offer/WhatYouGetSection'

const GetFreeWebSite = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white'>
      <div className="container mx-auto px-5 md:px-10">
      <HeroSection />
      </div>
    </div>
      <div className='container mx-auto px-5 md:px-10 mb-20'>
        <WhatYouGetSection />
        <ProcessSection />
      </div>
      <CtaSection />
      <Footer />
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default GetFreeWebSite