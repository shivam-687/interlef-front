import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navigation } from "../components/Navigation";
import "animate.css/animate.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation></Navigation>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
