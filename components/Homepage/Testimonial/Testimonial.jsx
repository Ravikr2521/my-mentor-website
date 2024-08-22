"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import "swiper/components/navigation/navigation.min.css";
// SwiperCore.use([Navigation]);

const Testimonial = ({ Testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="p-lg-0 container p-md-0">
            <div className="p-lg-4 p-4 position-relative" style={{ backgroundColor: "#1B1E2C" }}>

                {/* <div className="banner_overlay"></div> */}
                <div className="text-center pt-4 ">
                    <h2 className="h4" style={{ color: "#F8FAFB" }}>
                        {Testimonials.attributes.Heading}
                    </h2>
                </div>
                <div className="col-12 d-flex  ">

                    <Swiper
                        // breakpoints={{
                        //     576: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 10,
                        //     },
                        //     768: {
                        //         slidesPerView: 2,
                        //         spaceBetween: 10,
                        //     },
                        //     992: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 10,
                        //     },
                        //     1200: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 10,
                        //     },
                        // }}
                        navigation={true}
                        //  loop={true}
                        //  centeredSlides={true}
                        modules={[Navigation]}
                        className="testimonial_swiper"
                        onSlideChange={handleSlideChange}

                    >
                        {Testimonials?.attributes?.cards?.data.map(
                            (testimonial, ind) => (
                                <SwiperSlide className="" key={ind}>
                                <div className="d-flex justify-content-center align-items-center">
                                        <div
                                            className="flex_property col-lg-8  h-100 text-center"
                                            style={{
                                                color: "#F8FAFB",
                                                filter: isMobile || activeIndex + 1 === ind ? "none" : ")",
                                            }}
                                        >

                                            <div>
                                                <p className="m-0 fontsize14 ">
                                                    {testimonial.attributes?.card_content}
                                                </p>
                                                <div className="mt-3">
                                                    {Array.from({ length: 5 }).map((_, index) => {
                                                        return <img
                                                        key={index}
                                                            src="/img/star.png"
                                                            alt="testimonial"
                                                            width={14}
                                                        />;
                                                    })}
                                                    <h6 className="mt-2 m-0">
                                                        {testimonial.attributes?.Heading}
                                                    </h6>
                                                    <p className="m-0 fontsize15">
                                                        {testimonial.attributes?.SubHeading}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
