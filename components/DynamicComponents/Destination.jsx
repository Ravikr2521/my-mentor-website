"use client";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import StudentNumbers from "../globalcomponent/StudentNumbers";
import UniversityTable from "./UniversityTable";
import Universities from "./Universities";
import CustomForm from "./CustomForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";

const Destination = ({ data }) => {
  const section_one = data?.attributes?.section_one?.data?.attributes;
  const section_two = data?.attributes?.section_two?.data?.attributes;
  const section_three = data?.attributes?.section_three?.data?.attributes;
  const section_four = data?.attributes?.section_four?.data;
  const section_five = data?.attributes?.section_five?.data?.attributes;
  const section_six = data?.attributes?.section_six?.data?.attributes;
  const section_seven = data?.attributes?.section_seven?.data?.attributes;

  const router = useRouter();

  const [loader, setLoader] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const pathname = usePathname();

  const handleInputChange = (e) => {
    setLoader(true);
    router.push(e?.target?.value);
  };

  useEffect(() => {
    setLoader(false);
    const matchedItem = section_one?.DropDown?.find(
      (item) => `/country-info/${item.slug}` === pathname
    );
    if (matchedItem) {
      setSelectedValue(matchedItem.Text);
    } else {
      setSelectedValue("");
    }
  }, [pathname, section_one]);

  return (
    <div className="fade-in">
      {loader ? <Loader isLoading={loader} /> : null}
      <div className="position-relative ">
        <img
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_one?.BackgroundImage?.data?.attributes?.url
          }
          className="img-fluid destination_banner w-100"
        />

        <div className="flex_property">
          <div className="position-absolute destination_div p-2">
            <div className=" ">
              <div>
                <h2 className="text-white">{section_one?.Heading}</h2>
              </div>
              <div className="flex_property col-lg-12  mt-4">
                <div className="col-lg-10 col-md-9 col-12 select_div">
                  <select
                    className="form-select my-3 desktop_font px-4 fontsize15 customSelect cursor"
                    name="courses"
                    value={selectedValue}
                    onChange={(e) => handleInputChange(e)}
                    required
                  >
                    <option>{selectedValue || "Select Country"}</option>
                    {section_one?.DropDown?.filter(
                      (item) => item.Text !== selectedValue
                    )?.map((item) => (
                      <option
                        key={item.id}
                        value={item?.slug}
                        className="cursor desktop_font"
                      >
                        {item.Text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-4 "
        style={{
          //   backgroundColor: "#F3F3F3",
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_two?.BackgroundImage?.data.attributes.url
          })`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex_property flex-lg-row flex-md-row flex-column p-lg-4 p-md-4 overflow-hidden">
          <div className="col-lg-4 col-md-4 mx-auto" data-aos="fade-right" data-aos-duration="1000">
            <img
              className="img-fluid"
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_two.FontImage.data.attributes.url}`}
            ></img>
          </div>
          <div className="col-lg-5 col-md-7 mx-auto" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="mt-3 ">{section_two?.Heading}</h3>

            <Markdown
              className="gap-2 mt-2  mt-4 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_two?.HeadingDescription}
            </Markdown>
            {/* <Markdown
            children={section_four?.SubHeading}
            className="gap-2 mt-3"
            remarkPlugins={[remarkGfm]}
          /> */}
          </div>
        </div>
      </div>
      <div className="d-lg-block d-md-block d-none">
        <StudentNumbers StudentsData={section_two?.Offers} />
      </div>

      <div className="mt-5">
        <UniversityTable tableData={section_three} />
      </div>

      <div className="mt-5 pt-lg-4">
        <Universities UniversityData={section_four} />
      </div>

      <div className="">
        <div className="d-flex  flex-lg-row flex-md-row flex-column">
          <div className="col-lg-3 d-lg-block d-md-block d-none p-0 position-relative">
            <img
              className="img-fluid"
              style={{ height: "100%" }}
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_five.BackgroundImage.data.attributes.url}`}
              alt="Background"
            />
          </div>
          <div className="col-lg-9 ">
            <CustomForm />
          </div>
        </div>
      </div>

      <div
        className="p-5 "
        style={{
          //   backgroundColor: "#F3F3F3",
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_six?.BackgroundImage?.data.attributes.url
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column p-lg-5 overflow-hidden">
          <div
            className="col-lg-4 col-md-4 mx-auto"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              className="img-fluid"
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${section_six?.FontImage?.data?.attributes?.url}`}
            ></img>
          </div>
          <div
            className="col-lg-5 col-md-7 mx-auto"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h5 className="mt-3">{section_six?.Heading}</h5>

            <Markdown
              className="gap-2 mt-2  mt-4 desktop_font"
              remarkPlugins={[remarkGfm]}
            >
              {section_six?.HeadingDescription}
            </Markdown>
            {/* <Markdown
            children={section_four?.SubHeading}
            className="gap-2 mt-3"
            remarkPlugins={[remarkGfm]}
          /> */}
          </div>
        </div>
      </div>

      <div
        className="p-5 "
        style={{
          //   backgroundColor: "#F3F3F3",
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_seven?.BackgroundImage?.data.attributes.url
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-center align-items-center flex-lg-row flex-md-row  flex-column p-lg-5">
          <div className="col-lg-4 col-md-5 mx-auto ">
            <h4 className="fw-bold ">{section_seven?.Heading}</h4>
          </div>
          <div className="col-lg-4 col-md-5 mx-auto mentor_swiper mt-lg-0 mt-md-0 mt-5">
            <div className="">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                  dots: false,
                }}
                modules={[FreeMode, Pagination]}
                centeredSlides
                className=" "
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
              >
                {section_seven?.cards?.data.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="card border-0 mx-auto contact-card p-3  shadow d-flex flex-row">
                        <div>
                          <div className="story-img">
                            <img
                              src={
                                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                item.attributes?.cardBackgroundimg?.data
                                  ?.attributes?.url
                              }
                              className="card-img-top img-fluid"
                              alt="Images"
                            />
                          </div>
                          <div className="card-body ">
                            <div className="d-flex ">
                              {Array.from({
                                length: item?.attributes?.rating,
                              }).map((_, index) => {
                                return (
                                  <img
                                    src="/img/star.png"
                                    alt="star"
                                    className=""
                                    key={index}
                                    width={14}
                                  />
                                );
                              })}
                            </div>

                            <Markdown
                              className=" mt-1 m-0 navy-blue"
                              remarkPlugins={[remarkGfm]}
                            >{`${(item.attributes?.card_content).slice(
                              0,
                              85
                            )}...`}</Markdown>
                            {/* <p>Read more...</p> */}

                            <hr className="m-0" />

                            <h3 className="mt-1">{item?.attributes.Heading}</h3>
                            <h6>{item?.attributes.SubHeading}</h6>
                          </div>
                        </div>
                        <div className=" pt-2">
                          <img
                            src={
                              process.env.NEXT_PUBLIC_STRAPI_API_URL +
                              item?.attributes?.frontimage?.data?.attributes
                                ?.url
                            }
                            alt="image"
                            className="googleIcon "
                          />
                        </div>
                      </div>{" "}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
