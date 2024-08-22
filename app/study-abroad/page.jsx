// import ConsultForm from "@/components/ConsultForm";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import CustomForm from "@/components/DynamicComponents/CustomForm";
import Link from "next/link";
import TypeWriterText from "@/components/globalcomponent/TypeWriterText";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl: "/api/study-abroad?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/study-abroad?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_three.BackgroundImage&populate=section_three.BackgroundMobileImage&populate=section_four.button&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_four.FontImage&populate=section_four.frontmobimage`,
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
  //   const Section_six = data?.attributes?.section_six?.data?.attributes;
   

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
        <div className=" d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-9 col-12 white_text p-lg-5 p-md-5 p-3 mt-4 mt-md-4 mb-md-4 mb-lg-1 ">
            <Markdown
              className="gap-2 mt-4 fontsize15 text_center desktop_font red_font"
              remarkPlugins={[remarkGfm]}
            >{Section_One.HeadingDescription}</Markdown>
          </div>
        </div>

        <div className="custom_container position-relative">
          {/* <div className="position-">
            <img src="/img/study-abroad.png " className="img-fluid w-100" />
            <div className="position-absolute col-lg-10 text_img">
              <img src="/img/abroad.png" className="img-fluid w-100" />
            </div>
          </div> */}
          <img  src={process.env.NEXT_PUBLIC_STRAPI_API_URL + Section_two?.BackgroundImage.data.attributes.url} className="img-fluid w-100" />

          <div>
            {/* <img
              src="/img/grey_curve.png"
              className="img-fluid grey_curveimg w-100"
            /> */}

            <div className="d-flex justify-content-center align-items-center position- lightgrey   ">
              <div className="col-lg-10 mb-5 col-12  d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded">
                <div className="col-lg-6 col-12 px-lg-5 p-lg-3 p-4  ">
                  <div className="mt-1 mb-2 ">
                    <img src="/img/line_img.svg" />
                  </div>

                  <Markdown
                    className="gap-2 mt-4  text_justify desktop_font red_font"
                    remarkPlugins={[remarkGfm]}
                  >{Section_two?.HeadingDescription}</Markdown>
                </div>
                <div className="col-lg-6 col-12 px-lg-5 p-lg-3 p-4">
                  <div className=" d-flex justify-content-center align-items-center">
                    <Markdown
                     
                      className="gap-2 mt-3 fontsize15 text_justify desktop_font red_font"
                      remarkPlugins={[remarkGfm]}
                    >{Section_two?.SubHeading}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section three */}

        <div
          className="custom_container mt-5  my-5   "
          style={{
            backgroundImage: `url(
            ${
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              Section_three.BackgroundImage?.data.attributes.url
            })`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="col-lg-10 mb-5 col-12 col-md-12 p-4 d-flex flex-lg-row flex-column  justify-content-center ">
            <div className=" col-sm-12 col-lg-6 col-md-6"></div>
            <div className=" col-12 col-lg-6  guiden-cont ms-lg-5 p-md-3 ps-lg-5 d-flex  justify-content-end ">
              <div className="col-lg-10 col-12 ">
                <div className="mt-lg-3 mt-md-3 mt-5 mb-3">
                  <img src="/img/line_img.svg" />
                </div>

                <div className="mt-3">
                  <Markdown
                    className="gap-2 mt-4  fontsize15 text_jusify desktop_font red_font"
                    remarkPlugins={[remarkGfm]}
                  >{Section_three.HeadingDescription}</Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section four */}

        <div className="custom_container lightgrey ">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-lg-10 mt-lg-5 col-md-12 p-lg-5 p-md-5 col-10 d-flex flex-lg-row flex-md-row flex-column gap-4  justify-content-between align-items-center align-items-md-stretch overflow-hidden">
              <div className="col-lg-5 col-md-7 col-12 d-flex  flex-column justify-content-start align-items-start " data-aos="fade-right" data-aos-duration="1200">
              <div className="mt-lg-3 mt-md-3 mt-4">
                  <img src="/img/line_img.svg" />
                </div>
                <Markdown
                  className="gap-2 mt-4 desktop_font"
                  remarkPlugins={[remarkGfm]}
                >{Section_four.HeadingDescription}</Markdown>

                <div className="">
                  <Link href="/contact-us">
                    {" "}
                    <button className="px-5 p-2 animated-button fs-6  rounded-3 border-0 bg-red text-white ">
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5  col-md-5 col-12  d-flex flex-lg-row flex-column justify-content-center align-items-center" data-aos="fade-left" data-aos-duration="1200">
                <img
                  alt="simplyfy"
                  src="/img/simplify.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="custom_container position-relative ">
          <img alt="Gmat" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + Section_four?.BackgroundImage.data.attributes.url} className="img-fluid w-100" />
          <div className="d-flex justify-content-center align-items-center  cards_div position-absolute">
            <div className="col-lg-10  col-11 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6 col-12 p-lg-5 card_padding card_1 bg-white  ">
                <h2>{Section_four?.Heading}</h2>
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <h4 className="text_red fw-bold">
                  {Section_four.cards.data?.attributes?.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    children={
                      Section_four.cards.data[0]?.attributes?.card_content
                    }
                    className="gap-2 mt-4 fontsize15 text_justify"
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 p-lg-5 card_padding card_2 bg-lime ">
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <h4 className="text_red fw-bold">
                  {Section_four.cards.data[1]?.attributes.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    children={
                      Section_four.cards.data[1]?.attributes.card_content
                    }
                    className="gap-2 mt-4 fontsize15 text_justify"
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="custom_container position-relative ">
          <img alt="Gmat" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + Section_five?.BackgroundImage.data.attributes.url} className="img-fluid w-100" />
          <div className="d-flex justify-content-center align-items-center  cards_div position-absolute">
            <div className="col-lg-10  col-11 gap-4 d-flex flex-lg-row flex-column  justify-content-center align-items-center align-items-md-stretch rounded  ">
              <div className="col-lg-6 col-12 p-lg-5 card_padding transCard rounded-3 ">
                <h2>{Section_five?.Heading}</h2>
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <h4 className="text_red fw-bold">
                  {Section_five.cards.data?.attributes?.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    children={
                      Section_five.cards.data[0]?.attributes?.card_content
                    }
                    className="gap-2 mt-4 fontsize15 text_justify"
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 p-lg-5 card_padding transCard rounded-3 ">
                <div className="mt-3 mb-3">
                  <img src="/img/line_img.svg" />
                </div>
                <h4 className="text_red fw-bold">
                  {Section_five.cards.data[1]?.attributes.Heading}
                </h4>
                <div className="mt-3">
                  <Markdown
                    children={
                      Section_five.cards.data[1]?.attributes.card_content
                    }
                    className="gap-2 mt-4 fontsize15 text_justify"
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="d-flex   flex-lg-row flex-md-row flex-column mt-5">
          <div className="col-lg-3 p-0  d-lg-block d-md-block d-none">
            <img
              className="img-fluid"
              style={{height:"100%"}}
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                Section_five?.BackgroundImage?.data?.attributes?.url
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
