import { Fade } from "react-awesome-reveal";
import Divider from "../../components/Divider";
import ScrollTo from "../../components/ScrollTo";
import ServiceCard from "../../components/ServiceCard";


const OurServices = () => {

    const servicesList = [
        {
            title: "Website Design",
            description: "Need a staggering web page that blows your customer’s minds? As an master web plan administrations company, our group of master site creators have effectively made hundreds of websites that charm your gathering of people. Our web plan administrations incorporate WordPress, Shopify, BigCommerce, site format plan, and more. In this way, we make the idealize site that primes your clients for transformations as a custom web plan company. So let’s bring your dream site to reality.",
            image: "/images/services/website_design.svg"
        },
        {
            title: "E-Commerce Development",
            description: "Make your eCommerce location a deals magnet. As an master eCommerce site advancement office, ready to assist you with site format plan, Shopify site plan, Shopify, BigCommerce web plan and advancement, and more. We make versatile and web eCommerce stores that not as it were give agreeable shopping encounters but moreover decrease your deals cycle, increasing your eCommerce change rate. To raise your trade benefits, get a customized arrangement outlined to coordinate your needs.",
            image: "/images/services/ecommerce.svg"
        },
        {
            title: "Custom Web App Development",
            description: "Our Custom Web Application plan is for businesses that need a more advanced website or web application. Whether you need a custom admin panel, a startup web app, or a complex web platform built from scratch, we have the expertise to bring your vision to life. We use modern and cutting-edge technologies to build web applications that are robust, scalable, and high-performance. Our team of experienced developers will work closely with you to create a tailored solution that meets your unique needs.",
            image: "/images/services/cms-development.svg"
        },

        {
            title: "IT Consulting",
            description: "Our IT Consulting service is designed to help businesses make the most of their technology investments. We provide expert guidance and advice on a range of IT-related issues, including cybersecurity, software selection, network design, and more. Whether you're looking to improve your IT infrastructure, streamline your operations, or reduce your IT costs, our team of experienced consultants can help. We'll work with you to understand your business needs and goals, and develop a customized IT strategy that meets your unique requirements. ",
            image: "/images/services/api-integration.svg"
        }
    ]

    return (
        <>
            <section className="py-20 px-5 container mx-auto">
                <div className="w-full flex items-center justify-center">
                    <div className="text-center max-w-md w-full overflow-hidden">
                        <Fade triggerOnce direction="up" delay={500}><h2 className="text-4xl font-bold mb-1"> <span className="text-3xl">&#128718;</span> Our Services</h2></Fade>
                        <Divider></Divider>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
                    {
                        servicesList.map((service, index) => {
                            return (
                                <div className="overflow-hidden p-2"  key={index}>
                                    <Fade triggerOnce direction="up"><ServiceCard image={service.image} title={service.title} description={service.description}></ServiceCard></Fade>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="mt-10 flex items-center justify-center overflow-hidden">
                    <div className="overflow-hidden">
                    <Fade triggerOnce direction="left"><ScrollTo name="contact"><button className="btn btn-primary btn-lg">Get Quote</button></ScrollTo></Fade>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurServices;