import Divider from "../../components/Divider";
import PortfolioCard, { PortfolioCardProp } from "../../components/PortfolioCard";
import Slider, { Settings } from 'react-slick';
import { nanoid, } from 'nanoid';
import { Fade } from "react-awesome-reveal";


const Portfolio = () => {

    const portfolioList: PortfolioCardProp[] = [
        
        {
            title: "RsGalaxy LLC",
            image: "/images/rsgalaxy-mockup.png",
            link: 'https://rsgalaxy.com/',
            caseStudyLink: 'https://rsgalaxy.com/'

        },
        {
            title: "BetaCode",
            image: "/images/betacode.png",
            link: 'https://betacode.vercel.app/',
            caseStudyLink: 'https://betacode.vercel.app/'

        },
        {
            title: "NKPays",
            image: "/images/nkpays-in.png",
            link: 'https://nkpays.in/',
            caseStudyLink: 'https://nkpays.in'

        },
        {
            title: "Aryan Intl LLC",
            image: "/images/aryanintel-mockup.png",
            link: 'https://www.aryanintl.com/',
            caseStudyLink: 'https://www.aryanintl.com/'

        },
        {
            title: "Poochie",
            image: "/images/poochie.jpg",
            link: 'https://poochies.interlef.com'
        },
        {
            title: "Fusion Kennel",
            image: "/images/fusionkennel.png",
            link: 'https://fusionkennel.interlef.com'
        },
        {
            title: "Tezpremier Spices",
            image: "/images/tezpremier-project.jpg"
        },
        {
            title: "PTP Solutions",
            image: "/images/primetech-project.jpg"
        },

    ]

    var settings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="py-20 px-5 container mx-auto">

            <div className="text-center flex flex-col items-center justify-center">
                <div className="max-w-lg">
                    <div className="overflow-hidden">
                        <Fade direction="up" triggerOnce>
                            <h2 className="text-4xl font-bold">Our Success Cases</h2>
                        </Fade>
                    </div>
                    <Divider></Divider>
                    <div className="overflow-hidden">
                        <Fade direction="down" triggerOnce>
                            <p className=" mt-4">We bring real world solutions to each client’s problem through a deep understanding of their market, product, and vision.</p>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="mt-10 mx-auto">
                {/* <Slider {...settings}>
                    {
                        portfolioList.map((item, index) => {
                            return (
                                <div key={`${nanoid(5)}_${index}`}>
                                    <div className="flex items-center justify-center p-5 ">
                                        <PortfolioCard title={item.title} image={item.image} link={item.link}></PortfolioCard>
                                    </div>
                                </div>

                            )
                        })
                    }
                </Slider> */}
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    {
                        portfolioList.map((item, index) => {
                            return <div key={`${nanoid(5)}_${index}`} className="overflow-hidden px-2 py-5">
                            <Fade direction="up" triggerOnce delay={index * 200}>
                            <div className="flex items-center justify-center ">
                                <PortfolioCard {...item}></PortfolioCard>
                            </div>
                            </Fade>
                        </div>
                        })
                    }
                </div>
            </div>

        </section>
    );
}

export default Portfolio;