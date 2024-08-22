import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import CustomForm from "@/components/DynamicComponents/CustomForm";
import TypeWriterText from "@/components/globalcomponent/TypeWriterText";
import { scrollToMentorSection } from "@/components/ScrollToForm";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/careercouselling?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/careercouselling?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_three.BackgroundImage&populate=section_three.BackgroundMobileImage&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_four.button&populate=seo.ogImage&populate=seo.twitterImage`,
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


  const typingSpeed = 90;

 

  return (
    <div className="d-flex flex-column justify-content-center align-items-center fade-in">
       <div className="position-relative">
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + BannerImg}
          className="img-fluid w-100"
        />
        <div
          className="position-absolute top-0  col-md-6 text-white flex_property col-lg-6 "
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
          <div className="col-lg-9 col-12 white_text p-lg-5  mb-md-4 mb-lg-1 ">
            {/* <h1 className=""> {Section_One.Heading}</h1> */}
            <Markdown
              className="gap-2 mt-4 fontsize15 text_center desktop_font red_font"
              remarkPlugins={[remarkGfm]}
            >{Section_One.HeadingDescription}</Markdown>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="position-relative custom_container   ">
        <div>
          <img
            alt="Image"
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_two?.BackgroundImage?.data.attributes.url
            }
            className="img-fluid w-100"
          />

          <div>
            <img
              src="/img/grey_curve.png"
              className="img-fluid grey_curveimg w-100"
            />

            <div className="d-flex justify-content-center align-items-center position- lightgrey   ">
              <div className="col-lg-10 mb-5 col-12  d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded">
                <div className="col-lg-6 col-12 px-lg-5 p-lg-3 p-4  ">
                  <div className="mt-1 mb-2">
                    <img src="/img/line_img.svg" />
                  </div>
                  <h4>{Section_two?.Heading}</h4>
                  <h2>{Section_two?.Heading_Two}</h2>
                  <p className="text_justify fontsize15 desktop_font">
                    {Section_two?.HeadingDescription}
                  </p>
                </div>
                <div className="col-lg-6 col-12 px-lg-5 p-lg-3 p-4">
                  <div className=" d-flex justify-content-center align-items-center">
                    <Markdown
                      className="gap-2 mt-4 fontsize15 text_justify desktop_font red_font"
                      remarkPlugins={[remarkGfm]}
                    >{Section_two?.SubHeading}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div
        className="custom_container mt-5  my-5  position-relative "
        style={{
          backgroundImage: `url(
            ${
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_three.BackgroundImage?.data.attributes.url
            })`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          height:"700px"
        }}
      >
        <div className=" mb-5  d-flex flex-lg-row flex-column justify-content-center  align-items-center guiden ">
          <div className="col col-sm-12 col-lg-8   px-lg-5  px-3">

            <div className="mt-lg-3 mt-md-3 mt-5 mb-3">
              <img src="/img/line_img.svg" />
            </div>
            <h4>{Section_three?.Heading}</h4>
            <h2>{Section_three?.Heading_Two}</h2>

            <div className="mt-3 me-lg-5 ">
              <Markdown
                className="gap-2 mt-4 fontsize15 text_justify desktop_font red_font"
                remarkPlugins={[remarkGfm]}
              >{Section_three?.HeadingDescription}</Markdown>
            </div>

          </div>
        </div>
      </div>
      {/* Section 4 */}
      
      <div className="custom_container lightgrey ">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-lg-10 my-lg-5 col-10 d-flex flex-lg-row flex-column gap-4  justify-content-between align-items-center align-items-md-stretch rounded">
              <div className="col-lg-5 py-sm-4 col-12 d-flex  flex-column justify-content-start align-items-start  pt-lg-5">
              <div className="mt-lg-3 mt-md-3 mt-5 mb-3">
              <img src="/img/line_img.svg" />
            </div>
                <h4>{Section_four?.Heading}</h4>
                <h1 className="career-heading m-0">{Section_four?.Heading_Two}</h1>

                <Markdown
                  className="gap-2 mt-4 text_justify desktop_font red_font"
                  remarkPlugins={[remarkGfm]}
                >{Section_four.HeadingDescription}</Markdown>


              <button onClick={scrollToMentorSection} className="px-lg-5 px-4 px-md-5 p-2  mt-4 fs-6  rounded-5 border-0 bg-red text-white animated-button">
                  {Section_four?.button[0]?.ButtonText}
                </button>
              </div>
              <div className="col-lg-5 col-12  ">
                <img
                  alt="simplyfy"
                  src={ process.env.NEXT_PUBLIC_STRAPI_API_URL +
                    Section_four.BackgroundImage?.data.attributes.url}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="d-flex flex-md-row flex-lg-row flex-column mt-5" id="start-mentor">
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

export default page;
