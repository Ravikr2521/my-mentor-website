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
      "/api/education-loan?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/education-loan?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_two.cards&populate=section_two.cards.card_button&populate=section_three&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_four.cards.cardBackgroundimg&populate=section_four.cards.cardBackgroundmobimg&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_five.button&populate=section_six.BackgroundImage&populate=section_six.BackgroundMobileImage`,
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

const typingSpeed = 90;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
     <div className="position-relative">
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + BannerImg}
          className="img-fluid w-100"
        />
        <div
          className="position-absolute top-0 col-md-6  text-white flex_property col-lg-6 "
          style={{ height: "100%" }}
        >
          <h1 className="fw-bold mx-lg-0 mx-md-0 mx-3">
          <TypeWriterText
                    text={Section_One.Heading}
                    speed={typingSpeed}
                  />
          </h1>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className=" p-lg-5 p-4 d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-9 col-12 white_text p-lg-5  mt-md-4 mb-md-4 mb-lg-1 ">
            {/* <h1 className=""> {Section_One.Heading}</h1> */}
            <Markdown
              className="gap-2 mt-4 fontsize15 text_center desktop_font"
              remarkPlugins={[remarkGfm]}
            >{Section_One.HeadingDescription}</Markdown>
          </div>
        </div>
      </div>

      <div className="position-relative custom_container   ">
        <div>
          <img alt="Image" src="/img/loan.png" className="img-fluid w-100" />
          <div className="position-absolute col-lg-10 text_img">
            <img src="/img/eduload.png" className="img-fluid w-100" />
          </div>

          <img
            src="/img/grey_curve.png"
            className="img-fluid grey_curveimg w-100"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="custom_container mt-5 mb-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>{Section_two?.Heading}</h1>
          <h5 className="lighttext">{Section_two?.HeadingDescription}</h5>

          <div className=" my-2">
            <div className="d-flex justify-content-center align-items-center ">
              <div className="col-lg-10 card_padding2   col-11 gap-4 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
                <div className="col-lg-6 col-12 p-lg-5 card_padding lightgrey rounded-3 ">
                  {/* <h2>{Section_two?.cards.data[0].attributes.Heading}</h2> */}

                  <div className="">
                    <Markdown
                      className="gap-2 mt-4 fontsize15 text_justify "
                      remarkPlugins={[remarkGfm]}
                    >{ Section_two?.cards.data[0].attributes.card_content}</Markdown>
                  </div>
                 
                    <button onClick={scrollToMentorSection} className=" p-2 px-lg-5 px-4 px-md-5 mt-5 fs-6 animated-button  rounded-5 border-0 bg-red text-white ">
                      {
                        Section_two?.cards.data[0].attributes.card_button[0]
                          .ButtonText
                      }
                    </button>
                 
                </div>
                <div
                  className="col-lg-6 col-12 p-lg-5 card_padding  rounded-3 "
                  style={{ backgroundColor: "#EAF7F8" }}
                >
                  {/* <h2>{Section_two?.cards.data[1].attributes.Heading}</h2> */}

                  <div className="">
                    <Markdown
                      className="gap-2 mt-4 fontsize15 text_justify "
                      remarkPlugins={[remarkGfm]}
                    >{Section_two?.cards.data[1].attributes.card_content}</Markdown>
                  </div>
                  <img
                    alt="image"
                    src="/img/credila.png"
                    className="img-fluid mt-4 w-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="darkbluebg d-flex flex-column justify-content-center align-items-center text-white px-5 p-5 ">
        {/* <h1 className="mt-5 ">{Section_three?.Heading}</h1> */}
        <div className="col-lg-8 col-12 text-center fontsize15 margin_100">
          <Markdown
            className="gap-2  text_center desktop_font"
            remarkPlugins={[remarkGfm]}
          >{Section_three.HeadingDescription}</Markdown>
          {/* <h4 className="fontsize15 mb-5 pb-5 loan-des">
            {Section_three?.HeadingDescription}
          </h4> */}
        </div>
      </div>
      {/* Section 4 */}

      <div className="lightgrey mt-5 mb-5">
        <div className="container d-flex flex-column justify-content-center align-items-center my-5">
          <img
            alt="image"
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_four?.BackgroundImage.data.attributes.url
            }
            className="img-fluid mb-5"
          />

          <h1 className="mt-5">{Section_four.Heading}</h1>
          <div className="col-lg-10 col-md-10">
            <Markdown
              className=" mt-4  bluetext text_center desktop_font"
              remarkPlugins={[remarkGfm]}
            >{Section_four.HeadingDescription}</Markdown>
          </div>
          {/* <h5 className="col-10 text-center fontsize15 mt-3 bluetext">
            {Section_four.HeadingDescription}
          </h5> */}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <div>
            <div className="d-flex justify-content-center align-items-center ">
              <div className="col-lg-10 col-md-12 card_padding2   col-11 gap-4 d-flex flex-md-row flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
                {Section_four?.cards.data.map((card) => (
                  <div
                    key={card.id}
                    className="col-lg-6 col-md-6 col-12 p-lg-4 p-md-4 card_padding lightgrey bg-white rounded-3 position-relative d-flex flex-column justify-content-start align-items-center loan_card"
                  >
                    <img
                      alt="image"
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        card.attributes.cardBackgroundimg.data.attributes.url
                      }
                      className="img-fluid"
                    />
                    <div className="bg-white position-absolute loan_card_cont rounded-3 px-lg-5  px-2 py-lg-2">
                      <h3 className="mt-lg-2">{card.attributes.Heading}</h3>
                      <h4 className="fontsize15">
                        {card.attributes.card_content}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5  */}
      <div className="custom_container lightgrey ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-lg-12 mb-lg-5 col-md-10 col-10 d-flex w-100 p-md-5 p-4  flex-lg-row flex-md-row flex-column gap-4  justify-content-center align-items-center rounded">
            <div className="col-md-6 col-lg-5 py-sm-4 col-12 d-flex  flex-column justify-content-start align-items-start  pt-lg-5">
              <div className="mt-lg-3 mt-md-3 mt-5 mb-3">
                <img src="/img/line_img.svg" />
              </div>
              <h4>{Section_five?.Heading}</h4>
              <h1 className="career-heading">{Section_five?.Heading_Two}</h1>

              <Markdown
                className="gap-2 mt-4 desktop_font"
                remarkPlugins={[remarkGfm]}
              >{Section_five.HeadingDescription}</Markdown>

              <div className="">
             <button onClick={scrollToMentorSection} className="px-5 p-2 animated-button  mt-5 fs-6  rounded-5 border-0 bg-red text-white ">
                  {Section_five.button[0].ButtonText}
                </button>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-12  ">
              <img
                alt="simplyfy"
                src="/img/intstudent.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="d-flex  flex-lg-row flex-md-row flex-column mt-5" id="start-mentor">
        <div className="col-lg-3 p-0 position-relative d-lg-block d-md-block d-none">
          <img
            className="img-fluid"
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_six?.BackgroundImage?.data?.attributes?.url
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
};

export default page;
