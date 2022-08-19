import { INSPECT_MAX_BYTES } from "buffer";
import { nanoid } from "nanoid";
import { Children } from "react";
import Slider, { Settings } from "react-slick";
import Divider from "../../components/Divider";
import ReviewCard from "../../components/ReviewCard";


const Review = () => {

    const ReviewList = [
        {
            name: "John Doe",
            subtitle: "CEO, Google",
            image: "/images/user-image.jpg",
            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },
        {
            name: "John Doe",
            subtitle: "CEO, Google",
            image: "/images/user-image.jpg",
            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },
        {
            name: "John Doe",
            subtitle: "CEO, Google",
            image: "/images/user-image.jpg",
            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },
        {
            name: "John Doe",
            subtitle: "CEO, Google",
            image: "/images/user-image.jpg",
            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },

    ];

    var settings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,

        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             // initialSlide: 1
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };

    return (
        <section className="py-20 px-5 container mx-auto">
            <div className="header text-center flex item-center justify-center">
                <div className="max-w-lg w-full">
                    <h1 className="text-4xl font-semibold text-center">How They Are Setisfied</h1>
                    <Divider></Divider>
                </div>
            </div>

            <div className="reviews mx-auto">
                <div className="mt-10 mx-auto max-w-2xl">
                    <Slider {...settings}>
                        {
                            ReviewList.map((item, index) => {
                                return (
                                    <div key={`${nanoid(5)}_${index}`}>
                                        <div className="flex items-center justify-center p-3" >
                                            <ReviewCard name={item.name} image={item.image} subtitle={item.subtitle}>{item.children}</ReviewCard>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>


        </section>
    );
}

export default Review;