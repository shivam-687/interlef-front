import Image from "next/image";

export type ReviewCardProps = {
    name: string;
    subtitle?: string;
    image: string;
    children?: React.ReactNode;
}


const ReviewCard = ({ name, subtitle, image, children }: ReviewCardProps) => {
    return (
        <div className="flex flex-col md:flex-row p-5 min-h-64 shadow-lg shadow-primary/20 max-w-xl w-full rounded-lg">
            <div className="flex-grow-0 flex flex-col h-full justify-center items-start mr-3">
                <div className="inline-block min-w-max">
                    <Image src={image} alt="" width="90" height="90"></Image>
                </div>
            </div>
            <div className="content flex-grow-1">
                <p className="mb-4">{children}</p>
                <div>
                    <h3 className="text-base font-bold">{name}</h3>
                    <p className="text-xs text-opacity-70">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;