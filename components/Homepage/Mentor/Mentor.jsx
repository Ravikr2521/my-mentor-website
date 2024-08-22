"use client";
import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";

const Mentor = ({ MentorData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="container p-lg-0 p-md-0 rounded mt-lg-5 d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center">
      <div className=" ">
        <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center">
          {MentorData?.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 col-12   position-relative p-lg-0 p-md-0 "
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  item.attributes?.cardBackgroundimg?.data?.attributes?.formats
                    ?.small?.url
                }
                className="img-fluid w-100"
                style={{ display: hoveredIndex === index ? "none" : "block" }}
              />
              {/* <video playsInline autoPlay={ hoveredIndex === index  ? true : false} controls loop className="overflow-hidden testimonal_videos" style={{ display: hoveredIndex === index ? 'block' : 'none'}}  >
            <source src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      item?.attributes?.videoUrl?.data?.attributes?.url
                    } />
          </video> */}
              <HoverVideoPlayer
                style={{ display: hoveredIndex === index ? "block" : "none" }}
                videoSrc={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  item.attributes?.hoverimage?.data?.attributes?.url
                }
                className="testimonal_videos"
                muted={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
