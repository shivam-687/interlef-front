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
            title: "Custom CMS Development",
            description: "Need custom arrangements for your brand? Interlef Web Solutions can assist you with high-performing, secure, and instinctive web arrangements for your CMS stage that progress your trade forms and serve your users globally. Whether you’re seeking out for CMS advancement administrations, offer assistance with CMS integrative, CMS application advancement, CMS relocations, CMS plugin improvement, or CMS back and upkeep, we’ve got you secured. So let us rearrange your complex commerce workflows.",
            image: "/images/services/cms-development.svg"
        },

        {
            title: "API Integration",
            description: "Interlef has significant experience in the development and integration of APIs, together with web applications. This allows us to deliver APIs and their integration without disrupting your company's operations. We will analyze your current processes and architecture, help you develop a strategy and a plan, and identify and eliminate issues. With extensive experience, we will also help you make the right choice of API development and API integration solutions to meet your needs.",
            image: "/images/services/api-integration.svg"
        }
    ]

    return (
        <>
            <section className="py-20 px-5 container mx-auto">
                <div className="w-full flex items-center justify-center">
                    <div className="text-center max-w-md w-full overflow-hidden">
                        <Fade triggerOnce direction="up" delay={500}><h1 className="text-4xl font-bold mb-1"> <span className="text-3xl">&#128718;</span> Our Services</h1></Fade>
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