"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Loader from "../Loader";
import Subscribe from "./Subscribe";

function Footer({ footerData }) {
  const allrights = footerData?.attributes?.footer_bottom?.data?.attributes?.copyright
  const Footer_url=footerData?.attributes?.footer_top_urls?.data 
  const Address = footerData?.attributes?.footer_bottom?.data?.attributes?.Address;
  const social = footerData?.attributes?.footer_bottom?.data?.attributes?.urls?.data;
  const icon = footerData?.attributes?.footer_bottom?.data?.attributes.socialmedia;
  const siteLogo =  footerData?.attributes?.footer_bottom?.data?.attributes.siteLogo;
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "10px 60px 10px 20px",
      borderRadius: "50px",
      border: "1px solid #ccc",
      outline: "none",
    },
    button: {
      position: "absolute",
      right: "2px",
      padding: "10px 39px",
      borderRadius: "50px",
      fontSize: "15px",
      border: "none",
      backgroundColor: "#b40606",
      color: "#fff",
      cursor: "pointer",
    },
  };
  const [loader, setLoader] = useState(false);
  const pathname = usePathname();

  const handleLoader = () => {
    setLoader(true);
  };

  useEffect(() => {
    setLoader(false);
  }, [pathname]);
  return (
    <>
    {loader ? <Loader isLoading={loader} /> : null}
    <div className="container-fluid bg-red-footer ">
      <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="col-lg-10 col-md-10 mt-lg-5 mt-md-5 d-md-block d-lg-block d-none">
  <div className="d-flex flex-lg-row flex-column justify-content-between">
    <div className="d-flex flex-wrap col-lg-8 col-md-12 mt-lg-1 m-0">
      <div className="d-flex flex-column">
        {Footer_url.slice(0, 2).map((item) => {
          return (
            <div
              className="col-lg-12 col-md-12 footer-list d-flex align-items-left flex-column"
              key={item.id}
            >
              <h6 className="headline-color mb-1 mt-4">
                {item?.attributes?.URLHeading}
              </h6>
              {item?.attributes?.url_collections?.data?.map((value, ind) => {
                return (
                  <Link
                    href={value?.attributes?.url}
                    className="decoration-none"
                    key={ind}
                    onClick={handleLoader}
                  >
                    <p className="m-0 mt-2 footer_links">
                      {value?.attributes?.URLText}
                    </p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="d-flex mx-lg-5 mx-md-4">
        {Footer_url.slice(2, 6).map((item) => {
          return (
            <div
              className="col-lg-8 col-md-7 footer-list d-flex align-items-left flex-column"
              key={item.id}
            >
              <h6 className="headline-color mb-1 mt-4">
                {item?.attributes?.URLHeading}
              </h6>
              {item?.attributes?.url_collections?.data?.map((value, ind) => {
                return (
                  <Link
                    href={value?.attributes?.url}
                    className="decoration-none"
                    key={ind}
                    onClick={handleLoader}
                  >
                    <p className="m-0 mt-2 footer_links">
                      {value?.attributes?.URLText}
                    </p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
    <div className="col-lg-4 col-md-8 d-flex footer-list mt-lg-4 mt-md-4 align-items-left flex-column">
    <h6 className="headline-color">Call/WhatsApp <Link className="headline-color decoration-none" href="tel:93 9338 8373">(91) 93 9338 8373 </Link></h6>
      <p className="mt-lg-4 mt-md-2">Subscribe To Our Newsletter</p>
      <div><Subscribe styles={styles}/></div>
     
    </div>
  </div>
  <hr className="text-white fw-bold" />
</div>

        <div className="w-100 d-flex flex-column my-4 d-lg-none d-block d-md-none">
          <Accordion className="w-100  my-4  d-flex flex-column gap-2">
            {Footer_url.map((item, index) => {
              return (
                <div key={index}>
                  <Accordion.Item eventKey={index} className="bg_1">
                    <Accordion.Header className="p-1 rounded accordian_header">
                      {item?.attributes?.URLHeading}
                    </Accordion.Header>
                    <Accordion.Body className="">
                    {item?.attributes?.url_collections?.data?.map(
                      (value, index) => {
                        return (
                          <div key={index} className="mx-3">
                            
                             <Link className="decoration-none   txt_blue" onClick={handleLoader} href={`${value?.attributes?.url}`}> <p
                              className="fapx-3 py-2 m-0 mx-2 h6" 
                              >
                                {value?.attributes?.URLText}
                              </p>
                              </Link>
                           
                          </div>
                        );
                      }
                    )}
                     </Accordion.Body>
                  </Accordion.Item>
                </div>
              );
            })}
          </Accordion>
          <div className="col-lg-4 d-flex footer-list  align-items-left flex-column">
            <h6 className="headline-color">Call/WhatsApp <Link className="headline-color decoration-none" href="tel:93 9338 8373">(91) 93 9338 8373 </Link></h6>
            <p>Subscribe To Our NewsLetter</p>
            <Subscribe styles={styles} />
          </div>
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
         <Link href="/"> <img
            className="logoImage"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${siteLogo?.data?.attributes?.url}`}
          ></img></Link>
          {Address?.map((item, index) => {
            return (
              <div className="my-4 mx-2" key={index}>
                <h6 className="text-center headline-color">{item.Heading}</h6>
                <p className="text-center text-white">{item.office}</p>
              </div>
            );
          })}

          <div className="my-3">
            <hr className="text-white" />
            <div className="d-flex flex-lg-row  flex-md-row flex-column justify-content-center align-items-center">
              {social.map((item, index) => {
                return (
                  <Link
                  key={index}
                    className="decoration-none text-white"
                    href={`${item?.attributes?.url}`}
                    onClick={handleLoader}
                  >
                    <p className=" mx-2 footer_links">
                      {item?.attributes?.URLText}
                    </p>
                  </Link>
                );
              })}
            </div>
            <hr className="text-white m-0" />
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <p className="text-white">{allrights}</p>
              <div className="d-flex gap-3">
                {icon.map((item, index) => {
                  return (
                   <Link href={item?.socialMediaUrl} key={index} target="_blank">
                   <img
                      className="img-fluid "
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item?.icon?.data?.attributes?.url}`}
                    ></img>
                    </Link> 
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
