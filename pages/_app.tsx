import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navigation } from "../components/Navigation";
import "animate.css/animate.min.css";
import TopStrip from "../components/TopStrip";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopStrip/>
      <Navigation></Navigation>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
