import Image from 'next/image';


export type ServiceCardProps = {
    title: string;
    description: string;
    image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center py-8 group mt-8 md:mt-0 p-5 rounded-lg shadow-md shadow-primary/20 group backdrop-blur-md bg-white hover:bg-primary hover:text-white border-2 border-transparent hover:border-secondary transition duration-300 ">
                <div className=' flex  items-start justify-center mr-4 h-full mb-5 lg:mb-0'>
                    <div className="w-28 h-28 rounded-full bg-secondary/10 flex items-center justify-center border-2 border-secondary">
                        <Image src={image} width="60" height={60} alt=""></Image>
                    </div>
                </div>

                <div className="content">
                    <h3 className="text-xl font-bold text-ellipsis mb-1 text-center lg:text-left">{title}</h3>
                    <p className="text-sm text-justify"> {description}</p>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;