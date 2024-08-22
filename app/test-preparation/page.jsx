// import ConsultForm from "@/components/ConsultForm";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import CustomForm from "@/components/DynamicComponents/CustomForm";
import Link from "next/link";
import TypeWriterText from "@/components/globalcomponent/TypeWriterText";
import { scrollToMentorSection } from "@/components/ScrollToForm";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/test-preparation?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/test-preparation?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_two.cards.card_button&populate=section_three.BackgroundImage&populate=section_three.BackgroundMobileImage&populate=section_three.cards.card_button&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_four.cards.card_button&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_five.cards.card_button&populate=section_six.BackgroundImage&populate=section_six.BackgroundMobileImage&populate=section_six.cards.card_button&populate=section_seven.BackgroundImage&populate=section_seven.BackgroundMobileImage`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const { data } = await getData();
  const BannerImg =
    data?.attributes?.section_one?.data?.attributes?.BackgroundImage?.data
      ?.attributes?.url;
  const Section_One = data?.attributes?.section_one?.data?.attributes;
  const Section_two = data?.attributes?.section_two?.data?.attributes;
  const Section_three = data?.attributes?.section_three?.data?.attributes;
  const Section_four = data?.attributes?.section_four?.data?.attributes;
  const Section_five = data?.attributes?.section_five?.data?.attributes;
  const Section_six = data?.attributes?.section_six?.data?.attributes;
  const Section_seven = data?.attributes?.section_seven?.data?.attributes;

  const typingSpeed=90;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center fade-in">
      <div className="position-relative">
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + BannerImg}
          className="img-fluid w-100"
        />
        <div
          className="position-absolute top-0 col-md-6  text-white flex_property col-lg-6 "
          style={{ height: "100%" }}
        >
          <h1 className="fw-bold mx-lg-0 mx-md-0 mx-3 blog_heading">
          <TypeWriterText
                    text={Section_One.Heading}
                    speed={typingSpeed}
                  />
          </h1>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className=" bgred p-lg-5 p-4 d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-9 col-12 white_text p-lg-5 mt-lg-5 mt-md-4 mb-md-4 mb-lg-1 ">
            <h1 className=""> {Section_two.Heading}</h1>
            <Markdown
              className="gap-2 mt-4 fontsize15 text_center red_font"
              remarkPlugins={[remarkGfm]}
            >
              {Section_two.HeadingDescription}
            </Markdown>
          </div>
        </div>

        <div className="custom_container position-relative">
          {/* <div className="position-">
            <img src="/img/student_exam.png " className="img-fluid w-100" />
            <div className="position-absolute col-lg-10 text_img">
              <img src="/img/exam_prep.png" className="img-fluid w-100" />
            </div>
          </div>
          <div className="">
            <div className="">
              <img
                src="/img/grey_curve.png"
                className="img- grey_curveimg w-100"
              />
            </div>
          </div> */}
             <img  src={process.env.NEXT_PUBLIC_STRAPI_API_URL + Section_two?.BackgroundImage.data.attributes.url} className="img-fluid w-100" />
          <div className="d-flex justify-content-center align-items-center lightgrey" style={{marginTop:"-2px"}}>
            <div className="col-lg-10 mt-5 mb-5 col-11 gap-lg-0 gap-md-3 gap-3 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6 col-12 p-lg-5 card_padding bg-white card_1">
                <h2>{Section_two.cards.data[0]?.attributes?.Heading}</h2>
                <div className="mt-3 ">
                  <img src="/img/line_img.svg" />
                </div>

                <div className="mt-3">
                  <Markdown
                    className="gap-2 mt-4 fontsize15 text_justify red_font"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_two.cards.data[0]?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
              <div
                className="col-lg-6 col-12 p-lg-5 card_padding  card_2"
                style={{ backgroundColor: "#F9F6EE" }}
              >
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                {/* <h5 className="m-0">{Section_six[1]?.attributes.Heading}</h5> */}
                {/* <h4 className="text_red fw-bold">
                  {Section_two.cards.data[1]?.attributes.Heading}
                </h4> */}
                <div className="mt-3">
                  <Markdown
                    className="text_justify fontsize15 red_font"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_two.cards.data[1]?.attributes.card_content}
                  </Markdown>
                </div>
                <div className=" my-lg-4 my-3">
                  {" "}
                  <div className=" col-lg-6">
                   
                      <button
                      onClick={scrollToMentorSection}
                        className="w-100  rounded-pill bg-transparent txt_blue fs-6 cursor animated-button"
                        style={{
                          padding: "8px",
                          border: `1px solid ${Section_two.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                          color: `${Section_two.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                        }}
                      >
                        {
                          Section_two.cards.data[1]?.attributes?.card_button[0]
                            ?.ButtonText
                        }
                      </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}

        <div className="custom_container my-5 position-relative sat_sec">
          <img
            alt="image"
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_three?.BackgroundImage.data.attributes.url
            }
            className="img-fluid"
          />
          <div className="d-flex justify-content-center align-items-center sat_cards position-absolute ">
            <div className="col-lg-10 card_padding2   col-12 gap-4 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6 col-12 p-lg-5 card_padding  rounded-3 bglightblue ">
                <h2>{Section_three?.Heading}</h2>
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                {/* <h5 className="m-0">{Section_three[0]?.attributes.title}</h5> */}
                <h4 className="text_red fw-bold">
                  {Section_three.cards.data?.attributes?.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    className="gap-2 mt-4 fontsize15 text_justify red_font"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_three.cards.data[0]?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-lg-5 card_padding pink_bg rounded-3 ">
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                {/* <h5 className="m-0">{Section_three[1]?.attributes.Heading}</h5> */}
                {/* <h4 className="text_red fw-bold">
                  {Section_three.cards.data[1]?.attributes.Heading}
                </h4> */}
                <div className="mt-3">
                  <Markdown
                    className=" text_justify fontsize15 red_font"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_three.cards.data[1]?.attributes.card_content}
                  </Markdown>
                </div>
                <div className=" my-lg-4 my-3">
                  {" "}
                  <div className=" col-lg-6">
                    
                      <button
                        onClick={scrollToMentorSection}
                        className="w-100  rounded-pill bg-transparent txt_blue fs-6 cursor animated-button"
                        style={{
                          padding: "8px",
                          border: `1px solid ${Section_three.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                          color: `${Section_three.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                        }}
                      >
                        {
                          Section_three.cards.data[1]?.attributes?.card_button[0]
                            ?.ButtonText
                        }
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}

        <div
          className="custom_container my-5"
          style={{
            backgroundImage: `url(
            ${
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_four?.BackgroundImage.data.attributes.url
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="d-flex justify-content-center align-items-center  ">
            <div className="col-lg-10  p-lg-5 p-md-5 p-3 gap-lg-0 gap-md-3 gap-3  col-md-12   col-12 d-flex flex-lg-row  flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6  col-12 p-lg-5 card_padding card_1 bg-white  ">
                <h2>{Section_four?.Heading}</h2>
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <div className="mt-3">
                  <Markdown
                    className="gap-2 mt-4 fontsize15 text_justify"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_four.cards.data[0]?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
              <div className="col-lg-6  col-12 p-lg-5 card_padding card_2 bg-lime ">
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <div className="mt-3">
                  <Markdown
                    className=" text_justify fontsize15"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_four.cards.data[1]?.attributes.card_content}
                  </Markdown>
                </div>
                <div className=" my-lg-4 my-3">
                  {" "}
                  <div className=" col-lg-6">
                   
                      <button
                        onClick={scrollToMentorSection}
                        className="w-100  rounded-pill bg-transparent txt_blue fs-6 cursor animated-button"
                        style={{
                          padding: "8px",
                          border: `1px solid ${Section_four.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                          color: `${Section_four.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                        }}
                      >
                        {
                          Section_four.cards.data[1]?.attributes?.card_button[0]
                            ?.ButtonText
                        }
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="custom_container my-5"
          style={{
            backgroundImage: `url(
            ${
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_five?.BackgroundImage.data.attributes.url
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="col-lg-10 card_padding2   col-12 gap-4 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6 col-12 p-lg-5 card_padding transCard rounded-3 ">
                <h2>{Section_five?.Heading}</h2>
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                {/* <h5 className="m-0">{Section_five[0]?.attributes.title}</h5> */}
                <h4 className="text_red fw-bold">
                  {Section_five.cards.data?.attributes?.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    className=" mt-4  text_justify fontsize15"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_five.cards.data[0]?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-lg-5 card_padding transCard rounded-3 ">
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                {/* <h5 className="m-0">{Section_five[1]?.attributes.Heading}</h5> */}
                {/* <h4 className="text_red fw-bold">
                  {Section_five.cards.data[1]?.attributes.Heading}
                </h4> */}
                <div className="mt-3">
                  <Markdown
                    className="gap-2 mt-4 fontsize15 text_justify"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_five.cards.data[1]?.attributes.card_content}
                  </Markdown>
                </div>
                <div className=" my-lg-4 my-3">
                  {" "}
                  <div className=" col-lg-6">
                   
                      <button
                        onClick={scrollToMentorSection}
                        className="w-100  rounded-pill bg-transparent txt_blue fs-6 cursor animated-button"
                        style={{
                          padding: "8px",
                          border: `1px solid ${Section_five.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                          color: `${Section_five.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                        }}
                      >
                        {
                          Section_five.cards.data[1]?.attributes?.card_button[0]
                            ?.ButtonText
                        }
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom_container mt-5 mb-5 lightgrey">
          <div className="d-flex justify-content-center align-items-center lightgrey   cards_div">
            <div className="col-lg-10 mt-5 mb-5 col-11 gap-lg-0 gap-md-3 gap-3 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6 col-12 p-lg-5 card_padding bg-white card_1">
                <h2>{Section_six?.Heading}</h2>
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                {/* <h5 className="m-0">{Section_six[0]?.attributes.title}</h5> */}
                <h4 className="text_red fw-bold">
                  {Section_six.cards.data?.attributes?.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    className="mt-4  text_justify fontsize15"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_six.cards.data[0]?.attributes?.card_content}
                  </Markdown>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-lg-5 card_padding bglightblue card_2">
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <div className="mt-3">
                  <Markdown
                    className="text_justify fontsize15"
                    remarkPlugins={[remarkGfm]}
                  >
                    {Section_six.cards.data[1]?.attributes.card_content}
                  </Markdown>
                </div>
                <div className=" my-lg-4 my-3">
                  {" "}
                  <div className=" col-lg-6">
                    
                      <button
                        onClick={scrollToMentorSection}
                        className="w-100  rounded-pill bg-transparent txt_blue fs-6 cursor animated-button"
                        style={{
                          padding: "8px",
                          border: `1px solid ${Section_five.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                          color: `${Section_five.cards.data[1]?.attributes?.card_button[0]?.css?.color}`,
                        }}
                      >
                        {
                          Section_five.cards.data[1]?.attributes?.card_button[0]
                            ?.ButtonText
                        }
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex  flex-lg-row flex-md-row flex-column" id="start-mentor">
          <div className="col-lg-3 p-0 position-relative d-lg-block d-md-block d-none">
            <img
              className="img-fluid "
              style={{ height: "100%" }}
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                Section_seven?.BackgroundImage?.data?.attributes?.url
              }
              alt="Background"
            />
          </div>
          <div className="col-lg-9">
            <CustomForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
