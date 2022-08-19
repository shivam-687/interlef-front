import CompanyFeatureCard from "../../components/CompanyFeatureCard";
import Divider from "../../components/Divider";


const WelcomeSection = () => {

    const featureList = [
        {
            title: "Exellent Support",
            description: "We are always there to assst our clients in every possible way to meet client's expectations and end needs.",
            image_url: "/images/icon.svg"
        },
        {
            title: "Client centric development ",
            description: "we craft the clients need on web to tailor the solutions and enhance growth of the businesses.",
            image_url: "/images/icon.svg"
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
                            <h1 className="text-4xl font-bold mb-1">Welcome To Interlef</h1>
                            <Divider></Divider>
                            <p className="mt-4">Your Trusted Web Design & Development Partner For Your Business, We bring real world solutions to each client’s problem through a deep understanding of their market, product, and vision.</p>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-3 place-items-center mt-14">
                        {
                            featureList.map((feature, index) => {
                                return(
                                    <CompanyFeatureCard image_url={feature.image_url} title={feature.title} description={feature.description} key={index}></CompanyFeatureCard>
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