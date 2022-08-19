import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

const AttentionCard = () => {
    return (
        <section className="pt-20 pb-20 lg:pt-40 px-5 container mx-auto flex items-center justify-center overflow-hidden ">
            <div className="rounded-lg bg-gradient-to-b from-primary to-[#331782] max-w-screen-xl w-full grid gap-5 grid-1 lg:grid-cols-5 shadow-xl shadow-primary/30 p-5 text-white">
                <div className="content lg:col-span-3">
                    <h1 className="text-4xl md:text-5xl lg:6xl font-bold mb-3">Have a really great idea ?</h1>
                    <p className="text-lg ">Did you know that a poor-performing app can taken a toll you 90% of your portable clients? In today’s times, clients are acclimated to great, responsive web plans and applications, which is why they’re restless. Too, it as it were takes clients 50 milliseconds to create an supposition approximately your brand through your site. Here’s how our administrations as an expert website improvement company can assist you develop your commerce.</p>

                    <div className="btns gap-5 mt-10 flex ">
                        <button className="btn btn-secondary">GET QUOTE</button>
                        <button className="btn gap-2 btn-success">
                            <BsWhatsapp className="text-white text-xl" />
                            Whatsapp
                        </button>
                    </div>
                </div>
                <div className="object lg:col-start-4 lg:col-span-5 w-full ">
                    <div className="bg-white w-full h-full rounded-lg relative">
                        <div className="lg:scale-110 lg:-translate-x-8 lg:-translate-y-8 lg:absolute lg:-left-5 lg:-bottom-5 hidden lg:block">
                            <Image src="/images/mockup.png" alt="" width={600} height={500}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AttentionCard;