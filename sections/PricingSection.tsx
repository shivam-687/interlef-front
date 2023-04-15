import React from 'react'
import PricingCard from '../components/PricingCard'
import { nanoid } from 'nanoid'

const PricingSection = () => {
  return (
    <>

      <section
        className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
      >
        <div className="container mx-auto px-5">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Pricing
                </span>
                <h2
                  className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                >
                  Our Pricing Plan
                </h2>
                <p className="text-body-color text-base">
                Discover our affordable pricing plans for professional web design and development services, as well as expert IT consulting.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <PricingCard
            title="Business"
            desc={`Our Business Site plan is perfect for small businesses looking to establish a professional online presence. `}
            price={7000}
            featureList={[
              '1 Free Domain Name',
              <b key={nanoid()}>15 Page (Dynamic Website)</b>,
              'Business Email id (Webmail)',
              'Unlimited Images & Videos',
              'Unlimited (Bandwidth/ Space)',
              '100% Responsive Website',
              <b key={nanoid()}>Live Chat Integration</b>,
              <b key={nanoid()}>Payment Gateway Integration</b>,
              <b key={nanoid()}>Social Media Integration</b>,
              <b key={nanoid()}>Social Media Integration</b>,
              <b key={nanoid()}>SSL Certificate</b>,
              <b key={nanoid()}>WhatsApp Integration</b>,
              '24/7 Support (Ticket & Email)',
              'Annual Renewal Rs. 3000',
              <b key={nanoid()} className='mt-5'>Note: GST @ 18% Applicable on All Purchase</b>
            ]}
            actionText='Book Now For FREE'
            actionMessage='Hii there, I am looking for new Business Website. How we can proceed further...'
            />
            <PricingCard
            title="E-Commerce"
            desc={`ur Ecommerce Site plan is designed for businesses that want to sell their products or services online. `}
            price={15000}
            featureList={[
              '1 Free Domain Name',
              <b key={nanoid()}>15 Page (Dynamic Website)</b>,
              <b key={nanoid()}>UNLIMITED Product Listing</b>,
              <b key={nanoid()}>Business Email id (Webmail)</b>,
              'Unlimited Images & Videos',
              'Unlimited (Bandwidth/ Space)',
              '100% Responsive Website',
              'Social Media Integration',
              'Live Chat Integration',
              'Payment Gateway',
              <b key={nanoid()}>cPanel* Access</b>,
              <b key={nanoid()}> SSL Certificate </b>,
              '4/7 Support (Ticket & Email)',
              'Annual Renewal Rs. 3000',
              <b key={nanoid()} className='mt-5'>Note: GST @ 18% Applicable on All Purchase</b>
            ]}
            actionText='Book Now For FREE'
            actionMessage='Hii there, I am looking for new E-Commerce Website. How we can proceed further...'
            />
            <PricingCard
            title="Custom Web App"
            featureList={[
              `Our Custom Web Application plan is for businesses that need a more advanced website or web application. Whether you need a custom admin panel, a startup web app, or a complex web platform built from scratch, we have the expertise to bring your vision to life. We use modern and cutting-edge technologies to build web applications that are robust, scalable, and high-performance. Our team of experienced developers will work closely with you to create a tailored solution that meets your unique needs. With our Custom Web Application plan, you'll get a customized solution that's built for your business and designed to help you achieve your goals.`
            ]}
            actionText='Book Now For FREE'
            />
          
          </div>
        </div>
      </section>

    </>
  )
}

export default PricingSection