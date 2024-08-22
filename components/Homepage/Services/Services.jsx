"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const StorySlider = ({ data }) => {
  return (
    <>
    <div className="container position-relative pinkbg rounded  d-lg-block d-md-block d-none service_slider">
      <div className="d-flex flex-column justify-content-center align-items-center py-5 ">
        <h2 className="mt-4 ">{data?.attributes?.Heading}</h2>
        <h6 className="">{data?.attributes?.HeadingDescription}</h6>
      </div>
      <div className="flex_property position-absolute slider_top">
        <div className="mt-5 col-lg-10 d-flex ">
          <div className="container storySlider1 mt-5 ">
            <Swiper
              className=""
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              initialSlide={2}
              loop={true}
              slidesPerView={'auto'}  
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2,
                slideShadows: true, 
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              // breakpoints={{
              //     576: {
              //         slidesPerView: 1,
              //     },
              //     768: {
              //         slidesPerView: 2,
              //     },
              //     992: {
              //         slidesPerView: 3,
              //     },
              //     1200: {
              //         slidesPerView: 4,
              //     },
              // }}
            >
              {data?.attributes?.cards?.data?.map((item) => (
                <SwiperSlide className="test" key={item.id}>
                  <div className="position-relative">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.cardBackgroundimg?.data?.attributes
                          ?.formats?.small?.url
                      }
                      alt={item?.attributes?.title || "Image"}
                      className="img-fluid rounded cursor position-relative"
                    />
                  

                   
                    <div
                      className="position-absolute d-flex flex-column justify-content-center align-items-center col-md-5  text-white col-lg-6  top-0"
                      style={{ height:"100%" , left:"7%"}}
                    >
                        <div>
                      <Markdown
                        className="gap-2 mt-4 "
                        remarkPlugins={[remarkGfm]}
                      >
                        {item?.attributes?.card_content}
                      </Markdown>
                      <Link href={item?.attributes?.card_button[0]?.url}>
                        <button
                          className="fs-6 rounded-pill bg-white border-0 px-3 p-1 "
                          style={{ color: `${item?.attributes?.card_button[0]?.cssclass}` }}
                        >
                          {item?.attributes?.card_button[0]?.ButtonText}
                        </button>{" "}
                      </Link>
                      </div>
                    </div>
                    
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controler">
                <div
                  style={{ marginLeft: "2rem" }}
                  className="swiper-button-prev  slider-arrow text-white font14"
                >
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div
                  style={{ marginRight: "2rem" }}
                  className="swiper-button-next slider-arrow text-white font14"
                >
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>


      
    </div>

    <div className="container position-relative pinkbg rounded d-lg-none d-md-none d-block service_slider">
      <div className="d-flex flex-column justify-content-center align-items-center py-5 text-center">
        <h2 className="mt-4 ">{data?.attributes?.Heading}</h2>
        <h6 className="">{data?.attributes?.HeadingDescription}</h6>
      </div>
      <div className="flex_property position-absolute slider_top ">
        <div className="mt-5 col-lg-10 d-flex ">
          <div className="container  mt-5 ">
            <Swiper
              className=""
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Navigation]}
            >
              {data?.attributes?.cards?.data?.map((item) => (
                <SwiperSlide className="test mt-4" key={item.id}>
                  <div className="position-relative">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.cardBackgroundmobimg?.data?.attributes
                          ?.formats?.small?.url
                      }
                      alt={item?.attributes?.title || "Image"}
                      className="img-fluid rounded cursor position-relative"
                    />
                  

                   
                    <div
                      className="position-absolute d-flex p-4 flex-column justify-content-center align-items-center col-md-5  text-white col-lg-6  top-0"
                      style={{ height:"100%"}}
                    >
                        <div>
                      <Markdown
                        className="gap-2 mt-4 service_content"
                        remarkPlugins={[remarkGfm]}
                      >
                        {item?.attributes?.card_content}
                      </Markdown>
                      <Link href={item?.attributes?.card_button[0]?.url}>
                        <button
                          className="fs-6 rounded-pill bg-white border-0 px-3 p-1 "
                          style={{ color: `${item?.attributes?.card_button[0]?.cssclass}` }}
                        >
                          {item?.attributes?.card_button[0]?.ButtonText}
                        </button>{" "}
                      </Link>
                      </div>
                    </div>
                    
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controler">
                <div
                  className="swiper-button-prev service_slide_icon_left slider-arrow text-white font14" 
                >
                  <ion-icon name="arrow-back-outline" style={{fontSize:"10px"}}> </ion-icon>
                </div>
                <div
                  className="swiper-button-next service_slide_icon_right slider-arrow text-white font14"
                >
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>


      
    </div>
    </>
  );
};

export default StorySlider;
