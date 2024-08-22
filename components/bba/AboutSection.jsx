"use client";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Marquee from "react-fast-marquee";
import { scrollToMentorSection } from "../ScrollToForm";
const AboutSection = ({ section_two }) => {
  return (
    <div>
      <div className="flex_property">
        <div className="col-lg-9 col-md-10  mt-lg-5 d-flex flex-column justify-content-center align-items-center  col-12 col-md-8 text-center mx-lg-0 mx-4 p-lg-0 p-2  ">
          <img src="/img/line.svg" className="img-fluid" />
          <h1 className=" txt_blue mt-3">{section_two?.Heading}</h1>

          <Markdown
            className="gap-2 mt-2 col-lg-10 mt-4 "
            remarkPlugins={[remarkGfm]}
          >
            {section_two?.HeadingDescription}
          </Markdown>

          <div className="mt-5">
            <Marquee speed={50} gradient={false}  loop={0}>
              {section_two?.cards?.data.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center  align-items-center mx-2"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                    className="img-fluid cursor mb-lg-4 mb-3 mb-md-4"
                    alt="Card"
                    style={{ height: "280px" }}
                  />

                  {/* <p className='position-absolute card-text mx-2 '>{item.attributes.card_content}</p> */}
                </div>
              ))}
            </Marquee>
          </div>

          <div className="mt-5 col-lg-10 col-md-10 col-12 flex_property">
            <div className="col- col-10 col-md-5">
             
                <button
                  onClick={scrollToMentorSection}
                  className="w-100  rounded-pill bg-white txt_blue fs-6 cursor animated-button"
                  style={{ padding: "8px", border: "1px solid grey" }}
                >
                  {section_two?.button[0].ButtonText}
                </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* 3 section_three */}
      <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-2">
        <div className="col-lg-8 mt-5">
          <img
            className="w-100"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_two.BackgroundImage.data.attributes.url}`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
