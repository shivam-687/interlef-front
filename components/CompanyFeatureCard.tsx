import Image from 'next/image';


export type CompanyFeatureCardProps = {
    title: string;
    description: string;
    image_url: string;
}

const CompanyFeatureCard = ({ title, description, image_url }: CompanyFeatureCardProps) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-sm py-8 group mt-8 md:mt-0">
                <div className=' w-[116px] h-[116px] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center'>
                    <div className="w-28 h-28 rounded-full bg-indigo-50 flex items-center justify-center group-hover:">
                        <Image src={image_url} width="60" height={60} alt=""></Image>
                    </div>
                </div>

                <div className="content mt-7 text-center">
                    <h3 className="text-xl font-bold text-ellipsis mb-3">{title}</h3>
                    <p className=""> {description}</p>
                </div>
            </div>
        </>
    );
}


export default CompanyFeatureCard;