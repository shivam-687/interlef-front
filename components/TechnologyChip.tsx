import Image from "next/image";

export type TechnologyChipProps = {
    title: string;
    image: string;
}


const TechnologyChip = ({ title, image }: TechnologyChipProps) => {
    return (

        <div className="flex items-center p-4">
            <div className=" w-12 h-12 rounded shadow-md shadow-primary/20 mr-2 grid place-items-center p-1">
                <Image src={image} alt="" width={40} height="40"></Image>
            </div>
            <h3 className="text-base font-bold">{title}</h3>
        </div>
    );
}

export default TechnologyChip;