
import type { NextPage } from 'next'
import Head from 'next/head';
import Footer from '../components/Footer';
import { Navigation } from '../components/Navigation';
import AttentionCard from '../sections/landing_page/Attentioncard';
import Contact from '../sections/landing_page/Contact';
import HeroSection from '../sections/landing_page/HeroSection';
import OurServices from '../sections/landing_page/OurServices';
import OurTechnology from '../sections/landing_page/OurTechnology';
import Portfolio from '../sections/landing_page/Portfolio';
import Review from '../sections/landing_page/Review';
import WelcomeSection from '../sections/landing_page/WelcomeSection';
import WhyOurAgency from '../sections/landing_page/WhyOurAgency';



const Home: NextPage = () => {


  return (
    <>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <WelcomeSection></WelcomeSection>
      <WhyOurAgency></WhyOurAgency>
      <OurServices></OurServices>
      <OurTechnology></OurTechnology>
      <Portfolio></Portfolio>
      <Review></Review>
      <AttentionCard></AttentionCard>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home
