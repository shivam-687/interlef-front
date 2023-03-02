import React from 'react'
import HeroSection from '../../sections/free-website-offer/HeroSection'
import WhatYouGetSection from '../../sections/free-website-offer/WhatYouGetSection'

const GetFreeWebSite = () => {
  return (
    <>
      <HeroSection />
      <div className='container mx-auto px-5 md:px-10'>
        <WhatYouGetSection/>
      </div>
    </>
  )
}

export default GetFreeWebSite