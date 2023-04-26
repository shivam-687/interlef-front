
import type { GetStaticPropsContext, NextPage } from 'next'
import Footer from '../components/Footer';
import AttentionCard from '../sections/landing_page/Attentioncard';
import Contact from '../sections/landing_page/Contact';
import HeroSection from '../sections/landing_page/HeroSection';
import OurServices from '../sections/landing_page/OurServices';
import OurTechnology from '../sections/landing_page/OurTechnology';
import Portfolio from '../sections/landing_page/Portfolio';
import WelcomeSection from '../sections/landing_page/WelcomeSection';
import WhyOurAgency from '../sections/landing_page/WhyOurAgency';
import { Element, animateScroll } from 'react-scroll'
import Head from 'next/head';
import HeroV2 from '../sections/landing_page/HeroV2';
import PricingSection from '../sections/PricingSection';




const Home: NextPage = () => {


  return (
    <>
      <Head>
        <meta property="og:title" content="Interlef: Modern and Top web development agency in Uttar Pradesh" />
        <meta property='og:description' content="A web development agency in uttar pradesh that specializes in modern website designs. We combine beautiful and functional ideas into effective designs." />
        <meta property='og:site_name' content="Interlef Web Solutions" />
        <meta property='og:type' content="business.business" />
        <meta property="og:url" content="https://interlef.com" />
        <meta property="og:image" content="https://res.cloudinary.com/interlef/image/upload/v1660924625/interlef/interleg-home-page_gup6dr.png" />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@myinterlef" />
        <meta name="twitter:description" content="A web development agency in uttar pradesh that specializes in modern website designs. We combine beautiful and functional ideas into effective designs." />
        <meta name="twitter:title" content="Interlef: Modern & Top web development agency in Uttar Pradesh" />
        <meta name="twitter:image" content="https://res.cloudinary.com/interlef/image/upload/v1660924625/interlef/interleg-home-page_gup6dr.png" />
        <meta name="description" content="A web development agency in uttar pradesh that specializes in modern website designs. We combine beautiful and functional ideas into effective designs." />
        <title>Interlef: Modern & Top web development agency in Uttar Pradesh</title>
      </Head>

      <Element name="home"><HeroV2></HeroV2></Element>
      <WelcomeSection></WelcomeSection>
      <WhyOurAgency></WhyOurAgency>
      <Element name='services'><OurServices></OurServices></Element>
      <OurTechnology></OurTechnology>
      <Element name='portfolio'><Portfolio></Portfolio></Element>
      {/* <Review></Review> */}
      <Element name="pricing">
        <section className="mt-28">
          <PricingSection />
        </section>
      </Element>
      <section className='mt-28'>
        <AttentionCard></AttentionCard>
      </section>
      <Element name='contact'><Contact></Contact></Element>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
