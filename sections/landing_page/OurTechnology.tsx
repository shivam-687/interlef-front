import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Divider from "../../components/Divider";
import TechnologyChip from "../../components/TechnologyChip";


const OurTechnology = () => {

    const image = "/images/tech_sack.svg"
    const techList = [
        {
            title: "React Js",
            image: "/images/icon/react.svg"
        },
        {
            title: "Next Js",
            image: "/images/icon/nextjs.svg"
        },
        {
            title: "Node Js",
            image: "/images/icon/nodejs.svg"
        },
        {
            title: "Angular",
            image: "/images/icon/angular.svg"
        },

        {
            title: "Typescript",
            image: "/images/icon/typescript.svg"
        },
        {
            title: "Html5",
            image: "/images/icon/html.svg"
        },
        {
            title: "Css3",
            image: "/images/icon/css.svg"
        },
        {
            title: "Git",
            image: "/images/icon/git.svg"
        },
        {
            title: "Php",
            image: "/images/icon/php.svg"
        },
        {
            title: "Wordpress",
            image: "/images/icon/wordpress.svg"
        },
        {
            title: "Woo-com",
            image: "/images/icon/woo.svg"
        },
        {
            title: "Shopify",
            image: "/images/icon/shopify.svg"
        }
    ]


    return (
        <section className="py-20 px-5 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">

                <div className=" max-w-xl">
                    <div className="overflow-hidden">
                    <div className="overflow-hidden"><Fade triggerOnce direction="up" delay={500}><h1 className="text-4xl font-bold text-center lg:text-left">Our Tech Stack</h1></Fade></div>
                        <Divider></Divider>
                        <div className="flex items-center justify-center my-8 lg:hidden">
                            <div className="">
                                {/* <Image src={image} alt="" width={700} height={500}></Image> */}
                                <Fade triggerOnce delay={500} duration={2000}><Image src={image} alt="" width={700} height={700}></Image></Fade>
                            </div>
                        </div>
                        <div className="overflow-hidden"><Fade triggerOnce direction="down" delay={500}>
                        <p className="mt-2">Our work on the project includes UI/UX design, software development, testing, support, and maintenance. We build software in time, applying the latest technologies that optimize our work processes.</p>
                        </Fade></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                        {
                            techList.map((tech, index) => {
                                return (
                                    <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                                        <TechnologyChip  title={tech.title} image={tech.image}></TechnologyChip>
                                    </Fade>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image src={image} alt="" width={700} height={500}></Image>
                </div>
            </div>
        </section>
    );
}

export default OurTechnology;