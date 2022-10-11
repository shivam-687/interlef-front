import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navigation } from "../components/Navigation";
import "animate.css/animate.min.css";
import TopStrip from "../components/TopStrip";
import DiwaliDeepStrip from "../components/special-ocassion/DiwaliDeepStrip";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <TopStrip/>
      <div className="fixed left-0 bottom-0 w-full z-30 bg-base">
                <DiwaliDeepStrip />
            </div>
      <Navigation></Navigation>
      <Component {...pageProps} />
     
    </>
  );
}

export default MyApp
