import React from "react";
import AboutSection from "@/components/bba/AboutSection";
import Benifits from "@/components/bba/Benifits";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import DynamicFaq from "@/components/DynamicComponents/DynamicFaq";
import StartedWithMentor from "@/components/Homepage/Startedwithmentor/StartedWithMentor";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import CustomForm from "@/components/DynamicComponents/CustomForm";
import TypeWriterText from "@/components/globalcomponent/TypeWriterText";

export function generateMetadata() {
    return generateMetadata_({ ApiUrl: "/api/course-bba?&populate=seo.ogImage&populate=seo.twitterImage" });
  }

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/course-bba?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_two.cards.cardBackgroundimg&populate=section_two.cards.cardBackgroundmobimg&populate=section_two.button&populate=section_three.cards.cardBackgroundimg&populate=section_three.cards.cardBackgroundmobimg&populate=section_three.button&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_five.cards.card_button&populate=section_five.cards.cardBackgroundimg&populate=section_five.cards.cardBackgroundmobimg&populate=section_six.BackgroundImage&populate=section_six.BackgroundMobileImage&populate=section_one.FontImage&populate=section_one.frontmobimage&populate=section_three.css&populate=section_four.button`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async () => {
  const { data } = await getData();
  const section_one = data?.attributes?.section_one?.data?.attributes;
  const section_two = data?.attributes?.section_two?.data?.attributes;
  const section_three = data?.attributes?.section_three?.data?.attributes;
  const section_four = data?.attributes?.section_four?.data?.attributes;
  const section_five = data?.attributes?.section_five?.data?.attributes;
  
  const typingSpeed = 90;

  return (
    <div>
      {/* Banner */}
      <div
        className="d-flex flex-lg-row flex-md-row flex-column  mb-5 "
        style={{ backgroundColor: "#F8FAFB" }}
      >
        <div className="d-flex  w-100 justify-content-center align-items-center mx-lg-0  p-lg-0 p-3 position-relative">
          <div className="col-lg-8 py-lg-0 py-md-0 py-3">
          <h3 className="choosetxt fw-bold choosetxt-letter col-lg-8 m-0">
                  <TypeWriterText
                    text={section_one.Heading}
                    speed={typingSpeed}
                  />
                  </h3>
            <p className="choosetxt col-lg-10 mt-lg-4 mt-md-0 mt-3">
              {section_one?.HeadingDescription}
            </p>
          </div>
          <img
            className="img-fluid position-absolute circle-img d-lg-block d-md-block d-none"
            style={{ height: "300px" }}
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              section_one?.FontImage?.data?.attributes?.url
            }
          ></img>
        </div>
        <div className="col-lg-4  p-0">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              section_one?.BackgroundImage?.data?.attributes?.url
            }
            className="img-fluid"
          />
        </div>
      </div>

      {/* About  */}

      <div className="pb-lg-5 pb-md-5 pb-3">
        {" "}
        <AboutSection section_two={section_two} />
      </div>


      <div className="mt-5">
        <Benifits section_three={section_three} />
      </div>

      {/* section four  */}
      {/* <div
        className="p-5"
        style={{
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_four?.BackgroundImage?.data.attributes.url
          })`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-5">
          <div className="col-lg-7 mx-lg-5 px-lg-5 ">
            <h1 className="text-white">{section_four?.Heading}</h1>
            <Markdown
              className="gap-2 mt-lg-5 mt-md-4 mt-2 text-white"
              remarkPlugins={[remarkGfm]}
            >{section_four?.HeadingDescription}</Markdown>
            <div className="my-lg-5 my-2 ">
              {" "}
              <div className="col-lg-7 col-10 col-md-5">
                <Link href={section_four?.button[0].url}>
                  <button
                    className="w-100 mt-3 rounded-pill bg-transparent text-white fs-6  cursor animated-button"
                    style={{ padding: "9px", border: "1px solid white" }}
                  >
                    {section_four?.button[0].ButtonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div
        className="p-5 flex_property"
        style={{
          backgroundColor: "#F3F3F3",
        }}
      >
        <div className="col-lg-10">

        
        <div className="d-flex justify-content-between  flex-lg-row flex-md-row flex-column p-lg-5">
          <div className="col-lg-7 col-md-8">
            <img src="/img/line.svg" className="img-fluid" />

            <Markdown
              className="gap-2 mt-2  mt-4 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_four?.HeadingDescription}
            </Markdown>
            <img src="/img/line.svg" className="img-fluid mt-lg-4 mt-md-3" />
            <Markdown
              className="gap-2 mt-3 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_four?.SubHeading}
            </Markdown>
          </div>
          <div className="col-lg-4 col-md-4 col-10 ">
            <img
              className="img-fluid mt-lg-5 mt-md-5 mx-lg-0 mx-md-0 mx-5" 
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_four.BackgroundImage.data.attributes.url}`}
            ></img>
          </div>
        </div>
        </div>
      </div>



      {/* Section Five */}

     <div className="mt_100"><DynamicFaq data={section_five}/></div> 
     <div className="d-flex flex-md-row flex-lg-row flex-column" id="start-mentor">
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
