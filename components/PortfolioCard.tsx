import Image from "next/image";

export type PortfolioCardProp = {
    title: string,
    image: string,
    link?: string
}

const PortfolioCard = ({ title, image, link }: PortfolioCardProp) => {
    return (
        <a href={`${link ? link : '#'}`} className="relative group rounded-lg overflow-hidden border-2 w-full border-transparent shadow-lg hover:shadow-none shadow-primary/20 group hover:border-primary  transition duration-300 aspect-[4/3]">
            {/* <Image src={image} alt="" width="400" height={400}></Image> */}
            <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
            {/* <div className="dog-image aspect-[4/3] relative w-full rounded-xl overflow-hidden">
                <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
            </div> */}

            <div className="
            absolute 
            left-1 
            bottom-1 
            rounded 
            bg-primary/10 
            px-4 py-3 
            backdrop-blur 
            border 
            border-primary 
            transition-all
            group-hover:bg-primary group-hover:text-white from-primary to-secondary duration-300 ease-in-out
            ">
                <h3 className="3xl font-bold">{title}</h3>
            </div>
        </a>
    );
}

export default PortfolioCard;