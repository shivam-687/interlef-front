import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import Wave from "../../components/Wave";
import ScrollTo from "../../components/ScrollTo";
import ScrollAnimation from "../../components/ScrollAnimation";



const HeroSection = () => {


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-secondary/10 min-h-[calc(100vh-200px)] flex items-center py-[100px] relative">

                <div className="  left-0 top-0 absolute w-0 h-0 border-t-[100px] md:border-t-[200px] border-t-primary border-r-[100px] md:border-r-[200px] border-r-transparent"></div>
                {/* <div className="  right-0 bottom-0 absolute w-0 h-0 border-t-[100px] md:border-t-[200px] border-t-transparent border-r-[100px] md:border-r-[200px] border-r-primary"></div> */}

                <div className="container px-2 md:px-5 mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center">
                    <div className="flex items-center justify-center ">
                        <div className="content max-w-lg text-center lg:text-left">
                            <span className="bg-primary inline-block text-white mb-4 p-1 text-base rounded">Interlef Web Solutions</span>
                            <ScrollAnimation animateIn="fadeIn">
                                <h1 className="text-4xl lg:text-5xl font-black uppercase">A <span className="text-primary">Digital Agency</span> <br /> Focused On Web</h1>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn" animateDelay={.3} ><p className="text-base leading-tight text-center md:text-left mt-3">
                                We are creative team of designers, developers, and strategists, building elevated websites from the heart of India.
                            </p></ScrollAnimation>
                            <div className="hero-btns mt-10 flex items-center justify-center lg:justify-start gap-2">
                                <ScrollTo name="contact"><button className="btn btn-md btn-primary">Get Quote</button></ScrollTo>
                                <a href="https://wa.me/7984226239" target="_blank" rel="noreferrer" className="btn gap-2 btn-success">
                                    <BsWhatsapp className="text-white text-xl" />
                                    Whatsapp
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image mt-10">
                        <div className="block md:hidden"><Image className="" width={500} height="500" src="/images/Website Creator-bro-animated.svg" alt="In illustration A boy is doing web development." /></div>
                        <div className="hidden md:block"><Image className="" width={700} height="700" src="/images/Website Creator-bro-animated.svg" alt="In illustration A boy is doing web development." /></div>
                      
                    </div>
                </div>

                <Wave></Wave>
            </div>
        </>
    );
}

export default HeroSection;