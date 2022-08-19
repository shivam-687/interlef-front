import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';

export type PostCardProps = {
    title: string;
    cover: string;
    date: string;
    des: string;
    author: string;
    authorImg: string;
    readingTime: string;
}



const PostCard = ({ title, cover, date, des, author, authorImg, readingTime }: PostCardProps) => {
    return (
        <>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-md shadow-primary/20">
                <div className=' relative aspect-video bg-center bg-cover bg-no-repeat'>
                    {/* <Image src={cover} alt="" width={400} height={250} layout="responsive"></Image> */}
                    <Image src={cover} alt="" layout="fill" objectFit="cover"></Image>
                </div>
                <div className="content p-3 ">
                    <h1 className="text-md md:text-lg font-bold ">{title}</h1>
                    <p className='text-ellipsis text-sm line-clamp-3'>
                        {des}
                    </p>
                    <a href="#" className="text-base text-gray-700 hover:underline inline-flex items-center mt-4">Read More <span className="text-primary ml-2 inline-block"><FiArrowUpRight className='text-lg' /></span></a>
                </div>
            </div>
        </>
    );
}


export default PostCard;