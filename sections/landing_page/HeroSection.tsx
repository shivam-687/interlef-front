import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import Wave from "../../components/Wave";
// import Svg from '../../public/images/shapes/shape-2.svg';
// import { ReactComponent as Svg } from '../../public/images/shapes/shape-2.svg';

const HeroSection = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-secondary/10 min-h-[calc(100vh-200px)] flex items-center py-[100px] relative">
                <div className="container px-2 md:px-5 mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center">
                    <div className="flex items-center justify-center ">
                        <div className="content max-w-lg text-center lg:text-left">
                            <span className="bg-primary inline-block text-white mb-4 p-1 text-base rounded">Interlef Web Solutions</span>
                            <h1 className="text-4xl lg:text-5xl font-black uppercase">A <span className="text-primary">Digital Agency</span> <br /> Focused On Web</h1>
                            <p className="text-base leading-tight text-center md:text-left mt-3">
                                We are creative team of designers, developers, and strategists, building elevated websites in the heart of India.
                            </p>
                            <div className="hero-btns mt-10 flex items-center justify-center lg:justify-start gap-2">
                                <button className="btn btn-md btn-primary">Get Quote</button>
                                <button className="btn gap-2 btn-success">
                                    <BsWhatsapp className="text-white text-xl" />
                                    Whatsapp
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image mt-10">
                        <div className="block md:hidden"><Image className="" width={500} height="500" src="/images/Website Creator-bro-animated.svg" alt="" /></div>
                        <div className="hidden md:block"><Image className="" width={700} height="700" src="/images/Website Creator-bro-animated.svg" alt="" /></div>
                        {/* <div className="hidden md:block"><Image className="" width={700} height="700" src="/images/Website Creator-bro-animated.svg" alt="" /></div> */}

                        {/* <video src="/images/Website Creator-bro.mp4" autoPlay={true} loop={true} controls={true}></video> */}
                      
                    </div>
                </div>

                <Wave></Wave>
            </div>
        </>
    );
}

export default HeroSection;