"use client";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination  } from "swiper/modules";
import Link from "next/link";
import CustomForm from "../DynamicComponents/CustomForm";
import Marquee from "react-fast-marquee";
function ServiceOffered({
  section_one,
  section_two,
  section_three,
  section_four,
  section_five,
  section_six,
  section_seven,
}) {
  const common = section_one.data.attributes;
  const cards = section_one.data.attributes.cards.data;
  const cardsSection2 = section_two.data.attributes.cards.data;
  const cardsSection3Image =
    section_three.data.attributes.BackgroundImage.data.attributes.url;
  const cardTestPrepartion = section_four.data.attributes;
  const section_five_data = section_five.data.attributes;

  return (
    <div className="container-fluid p-0 fade-in">
      <div
        style={{ backgroundColor: "#F8FAFB" }}
        className="d-flex flex-lg-row flex-md-row flex-column position-relative mb-5 "
      >
        <img
            className="img-fluid position-absolute circle-img d-lg-block d-md-block d-none"
            style={{ height: "270px" }}
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              common?.FontImage?.data?.attributes?.url
            }
          ></img>

        <div className="d-flex justify-content-center align-items-center mx-lg-0 mx-4 mt-lg-0 mt-md-0 mt-5 mb-lg-0 mb-md-0 mb-5">
          <div
            className="col-lg-8 "
          >
            <h6 className="choosetxt service-offered">{common?.Heading}</h6>
            <h3 className="choosetxt my-4 fw-bold choosetxt-letter col-lg-9">
              {common?.Heading_Two}
            </h3>
            <p className="choosetxt col-lg-10 desktop_font">{common?.HeadingDescription}</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 p-0">
          <div className="position-relative">
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                common?.BackgroundImage?.data?.attributes?.url
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
                {cards?.map((item) => {
                  return (
                    <div key={item?.id} className="mx-3">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                        className="img-fluid slider_img_height cursor rounded-4"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
       
      </div>
      <div className="d-flex justify-content-center align-items-center mt_100 mx-lg-0 mx-4">
        <div className="col-lg-8 text-center">
          <img src="/img/line.svg" />
          <h4 className="carrer-color text-center">
            {section_two.data.attributes.Heading}
          </h4>
          <h2 className="mt-5 text-center what-carrer-color">
            {section_two.data.attributes.Heading_Two}
          </h2>
          <Markdown
            className="gap-2 mt-3  fontsize18 what-text fontsize15 text_justify desktop_font"
            remarkPlugins={[remarkGfm]}
          >{section_two.data.attributes.HeadingDescription}</Markdown>
        </div>
      </div>
      {/* 2 section_two */}
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="col-lg-10 col-md-11 bg-dangr ">
          <div className="d-flex flex-lg-row flex-md-row flex-column   justify-content-center align-items-center gap-3">
            {cardsSection2.slice(0, 4).map((item, index) => {
              return (
                <div className="position-relative" data-aos="flip-right" data-aos-duration="1000"  key={index}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                    className="img-fluid carrer-counseling-img"
                  ></img>
                  {/* <p className='position-absolute card-text mx-2 '>{item.attributes.card_content}</p> */}
                </div>
              );
            })}
          </div>
          <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-3 mt-4">
            {cardsSection2.slice(4, 15).map((item, index) => {
              return (
                <div className="position-relative"  data-aos="flip-right" data-aos-duration="1000" key={index}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                    className="img-fluid carrer-counseling-img"
                  ></img>

                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-lg-4 ">
             <Link href="/career-counselling" >
            <button className="animated-button w-100 rounded-pill px-5 my-5 py-1  text-black bg-white">
                Know More
              </button>  </Link> 
            </div>
        </div>
        </div>
      </div>

      {/* 3 section_three */}
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="col-lg-8 mt-5">
          <img
            className="w-100"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cardsSection3Image}`}
          ></img>
        </div>
      </div>

      {/* 4 section_four */}
      <div className="d-flex flex-column justify-content-center align-items-center mt_100 test-prep-bg ">
        <div className="col-lg-8 mt_100   mx-lg-0 mx-4">
          <h3 className="text-center text-white">
            {cardTestPrepartion.Heading}
          </h3>
          <h2 className="text-center text-white fw-bold">
            {cardTestPrepartion.Heading_Two}
          </h2>

          <Markdown
            className="gap-2  text-center mt-5  text-white desktop_font"
            remarkPlugins={[remarkGfm]}
          >{cardTestPrepartion.HeadingDescription}</Markdown>
        </div>
        <div className="col-lg-10  d-flex flex-wrap  py-5   justify-content-around align-items-center">
          {cardTestPrepartion.cards.data.map((item) => {
            return (
              <div className="d-flex col-lg-2 col-6 col-md-2 flex-column justify-content-center align-items-center text-white" data-aos="fade-down" data-aos-duration="1000" key={item.id}>
               <div className="col-lg-5"> <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                  className="img-fluid mb-2"
                ></img>
                </div>
                <div>
                <p className="text-white   text-center mx-2 m-0 mt-1">
                  {item.attributes.Heading}
                </p>
                <p className="text-white   text-center mx-2 m-0 ">
                  {item?.attributes?.SubHeading}
                </p>
                </div>
                
              </div>
            
            );
          })}
        </div>
        <div className="col-lg-4 mt-4 mb_100  d-flex justify-content-center align-items-center">
        <Link className="w-100" href={`${section_four?.data?.attributes?.button[0].url}`}>  <button className="animated-button test-trans know-more-service w-100 rounded-pill  fs-6 p-2 px-5   text-white">
        {section_four?.data?.attributes?.button[0].ButtonText}
          </button></Link>
        </div>
      </div>

      {/* 5 section_four */}

      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_five.data.attributes.BackgroundImage.data.attributes.url})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
        className="d-flex flex-column justify-content-center align-items-center  p-lg-4 p-md-5 p-4"
      >
        
        <div className="col-lg-9  mt_100 flex-column d-flex justify-content-center align-items-center">
          <h2 className="text-white fw-bold">{section_five_data.Heading}</h2>
          <h2 className="text-white text-center mt-lg-4 mt-md-5 mt-3 fs-1">
            {section_five_data.Heading_Two}
          </h2>

          <div className="col-lg-10 col-md-10">
            <Markdown
              className="gap-2  text-center mt-4  text-white desktop_font"
              remarkPlugins={[remarkGfm]}
            >{section_five_data.HeadingDescription}</Markdown>
          </div>
        </div>
        <div className=" col-lg-12 mt-5 d-flex flex-wrap  bg-warnng justify-content-center align-items-center gap-3">
          {section_five_data.cards?.data?.map((item, index) => {
            return (
              <div className="d-flex col-lg-2 col-5 col-md-2 flex-column justify-content-center align-items-center text-white"  data-aos="fade-down" data-aos-duration="1000" key={index}>
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                  className="img-fluid "
                ></img>
                <p className=" text-center mx-2 fontsize15 mt-3">
                  {item.attributes.card_content}
                </p>
              </div>
            );
          })}
        </div>
        {/* <div className='d-flex flex-lg-row mb-5 flex-column bg-warnng mt-5 justify-content-center align-items-center gap-5'>
                    {
                        section_five_data.cards?.data?.slice(6, 100).map((item, index) => {
                            return (
                                <div className='d-flex flex-column justify-content-center align-items-center text-white'>
                                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url
                                        }`} className='img-fluid '></img>
                                    <p className=' text-center mx-2 fontsize15 mt-3'>{item.attributes.card_content}</p>
                                </div>
                            )
                        })
                    }

                </div> */}
        <div className="col-lg-4 col-10 mt-4 mb_100 d-flex justify-content-center align-items-center">
        <Link className="w-100" href={`${section_five?.data?.attributes?.button[0].url}`}>  <button className= "animated-button test-trans know-more-service w-100 rounded-pill p-2 fs-6 px-5   text-white">
        {section_five?.data?.attributes?.button[0].ButtonText}
          </button></Link>
        </div>
      </div>

      {/* 6 section_four */}

      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="col-lg-8 mt-5  mx-lg-0 mx-4">
          <h2 className="text-center">{section_six?.data?.attributes.Heading}</h2>
          <Markdown
            className="gap-2 mt-lg-5 mt-md-5 mt-3 text-center txt_blue desktop_font "
            remarkPlugins={[remarkGfm]}
          >{section_six?.data?.attributes?.HeadingDescription}</Markdown>
        </div>
        <div className=" col-lg-10 mt-5 mb-lg-3 d-flex flex-wrap  bg-warnng justify-content-center align-items-center gap-3 overflow-hidden">
          {section_six?.data?.attributes?.cards?.data?.map((item) => {
            return (
              <div className="d-flex col-lg-2 col-5 col-md-2 flex-column justify-content-center align-items-center text-white" data-aos="fade-left" data-aos-duration="1000" key={item.id}>
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                  className="img-fluid w-50"
                ></img>
                <h6 className="text-black text-center mx-2 m-0 mt-1">
                  {item.attributes.Heading}
                </h6>
                <h6 className="text-black text-center mx-2 m-0 ">
                  {item?.attributes?.SubHeading}
                </h6>
                
              </div>
            
            );
          })}
        </div>
        <div className="col-lg-4 col-10 mt-5 mb_100 d-flex justify-content-center align-items-center">
        <Link className="w-100" href={`${section_six?.data?.attributes?.button[0]?.url}`}>  <button className="animated-button test-trans know-more-service w-100 p-2 rounded-pill bg-red  px-5 fs-6  text-white">
        {section_six?.data?.attributes?.button[0].ButtonText}
          </button></Link>
        </div>
      </div>


      <div className="d-flex  flex-lg-row flex-md-row flex-column mt-5">
        <div className="col-lg-3 p-0 position-relative d-lg-block d-md-block d-none">
          <img
            className="img-fluid"
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              section_seven.data.attributes?.BackgroundImage?.data?.attributes?.url
            }
            alt="Background"
            style={{ height: "100%" }}
          />
        </div>
        <div className="col-lg-9">
          <CustomForm />
        </div>
      </div>

    </div>
  );
}

export default ServiceOffered;
