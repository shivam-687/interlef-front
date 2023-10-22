import Image from "next/image";

export type PortfolioCardProp = {
    title: string,
    image: string,
    link?: string,
    caseStudyLink?: string
}

const PortfolioCard = ({ title, image, link, caseStudyLink }: PortfolioCardProp) => {
    return (
        <div className="relative group rounded-lg overflow-hidden border-2 w-full border-transparent shadow-lg hover:shadow-none shadow-primary/20 group hover:border-primary  transition duration-300 aspect-[16/9]">
            {/* <Image src={image} alt="" width="400" height={400}></Image> */}
            <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
            {/* <div className="dog-image aspect-[4/3] relative w-full rounded-xl overflow-hidden">
                <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
            </div> */}

            <div className="absolute w-full flex justify-center top-0 left-0">
                <div className="py-1 px-2 rounded-br-lg rounded-bl-lg text-lg font-bold bg-primary/10 backdrop-blur border-b border-primary">
                {title}
                </div>
            </div>

            <div className="absolute left-0 bottom-0 p-1 flex gap-3 items-center">
                <a href={`${link ? link : '#'}`} target="blank" className="
                rounded 
                bg-primary/10 
                w-max
                px-4 py-2 
                border 
                border-primary 
                transition-all
                bg-primary text-white from-primary to-secondary duration-300 ease-in-out
                ">
                    View Site
                </a>

                {
                    caseStudyLink &&
                    <a href={`${caseStudyLink}`} className="
                rounded 
                px-4 py-2 
                border 
                border-yellow-600 
                transition-all
                bg-yellow-400  from-primary to-secondary duration-300 ease-in-out
                ">
                    Case Study
                </a>
                }

            </div>
        </div>
    );
}

export default PortfolioCard;