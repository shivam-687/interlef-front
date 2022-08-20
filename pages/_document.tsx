import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { Navigation } from '../components/Navigation'

class MyDocument extends Document {

    structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Interlef Web Solutions",
        "alternateName": "Interlef",
        "url": "https://interlef.com",
        "logo": "https://interlef.com/_next/image?url=%2Flogo%2Ffull-logo.png&w=128&q=75",
        "sameAs": [
            "https://www.facebook.com/myinterlef",
            "",
            "https://www.instagram.com/myinterlef/",
            "",
            "https://interlef.com"
        ]
    }

    localBusiness = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Interlef Web Solutions",
        "image": "https://res.cloudinary.com/interlef/image/upload/v1660921048/interlef/logo-md-500x500_wghcd8.jpg",
        "@id": "",
        "url": "https://interlef.com",
        "telephone": "+91 7984226239",
        "priceRange": "30000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chiraiyakot",
            "addressLocality": "Mau",
            "postalCode": "276129",
            "addressCountry": "IN"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/myinterlef",
            "https://www.instagram.com/myinterlef/",
            "https://interlef.com"
        ]
    }

    render() {
        return (
            <Html data-theme="interlef_light">
                <Head >

                    <Script id="google-tagmanager" strategy="afterInteractive" dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NMX5MPL');`}}></Script>

                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name='bingbot' content='index, follow' />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Nunito:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(this.structuredData) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(this.localBusiness) }} />
                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMX5MPL"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument