import { Fade } from "react-awesome-reveal";
import CompanyFeatureCard from "../../components/CompanyFeatureCard";
import Divider from "../../components/Divider";
import ScrollAnimation from "../../components/ScrollAnimation";


const WelcomeSection = () => {

    const featureList = [
        {
            title: "Exellent Support",
            description: "We are always there to assst our clients in every possible way to meet client's expectations and end needs.",
            image_url: "/images/customer-support.svg"
        },
        {
            title: "Client centric development ",
            description: "we craft the clients need on web to tailor the solutions and enhance growth of the businesses.",
            image_url: "/images/client-centric.svg"
        },
        {
            title: "Quality deliverance",
            description: "we believe in delivering quality products to our clients by assuring all thier projects specifications at the best industry competative price.",
            image_url: "/images/icon.svg"
        },
    ]

    return (
        <>
            <section className="py-20 md:py-28 px-5">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="max-w-full md:max-w-xl text-center">
                            <div className="overflow-hidden">
                                <Fade triggerOnce direction="up" delay={500}><h1 className="text-4xl font-bold mb-1">Welcome To Interlef</h1></Fade>
                            </div>
                            <Divider></Divider>
                            <div className="overflow-hidden">
                               <Fade triggerOnce direction="down" delay={500}> <p className="mt-4">Your Trusted Web Design & Development Partner For Your Business, We bring real world solutions to each client’s problem through a deep understanding of their market, product, and vision.</p></Fade>
                            </div>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-3 place-items-center mt-14">
                        {
                            featureList.map((feature, index) => {
                                return (
                                    // <ScrollAnimation key={index} animateIn="fadeInUp" animateOut="fadeOut" animateDelay={index*0.2} animateDuration={1.5}>
                                   <div className="overflow-hidden" key={index}>
                                     <Fade triggerOnce direction="up" delay={(index) * 200}><CompanyFeatureCard image_url={feature.image_url} title={feature.title} description={feature.description}></CompanyFeatureCard></Fade>
                                   </div>
                                    // </ScrollAnimation>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default WelcomeSection;