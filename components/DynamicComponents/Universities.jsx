import { usePathname } from "next/navigation";
import React from "react";

const Universities = ({ UniversityData }) => {
  const pathname = usePathname();


  const getFontSize = (item) => {
    if (pathname == "/country-info/ireland" && item.Heading=== "Minimum GPA") {
      return "16px";
    }
    if (
      item?.Heading === "Minimum GPA" || 
      item?.Heading === "Median starting salary for graduates" ||   item?.Heading === "A Level requirements"  || item?.Heading === "TOEFL test"
    ) {
      return "18px";
    }
    return "26px";
  };
  return (
    <>
      {UniversityData?.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div className=" position-relative">
              <div>
                <img
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_API_URL +
                    item?.attributes?.BackgroundImage?.data?.attributes?.url
                  }
                  className="img-fluid"
                />
              </div>
              <div
                className="position-absolute university_media"
                style={{ top: "4%", right: "4%" }}
              >
                <img
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_API_URL +
                    item?.attributes?.FontImage?.data?.attributes?.url
                  }
                  className="img-fluid university_logo"
                />
              </div>
              <div className="">
                <div
                  className="flex_property position-relative mb_100"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="bg-white col-lg-10 col-md-11  card_padding rounded university_position"  >
                    <h2 style={{ color: "#22304A" }}>
                      {item?.attributes?.Heading}
                    </h2>
                    <div className="col-lg-9">
                      <p className="desktop_font" style={{ color: "#22304A" }}>
                        {item?.attributes?.HeadingDescription}
                      </p>
                    </div>
                    <div className=" gap-4 row ">
                      {item?.attributes?.Offers?.map((item) => {
                        return (
                          <div
                            className={`card_class overflow-hidden  text-center rounded cursor p-3 `}
                            key={item.id}
                          >
                            <div className="flex_property ">
                              <p
                                className="m-0 mt-1 col-lg-9 "
                                style={{ fontSize: "13px", color: "#22304A" }}
                              >
                                {item?.Heading}
                              </p>
                            </div>
                            <h3
                              className="numbers  mt-lg-0 mt-1"
                              style={{ fontSize: getFontSize(item) }}
                            >
                              {item.Description}
                            </h3>
                          </div>
                        );
                      })}
                    </div>
                    <div className=" mt-5">
                      <hr className="text-secondary "></hr>
                      <div className="flex_property">
                        <img
                          src="/img/popular_icon.svg"
                          style={{ width: "25px" }}
                          className="img-fluid mx-2"
                        />{" "}
                        <h6 style={{ color: "#3E3770" }}>
                          Popular Courses:{" "}
                          <b>{item?.attributes?.popularcourse?.linkUrl}</b>
                        </h6>
                      </div>
                      <hr className="text-secondary "></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Universities;
