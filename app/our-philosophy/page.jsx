import React from "react";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Table } from "react-bootstrap";
import Link from "next/link";
import CustomForm from "@/components/DynamicComponents/CustomForm";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/ourphilosophy?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/ourphilosophy?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_one.cards.cardBackgroundimg&populate=section_one.cards.cardBackgroundmobimg&populate=section_two.collaborations.row&populate=section_one.FontImage&populate=section_one.frontmobimage&populate=seo.ogImage&populate=seo.twitterImage&populate=section_one.cards.socialmedia&populate=section_one.cards.socialmedia.icon`,
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

  const shortText = section_one.SubHeading.slice(0, 500) + "...";
  const fullText = section_one.SubHeading.slice(500,10000);

  return (
    <div className="fade-in">
      {/* Banner */}
      <div
        className="d-flex flex-lg-row flex-md-row flex-column  mb-5 "
        style={{ backgroundColor: "#F8FAFB" }}
      >
        <div className="d-flex  w-100 justify-content-center align-items-center mx-lg-0 p-lg-0 p-3 position-relative">
          <div className="col-lg-8 ">
            <div className="col-lg-12 col-12 py-lg-0 py-md-0 py-5">
              <div className="col-lg-10">
                <h6 className="choosetxt fw-bold choosetxt-letter col-lg-9 m-0">
                  {section_one?.Heading}
                </h6>
              </div>
              <h3 className="choosetxt fw-bold choosetxt-letter col-lg-9 mt-4">
                {section_one?.HeadingDescription}
              </h3>
              {/* <p className="choosetxt col-lg-10 mt-lg-4">
              {section_one?.HeadingDescription}
            </p> */}
            </div>
            <img
              className="img-fluid position-absolute circle-img d-lg-block d-none"
              style={{ height: "300px" }}
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

      <div className="mt-5 mb-5">
        <div className="d-flex justify-content-center align-items-center  mx-lg-0 mx-4">
          <div className="col-lg-7 text-center mt-lg-5">
            <div className="content-wrapper">
              <div className="short-text desktop_font">{shortText}</div>
              <div id="fullText" className="full-text desktop_font">
                <Markdown className="" remarkPlugins={[remarkGfm]}>
                  {fullText}
                </Markdown>
                <a
                  href="#shortText"
                  className="read-less text-decoartion-none text-red"
                >
                  Read Less
                </a>
              </div>
              <a href="#fullText" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="flex_property ">
          <div className="col-lg-12 d-flex col-md-12 mt-lg-5 mt-3 justify-content-center flex-wrap gap-3  p-lg-2 p-3 overflow-hidden">
            {section_one?.cards?.data?.map((item, index) => {
              const aosAnimation = index === 0 ? "fade-right" : "fade-left";
              return (
                <div
                  className="col-lg-5 check col-md-5 col-sm-12 p-lg-5 p-4 mb-4 mb-lg-0 rounded border"
                  style={{ backgroundColor: `${item.attributes.css}` }}
                  data-aos={aosAnimation}
                  data-aos-duration="1500"
                  key={index}
                >
                  <div className="">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.cardBackgroundimg?.data?.attributes
                          ?.url
                      }
                      className="img-fluid"
                      // style={{ mixBlendMode: "multiply" }}
                    />

                    <div className="mt-4">
                      <img src="img/line.svg" />
                      <Markdown
                        className="mt-1 text_justify desktop_font"
                        remarkPlugins={[remarkGfm]}
                      >
                        {item?.attributes?.card_content}
                      </Markdown>
                    </div>

                    <div className="mt-3 d-flex  gap-2">
                      {item?.attributes?.socialmedia?.map((social,ind) => {
                        return (
                          <Link
                            key={ind}
                            href={social?.socialMediaUrl}
                            target="_blank"
                          >
                            <button
                              key={social?.id}
                              className="btn fs-6 rounded-pill px-md-3  px-lg-4 px-4 social_button"
                              style={{ border: "1px solid grey" }}
                            >
                              {/* <img
                                src={
                                  index === 0
                                    ? process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                      social?.icon?.data?.attributes?.url
                                    : 
                                }
                                width={15}
                              /> */}
                              <span className="d-flex justify-content-center align-items-center gap-1 ">
                           
                               {ind == 0 ? <BsTwitterX /> : <FaLinkedinIn />  } {social?.socialSiteName}
                              </span>
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className=" rounded container mt-5 ">
            <h2 className="table-title m-0">{section_two?.Heading}</h2>
            <p className="table-title mt-1">
              {section_two?.HeadingDescription}
            </p>

            {section_two?.collaborations?.data.map((item) => (
              <Table
                key={item.id}
                bordered
                responsive
                className="country-table mt-4 rounded desktop_font"
              >
                <thead className="">
                  <tr>
                    {item.attributes.row.slice(0, 1).map((header, index) => (
                      <>
                        <th style={{ width: "30%" }}>{header?.Col1}</th>
                        <th style={{ width: "70%" }}>{header?.col2}</th>
                      </>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item?.attributes?.row?.slice(1, 100).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td style={{ width: "10%" }}>{row?.Col1}</td>
                      <td style={{ width: "70%" }}>{row?.col2}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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
