"use client";
import { scrollToMentorSection } from "@/components/ScrollToForm";
import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Qna = ({ Faqs }) => {


    const cardData= Faqs?.attributes?.cards?.data[0]?.attributes
  return (
    <div className=" container mb-5 mt-5 ">
      <div
        className="qna_div position-realtive overflow-hidden"
        style={{ marginBottom: "13rem" }}

      >
        <div className=" d-flex flex-column justify-content-center w-100 align-items-center">
          <div
            style={{ paddingBottom: "1rem" }}
            className="col-lg-7 col-12 mt-5 text-center p-lg-3 "
          >
            <h2 className="h1">{Faqs?.attributes?.Heading}</h2>
            <p className="mb-4 textgrey" style={{ fontSize: "13px" }}>
              {Faqs?.attributes?.HeadingDescription}
            </p>
          </div>

          <div
            style={{ marginBottom: "9em" }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <Accordion className="col-lg-9 col-md-11  ">
              {Faqs?.attributes?.faqs?.data.map((item, index) => {
                return (
                  <div key={index} className="bg-transparent">
                    <Accordion.Item eventKey={index} className="bg-transparent">
                      <Accordion.Header className="p-1 accordian_header bg-transparent fontsize">
                        {item?.attributes?.faqQuestion}
                      </Accordion.Header>
                      <Accordion.Body className="">
                        <p
                          className="textgrey m-0 px-4"
                          style={{ fontSize: "15px" }}
                        >
                          {item.attributes?.answer}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                );
              })}
            </Accordion>
          </div>
          {/* <div className="bg-white col-lg-9  col-12 rounded mt-5">
                        <div className="d-flex row justify-content-between align-items-center p-4 ">
                            <div className="col-lg-8 col-12 col-md-8">
                                <div>
                                    <h2 className="h3">{[Faqs?.attributes?.cards?.data[0]?.attributes?.card_content]}</h2>
                                    <p className="m-0 textgrey" style={{ fontSize: "13px" }}>
                                        {Faqs?.SecondDesription}{" "}
                                        <Link href={`mailto:${Faqs?.emailtext}`}><span className="text-primary">{Faqs?.emailtext}</span></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 mt-lg-0 mt-3 col-md-3">
                                <Link href="/contact-us">
                                    {" "}
                                    <button className="connectus_btn px-3 ">

                                        <p className="m-0">Contact Us</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div> */}
        </div>
        <div className="d-flex justify-content-center overflow-hidden align-items-center container " >
          <div
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cardData?.cardBackgroundimg?.data?.attributes?.formats?.large?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              borderRadius: "2rem",
              // padding:'20px 20px 20px 20px'
            }}
            className="col-lg-9 col-md-9 col-11 p-lg-3 need_help p-3 d-flex  rounded justify-content-center  overflow-hidden  align-items-center"
            data-aos="flip-down" data-aos-duration="1200"
          >
            <div className="col-lg-12  px-lg-5 p-0 d-flex flex-md-row flex-lg-row flex-column   justify-content-between  align-items-center">
              <div className="text-center">
                {/* <h1 className="text-white ">Still need help? </h1>
                <h6 className="text-white fsq-fontsize">
                  {" "}
                  Shoot us an email at <Link href="mailto: info@my-mentor.co.in">info@my-mentor.co.in</Link>
                </h6> */}
                 <Markdown
              className=" mt-3  text-white text_center markdown_link"
              remarkPlugins={[remarkGfm]}
            >{cardData?.card_content}</Markdown>
              </div>

              <div>
                <div className="mt-4 d-flex flex-column  justify-content-center align-items-center ">
                 <button type="button" onClick={scrollToMentorSection} className="bg-red fs-6 rounded-pill text-white px-4 py-2 border-0  w-100 animated-button ">
                    {cardData.Heading}
                  </button>
                  
                 <Link href={`tel:${cardData?.SubHeading} `} className="text-decoration-none"> <h6 className="text-white fsq-fontsize px-4 py-3">
                    {cardData.SubHeading}
                  </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
