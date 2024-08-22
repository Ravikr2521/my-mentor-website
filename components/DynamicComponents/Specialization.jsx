import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Specialization = ({ data }) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center mt-5  p-lg-5 p-4"
      style={{ backgroundColor: `${data?.css?.backgroundcolor}` }}
    >
      <div className="text-center col-lg-8">
        <h1 className=" ">{data?.Heading}</h1>

        <div className="mt-4">
          {" "}
          <Markdown
            className="gap-2 h6 text-black desktop_font"
            remarkPlugins={[remarkGfm]}
          >{data?.HeadingDescription}</Markdown>
        </div>
      </div>

      <div className="col-lg-12 row p-2 d-flex flex-lg-row flex-md-row flex-column mt-lg-5 mt-md-4">
        {data?.cards?.data?.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-3 d-flex">
            <div
              className="bg-white rounded p-4 d-flex flex-column"
              style={{ flexGrow: 1 }}
            >
              <div className="flex-grow-1">
                <div className="mt-1">
                  <div className="d-flex justify-content-between">
                    <div className="col-lg-4">
                      <h5 className="w-75">{item?.attributes?.Heading}</h5>
                    </div>
                  </div>
                  <Markdown
                    className="gap-2 fontsize14 text_justify desktop_font"
                  >{item?.attributes?.card_content}</Markdown>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
