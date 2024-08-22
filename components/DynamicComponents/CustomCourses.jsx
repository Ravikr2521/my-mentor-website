import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Benifits from "../bba/Benifits";
import CustomForm from "./CustomForm";
import Specialization from "./Specialization";
import TypeWriterText from "../globalcomponent/TypeWriterText";

const CustomCourses = ({ data, boolean }) => {
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
        <div className="d-flex  w-100 justify-content-center align-items-center mx-lg-0 p-lg-0 p-3 position-relative">
          <div className="col-lg-8">
            <div className="col-lg-12 col-12 py-lg-0 py-md-0 py-5">
              <div className="col-lg-8">
                <div>
                <h3 className="choosetxt fw-bold choosetxt-letter col-lg-12 m-0 ">
                  <TypeWriterText
                    text={section_one.Heading}
                    speed={typingSpeed}
                  />
                  </h3>
                </div>
              </div>
              {/* <h3 className="choosetxt fw-bold choosetxt-letter col-lg-9">
              {section_one?.Heading_Two}
            </h3> */}
              <p className="choosetxt col-lg-10 mt-lg-4 desktop_font mt-lg-0 mt-md-0 mt-3">
                {section_one?.HeadingDescription}
              </p>
            </div>
            <img
              className="img-fluid position-absolute circle-img d-lg-block d-md-block d-none"
              style={{ height: "270px" }}
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                section_one?.FontImage?.data?.attributes?.url
              }
            ></img>
          </div>
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
      <div>
        <div className="flex_property">
          <div className="col-lg-7 col-md-10 mt-lg-5  col-12 col-md-8 text-center mx-lg-0 mx-4 p-lg-0 p-2  ">
            <img src="/img/line.svg" className="img-fluid" />
            <h1 className=" txt_blue mt-3">{section_two?.Heading}</h1>

            <Markdown className="mt-4 desktop_font" remarkPlugins={[remarkGfm]}>
              {section_two?.HeadingDescription}
            </Markdown>
          </div>
        </div>

        {/* 3 section_three */}
        <div className="d-flex justify-content-center align-items-center mt-lg-4  mt-2">
          <div className="col-lg-8 mt-5">
            <img
              className="w-100"
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_two.BackgroundImage.data.attributes.url}`}
            ></img>
          </div>
        </div>
      </div>

      {/* section four  */}
      {boolean ? (
        <div className="mt-5 pt-lg-5">
          <Benifits section_three={section_three} />
        </div>
      ) : (
        <div className="pt-lg-5 pt-3">
          <Specialization data={section_three} />
        </div>
      )}

      {/* Section Five */}
      {/* <div
        className="p-5 "
        style={{
          backgroundColor: "#F3F3F3",
        }}
      >
        <div className="flex_property flex-lg-row flex-md-row flex-column p-lg-5">
          <div className="col-lg-6 col-md-8">
            <img src="/img/line.svg" className="img-fluid" />

            <Markdown
              className="gap-2 mt-2  mt-4 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_four?.HeadingDescription}
            </Markdown>
            <img src="/img/line.svg" className="img-fluid" />
            <Markdown
              className="gap-2 mt-3 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_four?.SubHeading}
            </Markdown>
          </div>
          <div className="col-lg-4 col-md-4 col-10">
            <img
              className="img-fluid"
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_four.BackgroundImage.data.attributes.url}`}
            ></img>
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
            <img src="/img/line.svg" className="img-fluid mt-lg-5 mt-md-3" />
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

      <div className="d-flex flex-md-row flex-lg-row flex-column" id="start-mentor">
        <div className="col-lg-3 col-md-3 d-lg-block d-md-block d-none p-0 position-relative">
          <img
            className="img-fluid"
            style={{ height: "100%" }}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_five.BackgroundImage.data.attributes.url}`}
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

export default CustomCourses;
