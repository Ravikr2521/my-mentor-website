"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loader from "@/components/Loader";
const Countries = ({ section_four }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loader, setLoader] = useState(false);
  const pathname = usePathname();

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handleLoader = () => {
    setLoader(true);
  };

  useEffect(() => {
    setLoader(false);
  }, [pathname]);

  return (
    <div>
      {loader ? <Loader isLoading={loader} /> : null}

      <div className="container mb-4 ">
        <div className="">
          <div className="d-flex justify-content-center align-items-center  custom_margin">
            <div className="col-lg-8 mt-lg-0 mt-5 text-center  mb-5">
              <h2 className="h1 mt-4">{section_four?.attributes.Heading}</h2>
              {/* <h3 className="h5">{section_four?.LineTwo}</h3> */}
            </div>
          </div>

          <div className="countries-list">
            <Swiper
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={30}
              autoplay={{
                delay: 100,
              }}
              pagination={{
                dynamicBullets: true,
                clickable:true,
              }}
              modules={[Pagination]}
              className="swiper"
              style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": " #808080",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-width": "16px",
                "--swiper-pagination-bullet-height": "16px",
                " --swiper-navigation-size": "20px",
              }}
              onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
            >
              {/* {section_four?.attributes?.cards?.data?.map((country, index) => (
                <SwiperSlide key={index}>
                  <div className="card rounded position-relative">
                    <div className="country_img">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_API_URL +
                          country.attributes?.cardBackgroundimg?.data?.attributes?.formats?.small?.url
                        }
                        className="img-fluid h-auto"
                        style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        alt="..."
                      />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between h-auto position-absolute ">
                      <div>
                        <img
                          src={
                            process.env.NEXT_PUBLIC_STRAPI_API_URL +
                            country.attributes?.frontimage?.data?.attributes?.url
                          }
                          className="flag_img"
                        />
                      </div>
                      <div className="mt-3">
                       
                        <p className="card-text text-justify textgrey fontsize14 bg-warning">
                          <Markdown
                            children={country.attributes?.card_content}
                            className="gap-2 mt-2  fontsize15 fw-semibold"
                            remarkPlugins={[remarkGfm]}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href={country?.attributes?.card_button[0].ButtonText} onClick={handleLoader}>
                    <div className="w-100 mt-1">
                      <button className="text-white rounded bgred w-100 border-0 p-2 discover_btn" style={{ fontSize: "15px" }}>
                        <p className="m-0"> {country?.attributes?.card_button[0].ButtonText}</p>
                      </button>
                    </div> </Link>
                </SwiperSlide>
              ))} */}

              {section_four?.attributes?.cards?.data?.map((country, index) => (
                <SwiperSlide key={index}>
                  <div className="d-flex flex-wrap" data-aos="flip-left"  data-aos-duration="1000">

                 
                  <div className="card rounded position-relative country_card">
                    <div className="country_img">
                      <div className="overflow-hidden country_img_div" >

                      
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_API_URL +
                          country.attributes?.cardBackgroundimg?.data
                            ?.attributes?.url
                        }
                        className="img-fluid h-auto"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                        alt="..."
                      />
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between country_card_body" >
                      <div className="countries-des mb-3">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_STRAPI_API_URL +
                            country.attributes?.frontimage?.data?.attributes
                              ?.url
                          }
                          className=" img-fluid"
                          style={{border:"1px solid #d3d3d37a" , borderRadius:"3px"}}
                        />
                      </div>
                      <div className="mt-3">
                        <div className="card-te  text-justify   ">
                          <Markdown
                            className="gap-2  country_font fw-semibold"
                            remarkPlugins={[remarkGfm]}
                          >{(country.attributes?.card_content).slice(0,115)}</Markdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <Link
                    href={country?.attributes?.card_button[0].url}
                    onClick={handleLoader}
                  >
                    <div className="w-100 mt-1">
                      <button
                        className="text-white rounded bg-red w-100 border-0 p-2 discover_btn"
                        style={{ fontSize: "15px" }}
                      >
                        <p className="m-0">
                          {" "}
                          {country?.attributes?.card_button[0].ButtonText} 
                        </p>
                      </button>
                    </div>{" "}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
