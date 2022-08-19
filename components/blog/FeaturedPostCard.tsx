import Image from "next/image";

export type FeaturedPostCardProps = {
    title: string;
    cover: string;
    date: string;
    des: string;
    author: string;
    authorImg: string;
    readingTime: string;
}



const FeaturedPostCard = ({ title, cover, date, des, author, authorImg, readingTime }: FeaturedPostCardProps) => {
    return (
        <div className="grid grid-cols-5 border border-gray-300 shadow-primary/20 rounded-lg overflow-hidden md:mb-4 p-3">
            <div className="col-span-1 lg:col-span-2 bg-no-repeat bg-center bg-cover rounded-lg" style={{ backgroundImage: `url(${cover})`}}>

            </div>
            <div className=" col-span-4 lg:col-span-3 ml-4">
                <h1 className="text-base md:text-xl font-bold">{title}</h1>
                <p className="text-sm mt-2">{des}</p>

                <div className="mt-5 flex">
                    <div className="avatar mr-3">
                        <div className="w-7 h-7 rounded-full shadow shadow-primary/20 ring-2 ring-gray-300">
                            <Image src={authorImg} alt="" width={100} height={100}/>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-primary font-bold">{author}</p>
                        <p className="text-xs text-black/60 line-clamp-3">{date} <span className="ml-2">{readingTime}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPostCard;