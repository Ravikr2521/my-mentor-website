"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Marquee from "react-fast-marquee";
import CustomForm from "./DynamicComponents/CustomForm";

const MentorProcess = ({ data }) => {
  const section_one = data?.attributes?.section_one?.data?.attributes;
  const section_two = data?.attributes?.section_two?.data?.attributes;
  const section_three = data?.attributes?.section_three?.data?.attributes;
  const section_four = data?.attributes?.section_four?.data?.attributes;

  return (
    <div>
      <div
        style={{ backgroundColor: "#F8FAFB" }}
        className="d-flex flex-lg-row flex-md-row flex-column position-relative mb-5"
      >
        <img
          className="img-fluid position-absolute circle-img d-lg-block d-md-block d-none"
          style={{ height: "280px" }}
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_one?.FontImage?.data?.attributes?.url
          }
        ></img>

        <div className="d-flex align-items-center justify-content-center mx-lg-0 mx-4 mt-lg-0 mt-md-0 mt-5 mb-lg-0 mb-md-0 mb-5">
          <div className="col-lg-9 col-md-12">
            <h6 className="choosetxt service-offered">
              {section_one?.Heading}
            </h6>
            <h4 className="choosetxt my-4 fw-bold choosetxt-letter col-lg-9">
              {section_one?.HeadingDescription}
            </h4>
            {/* <p className='choosetxt col-lg-10'>Check 3</p> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-5 p-0">
          <div className="position-relative">
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                section_one?.BackgroundImage?.data?.attributes?.url
              }
              className="img-fluid w-100"
            />
            <div
              className="marquee_class position-absolute w-100 d-flex justify-content-center align-items-center"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Marquee
                gradient={false}
                speed={40}
                loop={0}
                className="d-flex justify-content-center align-items-center"
              >
                {section_one?.cards?.data.map((item) => {
                  return (
                    <div key={item?.id} className="mx-3">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                        className="img-fluid slider_img_height cursor rounded-4"
                       
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="d-flex justify-content-center align-items-center  mx-lg-0 mx-4">
          <div className="col-lg-5 col-md-10 text-center">
            <img src="/img/line.svg" />
            <h4 className="carrer-color text-center ">{section_two.Heading}</h4>

            <Markdown
              className="gap-2 mt-4 text-center desktop_font  what-text  "
              remarkPlugins={[remarkGfm]}
            >
              {section_two.HeadingDescription}
            </Markdown>
          </div>
        </div>

        <div className="flex_property ">
          <div className="col-lg-11 d-flex mt-lg-5 mt-3 justify-content-center flex-wrap gap-3 p-lg-2 p-md-0 p-3">
            {section_two?.cards?.data?.map((item, index) => (
              <div
                className="col-lg-5  check col-md-5 col-sm-12 p-lg-5 p-4 mb-4 mb-lg-0 rounded border"
                style={{ backgroundColor: `${item.attributes.css}` }}
                key={index}
                data-aos="fade-up" data-aos-duration="1000"
              >
                <div className="py-lg-4">
                  <img
                    src="/img/line.svg"
                    className="img-fluid"
                    style={{ mixBlendMode: "multiply" }}
                  />

                  <Markdown
                    className="mt-2 text_justify desktop_font"
                    remarkPlugins={[remarkGfm]}
                  >
                    {item?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="p-5 mt-5"
        style={{ backgroundColor: "#263451" }}
        //   style={{
        //       //   backgroundColor: "#F3F3F3",
        //         backgroundImage: `url(${
        //           process.env.NEXT_PUBLIC_STRAPI_API_URL +
        //           section_six?.BackgroundImage?.data.attributes.url
        //         })`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",

        //       }}
      >
        <div className="d-flex justify-content-center align-items-center text-white flex-lg-row flex-md-row flex-column p-lg-5 overflow-hidden" >
          <div className="col-lg-4 col-md-5 mx-auto" data-aos="fade-right" data-aos-duration="1500">
            <img
              className="img-fluid"
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_three?.BackgroundImage?.data?.attributes?.url}`}
            ></img>
          </div>
          <div className="col-lg-5 col-md-7 mx-auto" data-aos="fade-left" data-aos-duration="1500">
            <h5 className="mt-3">{section_three?.Heading}</h5>

            <Markdown
              className="gap-2 mt-2 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_three?.HeadingDescription}
            </Markdown>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="flex_property ">
          <div className="col-lg-11 d-flex mt-lg-5 mt-3 justify-content-center flex-wrap gap-3 p-lg-2 p-md-0 p-3">
            {section_three?.cards?.data?.map((item, index) => (
              <div
                className="col-lg-5  check col-md-5 col-sm-12 p-lg-5 p-md-5 p-4 mb-4 mb-lg-0 rounded border"
                style={{ backgroundColor: `${item.attributes.css}` }}
                key={index}
              >
                <div className="py-lg-4">
                  <img
                    src="/img/line.svg"
                    className="img-fluid"
                    style={{ mixBlendMode: "multiply" }}
                  />

                  <Markdown
                    className="mt-2 text_justify desktop_font"
                    remarkPlugins={[remarkGfm]}
                  >
                    {item?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt_100 mb-5 ">
        <div className="flex_property position-relative">
          <h2 className="mt-5">{section_four?.Heading}</h2>
          <div className="position-absolute service_img">
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                section_four?.BackgroundImage?.data?.attributes?.url
              }
              className="img-fluid "
              style={{ width: "120px" }}
            />
          </div>
        </div>
        <div className="flex_property mt-4">
          <div className="col-lg-12 d-flex flex-wrap flex-lg-row flex-md-row flex-column gap-lg-3 gap-3 justify-content-center align-items-center" >
            {section_four?.cards?.data.map((item, index) => (
              <div
                className="card border-0 contact-card p-3 shadow d-flex flex-row"
                key={index}
                data-aos="flip-left" data-aos-duration="1500"
              >
                <div>
                  <div className="story-img">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item.attributes?.cardBackgroundimg?.data?.attributes
                          ?.url
                      }
                      className="card-img-top img-fluid"
                      alt="Images"
                    />
                  </div>
                  <div className="card-body ">
                    <div className="d-flex">
                      {Array.from({ length: item?.attributes?.rating }).map(
                        (_, index) => {
                          return (
                            <img
                              key={index}
                              src="/img/star.png"
                              alt="testimonial"
                              width={14}
                            />
                          );
                        }
                      )}
                    </div>

                    <Markdown
                      className=" mt-1 navy-blue cut-text "
                      remarkPlugins={[remarkGfm]}
                    >
                      {item.attributes?.card_content}
                    </Markdown>
                    {/* <p>Read more...</p> */}

                    <hr className="m-0" />

                    <h3 className="mt-1">{item?.attributes.Heading}</h3>
                    <h6>{item?.attributes.SubHeading}</h6>
                  </div>
                </div>
                {/* <div className=" pt-2">
                  <img
                     src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      item?.attributes?.frontimage?.data?.attributes
                        ?.url
                    }
                    alt="image"
                    className="googleIcon "
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex flex-md-row flex-lg-row flex-column">
        <div className="col-lg-3 col-md-3 d-lg-block d-md-block d-none p-0 position-relative">
          <img
            className="img-fluid"
            style={{ height: "100%" }}
            src="/img/form_img.webp"
            alt="Background"
          />
        </div>
        <div className="col-lg-9 col-md-9">
          <CustomForm />
        </div>
      </div>
    </div>
  );
};

export default MentorProcess;
