import React from "react";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import Marquee from "react-fast-marquee";
import StorySlider from "@/components/Homepage/Services/Services";
import Slider from "@/components/successStory/Slider";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CustomForm from "@/components/DynamicComponents/CustomForm";
import TypeWriterText from "@/components/globalcomponent/TypeWriterText";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/success-story?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/success-story?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_one.cards&populate=section_one.cards.cardBackgroundimg&populate=section_one.cards.cardBackgroundmobimg&populate=section_two&populate=section_three.cards.cardBackgroundimg&populate=section_three.cards.cardBackgroundmobimg&populate=section_four.cards.cardBackgroundimg&populate=section_four.cards.cardBackgroundmobimg&populate=section_four.cards.card_button&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_five.cards.cardBackgroundimg&populate=section_five.cards.cardBackgroundmobimg&populate=section_five.cards.ratingimg&populate=section_six.BackgroundImage&populate=section_six.BackgroundMobileImage`,
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
  const section_two = data?.attributes?.section_two?.data;

  const section_three = data?.attributes?.section_three?.data?.attributes;
  const section_four = data?.attributes?.section_four?.data;
  const section_five = data?.attributes?.section_five?.data?.attributes;


const typingSpeed=80;

  return (
    <div className="fade-in">
      <div >
        <div className=" w-100">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              section_one?.BackgroundImage?.data?.attributes?.url
            }
            className="img-fluid w-100"
          />
        </div>

        <div className="flex_property">
          <div className="container  bg-white rounded p-lg-5 p-4  success_result">
            <div className="text-center">
              <h1 className="fw-bold">
              <TypeWriterText
                    text={section_one.Heading}
                    speed={typingSpeed}
                  />
                </h1>
              <h5>{section_one?.HeadingDescription}</h5>
            </div>
            <div className="mt-5 flex_property  flex-wrap gap-3">
              {section_one?.cards?.data?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" mb-5  success_cards position-relative"
                  >
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.cardBackgroundimg?.data?.attributes
                          ?.url
                      }
                      className="img-fluid"
                    />
                    <div
                      className="flex_property position-absolute w-100 "
                      style={{ bottom: "-22%" }}
                    >
                      <div
                        className="col-lg-10 col-11 text-center rounded p-1"
                        style={{ backgroundColor: "#F8FAFB" }}
                      >
                        <h1 className="m-0 fw-bold">{item?.attributes?.Heading}</h1>
                        <p className=" h6">{item?.attributes?.SubHeading}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-block d-md-block d-none custom_height"></div>

      
      <div className="container col-lg-12 uni mt_100">
        <div className="d-flex justify-content-center align-items-center white_shade  ">
          <Marquee>
          <div className=" ">
            <div className="mx-2 mt-2 mb-lg-4 d-flex uni-list">
              {section_two.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.url
                      }
                      alt="uni"
                      className="img-fluid mx-2"
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          </Marquee>
        </div>
      </div>
     

      <div>
        <Slider section_three={section_three} />
      </div>

      <div className="mt-5 pt-lg-5 pb-lg-5">
        <StorySlider data={section_four} />
      </div>

      <div className=" mb-5 custom_top"  >
        <div className="flex_property position-relative">
          <h2 className="mt-5">{section_five?.Heading}</h2>
          <div className="position-absolute service_img">
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                section_five?.BackgroundImage?.data?.attributes?.url
              }
              className="img-fluid "
              style={{ width: "120px" }}
            />
          </div>
        </div>
        <div className="flex_property container mt-4">
          <div className="col-lg-12 p-lg-0 p-md-4 d-flex flex-lg-row flex-md-row flex-wrap flex-column gap-lg-0 gap-3 justify-content-between align-items-center">
            {section_five?.cards?.data.map((item, index) => (
              <div className="card border-0 contact-card p-3 shadow d-flex flex-row" data-aos="flip-left" data-aos-duration="1500" key={index}>
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
                    {Array.from({ length: item.attributes.rating }).map((_, index) => {
                           return  <img
                               src="/img/star.png"
                               key={index}
                               alt="testimonial"
                               width={14}
                             />;
                           })}
                           </div>

                    <Markdown
                      className=" mt-1 navy-blue cut-text "
                      remarkPlugins={[remarkGfm]}
                    >{item.attributes?.card_content}</Markdown>
                    {/* <p>Read more...</p> */}

                    <hr className="m-0" />

                    <h3 className="mt-1">{item?.attributes.Heading}</h3>
                    <h6>{item?.attributes.SubHeading}</h6>
                  </div>
                </div>
                {/* <div className="pe-2 pt-2">
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
export default page;
