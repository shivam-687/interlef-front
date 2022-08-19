import Image from "next/image";
import Wave from "../../components/Wave";

const BlogHero = () => {
    return (
        <section className="bg-primary/5 max-h-full lg:max-h-[calc(100vh-30vh)] relative">
            <div className="container mx-auto px-5 py-20 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" flex justify-center flex-col text-center lg:text-left items-center lg:items-start">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary w-full uppercase">Interlef Blog</h1>
                    <p className="text-base text-primary mt-1">Web design that converts is a foundation of our business.</p>

                    <div className="mt-5 form-control w-full max-w-md ">
                        
                            <div className="flex w-full items-center">
                                <input type="text" placeholder="ex: jhondoe@example.com" className="input input-bordered input-primary input-sm md:input-md w-full max-w-md mr-3" />
                                <button className="btn btn-primary btn-sm md:btn-md mr-3">SUBSCRIBE</button>
                            </div>
                            <label className="label">
                                <span className="label-text-alt">We care about your data.</span>
                            </label>
                       
                    </div>
                </div>

                <div className="h-full">
                    <Image src={'/images/blog/hero-img.svg'} alt="" width={700} height={500}></Image>
                </div>

                
            </div>
        </div>
        </section>
    );
}

export default BlogHero;