import Image from "next/image";

export type PortfolioCardProp = {
    title: string,
    image: string,
}

const PortfolioCard = ({ title, image }: PortfolioCardProp) => {
    return (
        <div className="relative group rounded-lg overflow-hidden border-2 border-transparent shadow-lg shadow-primary/20 group hover:border-primary transition duration-300 w-fit">
            <Image src={image} alt="" width="400" height={400}></Image>

            <div className="
            absolute 
            left-0 
            bottom-0 
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
        </div>
    );
}

export default PortfolioCard;