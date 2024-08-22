'use client';
import { notify, notifyerror } from "@/components/globalcomponent/Toast";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["DOC", "PDF"];

const Page = () => {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  const handleSubmit = async () => {
    if (!file) {
      notifyerror("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("files.biodata", file);

    const data = {};
    formData.append("data", JSON.stringify(data));

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/careers`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        notify("File uploaded successfully!");
        setFile("")
      } else {
        console.log("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      notifyerror("Error uploading file.");
    }
  };

  return (
    <div className="fade-in">
      <div className="position-relative">
        <img src="./img/red_bg.svg" className="img-fluid w-100" />
        <div
          className="position-absolute top-0  col-md-6 text-white flex_property col-lg-6 "
          style={{ height: "100%" }}
        >
          <h2 className="fw-bold mx-lg-0 mx-md-0 mx-3">Current Openings</h2>
        </div>
      </div>

      <div className="flex_property margin_100">
        <div className="col-lg-7 col-md-10 col-11">
          <div className="col-lg-12 text-center flex_property">
            <div className="col-lg-8">
              <h3>Why Join Us</h3>
              <p style={{ color: "#77838F" }} className="desktop_font">
                If you believe in the power of education and have a keen desire
                to help each student accomplish their educational dreams, this
                is where you should be.
              </p>
            </div>
          </div>

          <div className="flex_property mt-5" style={{ backgroundColor: "#E9EAEB", border: "1px solid #F2F3F4" }}>
            <div className="p-5">
              <div className="flex_property mt-4">
                <div className="d-flex col-lg-5 col-6 justify-content-between">
                  <img src="./img/pdf.svg" />
                  <img src="./img/doc.svg" />
                </div>
              </div>

              <div className="mt-lg-5 mt-md-4 mt-4 d-flex flex-column text-center">
                <FileUploader handleChange={handleChange} name="file" accept=".doc,.pdf ,.txt" types={fileTypes} />
                <p className="mt-2 desktop_font">Upload your resume in doc., pdf format</p>
                <div>
                  <button type="button" onClick={handleSubmit} className="btn rounded-pill bg-dark-blue text-white px-4 fs-6 mb-4">
                    Upload Your Resume
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
