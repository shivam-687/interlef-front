import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navigation } from "../components/Navigation";
import "animate.css/animate.min.css";
import TopStrip from "../components/TopStrip";
import DiwaliDeepStrip from "../components/special-ocassion/DiwaliDeepStrip";
import OfferStrip from "../components/special-ocassion/OfferStrip";
import Link from "next/link";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      {/* <OfferStrip>
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <p className="text-lg">Limited Time Offer: Get Your Website for Free!</p>
        <div><Link href={'/offer/registration'} ><button className="btn btn-warning mx-2 btn-sm">REGISTER</button></Link>
          <Link href={'/offer/free-website-offer'}><button className="btn text-warning btn-link mr-2 btn-sm">Learn More</button></Link></div>
        </div>
      </OfferStrip> */}
      <TopStrip />
      {/* <div className="fixed left-0 bottom-0 w-full z-30 bg-base">
                <DiwaliDeepStrip />
            </div> */}
      <Navigation></Navigation>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp
