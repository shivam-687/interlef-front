import { nanoid } from "nanoid";
import Image from "next/image";
import Divider from "../../components/Divider";


const WhyOurAgency = () => {

    const image = "/images/woa_image.svg";
    const woaList = [
        {
            title: "High Quality Services",
            description: "We offer High quality benefit to clients with a wide extend of reliable remarkable administrations at all stages of the commerce relationship."
        },
        {
            title: "Scalable Solutions",
            description: "Our master web engineers can offer assistance design your web applications to handle your site and versatile applications to require on the energetic activity loads."
        },
        {
            title: "Innovative Solutions",
            description: "We have a team who thinks innovativly and creatively each time, never repeats same design."
        },
        {
            title: "Focus On Details",
            description: "We consider even the tiniest details to achieve maximum quality and provide the best possible result for our clients."
        },
        {
            title: "Lower OpEx",
            description: "Interlef in-house group of master web engineers and creators can offer assistance construct vigorous, secure, and versatile applications utilizing progressed innovations and computer program that essentially decrease your operational costs."
        }
    ]

    return (
        <section className="py-20  px-5">
            <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="w-full flex flex-col  items-center">
                    <div className="block lg:hidden mb-4">
                        <h1 className="text-4xl font-bold mb-1">Why Our Agency</h1>
                        <Divider></Divider>
                    </div>
                    <Image src={image} alt="" width={700} height={700}></Image>
                </div>

                <div className="w-full flex flex-col justify-center">
                    <div className="hidden lg:block mb-4">
                        <h1 className="text-4xl font-bold mb-1">Why Our Agency</h1>
                        <Divider></Divider>
                    </div>

                    <div className="">
                        {
                            woaList.map((woa, index) => {
                                return (
                                    
                                        <div key={`${nanoid()}_${index}`} className="w-full flex mb-3 rounded-md shadow-md py-2 shadow-primary/20">
                                            <div className="flex-grow-0 flex items-start justify-center p-2">
                                                <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="text-xl font-bold">{woa.title}</h3>
                                                <p className="">{woa.description}</p>
                                            </div>
                                        </div>
                                    
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );

}

export default WhyOurAgency;