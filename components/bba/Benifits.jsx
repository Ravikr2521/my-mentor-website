"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { scrollToMentorSection } from "../ScrollToForm";


const Benifits = ({ section_three }) => {
  const [loader, setLoader] = useState(false);
  const pathname = usePathname();

  const handleLoader = () => {
   
    setLoader(true);
  };

  useEffect(() => {
    setLoader(false);
  }, [pathname]);
  

  return (
    <div className="">
       {loader ? <Loader isLoading={loader} /> : null}
      <div
        className="flex_property p-5 "
        style={{
          backgroundColor: `${section_three?.css?.backgroundcolor}`,
          color: `${section_three?.css?.color}`,
        }}
      >
        <div>
          <div className="col-lg-12 mt-lg-5 text-center ">
            <h1 className="text-center" >{section_three?.Heading}</h1>
          </div>
          <div className="d-flex  flex-wrap gap-5 overflow-hidden justify-content-between mt-lg-5  py-5 px-lg-5"  >
            {section_three?.cards?.data?.map((item) => {
              return (
                <div className="col-lg-5 col-md-5 d-flex flex-lg-row flex-md-column justify-content-between" data-aos="fade-left" data-aos-duration="1000"  key={item.id}>
                  <div className="col-lg-3 col-md-3">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.cardBackgroundimg?.data?.attributes
                          .url
                      }
                      className="img-fluid"
                    //   style={{ height: "80px" }}
                    />
                  </div>
                  <div className="col-lg-8 col-md-12 mt-md-3 mt-lg-0 mt-0 mx-lg-0 mx-2">
                    <h6 className="fw-bold desktop_font">{item?.attributes?.Heading}</h6>
                    <p className="mt-lg-3 mt-md-3 mt-1 desktop_font"> {item?.attributes?.card_content}</p>
                  </div>
                </div>
              );
            })}
          </div>
         <div className="flex_property my-lg-5 my-2"> <div className="col-lg-4 col-10 col-md-5">
             
                <button
                
                  className="w-100 desktop_font  rounded-pill bg-transparent txt_blue fs-6 cursor animated-button"
                  style={{ padding: "8px", border: `1px solid ${section_three?.css?.color}` ,color: `${section_three?.css?.color}`, }}
                  onClick={scrollToMentorSection}
                >
                  {section_three?.button[0]?.ButtonText}
                </button>

            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
