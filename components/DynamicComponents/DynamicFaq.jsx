"use client";
import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DynamicFaq = ({ data }) => {
  return (
    <div className="container-fluid">
      <div className="flex_property">
        <div className="col-lg-4 text-center">
          <h1 className="txt_blue">{data?.Heading}</h1>
        </div>
      </div>
      <div
        style={{ marginBottom: "9rem" }}
        className="w-100 d-flex justify-content-center align-items-center"
      >
        <Accordion className="col-lg-9 col-12 col-md-11  mt-5">
          {data?.cards?.data.map((item, index) => {
            return (
              <div key={index}>
                <hr className="text-secondary m-0"></hr>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header className="p-1 accordian_btn  fontsize">
                    {item?.attributes?.Heading}
                  </Accordion.Header>
                  <Accordion.Body
                    className="mb-4 p-lg-5 p-4"
                    style={{ backgroundColor: "#F2FAFC" }}
                  >
                    <div className="d-flex row">
                      <div className="col-lg-8">
                        <img src="/img/line.svg" className="img-fluid" />

                        <Markdown
                          className="gap-2 mt-2  mt-4 "
                          remarkPlugins={[remarkGfm]}
                        >{item.attributes?.card_content}</Markdown>

                        <div className="my-lg-5 my-2 ">
                          {" "}
                          <div className="col-lg-4 col-10 col-md-5">
                            <Link href={item?.attributes?.card_button[0].url}>
                              <button
                                className="w-100 rounded-pill  fs-6  cursor"
                                style={{
                                  padding: "9px",
                                  color:"#ffff",
                                  backgroundColor:"#3E3770"
                                }}
                              >
                                {item?.attributes?.card_button[0].ButtonText}
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_STRAPI_API_URL +
                            item?.attributes?.cardBackgroundimg?.data
                              ?.attributes?.url
                          }
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default DynamicFaq;
