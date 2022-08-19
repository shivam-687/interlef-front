import Divider from "../../components/Divider";
import ServiceCard from "../../components/ServiceCard";


const OurServices = () => {

    const servicesList = [
        {
            title: "Website Design",
            description: "Need a staggering web page that blows your customer’s minds? As an master web plan administrations company, our group of master site creators have effectively made hundreds of websites that charm your gathering of people. Our web plan administrations incorporate WordPress web plan, Shopify site plan, BigCommerce web plan, site format plan, and more. In this way, we make the idealize site that primes your clients for transformations as a custom web plan company. So let’s bring your dream site to reality.",
            image: "/images/services/website_design.svg"
        },
        {
            title: "E-Commerce Development",
            description: "Make your eCommerce location a deals magnet. As an master eCommerce site advancement office, ready to assist you with site format plan, Shopify site plan, Shopify development, BigCommerce web plan and advancement, and more. We make versatile and web eCommerce stores that not as it were give agreeable shopping encounters but moreover decrease your deals cycle, increasing your eCommerce change rate. To raise your trade benefits, get a customized arrangement outlined to coordinate your needs.",
            image: "/images/services/website_design.svg"
        },
        {
            title: "Custom CMS Development",
            description: "Need custom arrangements for your brand? Interlef Web Solutions can assist you with high-performing, secure, and instinctive web arrangements for your CMS stage that progress your trade forms and serve your users globally. Whether you’re seeking out for CMS advancement administrations, offer assistance with CMS integrative, CMS application advancement, CMS relocations, CMS plugin improvement, or CMS back and upkeep, we’ve got you secured. So let us rearrange your complex commerce workflows.",
            image: "/images/services/website_design.svg"
        },

        {
            title: "API Integration",
            description: "Need custom arrangements for your brand? Interlef Web Solutions can assist you with high-performing, secure, and instinctive web arrangements for your CMS stage that progress your trade forms and serve your users globally. Whether you’re seeking out for CMS advancement administrations, offer assistance with CMS integrative, CMS application advancement, CMS relocations, CMS plugin improvement, or CMS back and upkeep, we’ve got you secured. So let us rearrange your complex commerce workflows.",
            image: "/images/services/website_design.svg"
        }
    ]

    return (
        <>
            <section className="py-20 px-5 container mx-auto">
                <div className="w-full flex items-center justify-center">
                    <div className="text-center max-w-md w-full">
                    <h1 className="text-4xl font-bold mb-1">Our Services</h1>
                    <Divider></Divider>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
                    {
                        servicesList.map((service, index) => {
                            return (
                                <ServiceCard key={index} image={service.image} title={service.title} description={service.description}></ServiceCard>
                            );
                        })
                    }
                </div>

                <div className="mt-10 flex items-center justify-center">
                    <button className="btn btn-primary btn-lg">Get Quote</button>
                </div>
            </section>
        </>
    );
}

export default OurServices;