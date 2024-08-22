"use client";
import { notify } from "@/components/globalcomponent/Toast";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Topuniversity({ sectionOne }) {
  const [isStudent, setIsStudent] = useState(true);
  const [isGaurd, setIsGuard] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    EmailId: "",
    type: "Student",
    PhoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Inline validation
    if (name === "PhoneNumber") {
      validatePhoneNumber(value);
    }
  };

  const handleStudentClick = () => {
    setIsStudent(!isStudent);
    if (!isStudent) {
      setIsGuard(false);
      setFormData({ ...formData, type: "Student" });
    }
  };

  const handleGaurdClick = () => {
    setIsGuard(!isGaurd);
    if (!isGaurd) {
      setIsStudent(false);
      setFormData({ ...formData, type: "Guardian" });
    }
  };

  const validatePhoneNumber = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    if (value && !phonePattern.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        PhoneNumber: "Enter a valid 10-digit  number.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { PhoneNumber, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateForm = () => {
    validatePhoneNumber(formData.PhoneNumber);
    if (Object.keys(errors).length > 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/consultation-forms`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          EmailId: formData.EmailId,
          PhoneNumber: formData.PhoneNumber,
          type: formData.type,
        },
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      if (response.status === 200) {
        notify("Data submitted successfully. We will get to you soon!");
        setFormData({
          FirstName: "",
          LastName: "",
          EmailId: "",
          PhoneNumber: "",
          type: "",
        });
      } else {
        notifyerror(result.error.message);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <div className=" d-flex justify-content-center align-items-center flex-column " style={{backgroundColor:"#F2E1E1"}}>
        <div className="col-lg-12 d-flex justify-content-center align-items-center align-content-center flex-lg-row flex-column py-lg-4 mb-5 mt-lg-5 mt-5 mt-md-5 gap-lg-5 gap-3">
          <div className="col-lg-4 mb-4 col-10">
            <div>
              <img
                src={process.env.NEXT_PUBLIC_STRAPI_API_URL + sectionOne?.data?.attributes?.BackgroundImage?.data?.attributes?.url}
                alt="image"
                className="img-fluid h-auto"
              />
            </div>
          </div>

          <div className="col-lg-4 col-10">
            <div>
              <h2 className="navy-blue2 fw-bold col-12 ">
                {sectionOne.data.attributes.Heading}
              </h2>

              <Markdown
                className="gap-2 mt-2 desktop_font red_font"
                remarkPlugins={[remarkGfm]}
              >{sectionOne.data.attributes.HeadingDescription}</Markdown>

              <div>
                <div className="d-inline-flex gap-2 ">
                  <button
                    className={`rounded-pill border d-flex align-items-center justify-content-between px-3 ${
                      isStudent
                        ? `blackbtn  w-50 my-button1 font14 py-1 border-1 fw-semibold`
                        : `pinkbtn w-50 my-button1 font14 py-1 border-1 fw-semibold`
                    }`}
                    onClick={handleStudentClick}
                  >
                    <input
                      type="checkbox"
                      checked={isStudent}
                      onChange={handleStudentClick}
                      className="me-2  p-2 custom_radio"
                      disabled={isGaurd}
                    />
                    Student
                  </button>
                  <button
                    className={`rounded-pill border d-flex align-items-center justify-content-between px-3 ${
                      isGaurd
                        ? `blackbtn w-50 my-button1 font14 py-1 border-1 fw-semibold`
                        : `pinkbtn w-50 my-button1 font14 py-1 border-1 `
                    }`}
                    onClick={handleGaurdClick}
                  >
                    <input
                      type="checkbox"
                      checked={isGaurd}
                      onChange={handleGaurdClick}
                      className="me-2 custom_radio"
                      disabled={isStudent}
                    />
                    Parent
                  </button>
                </div>
                <div className="col-lg-10 col-12">
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-column mt-lg-0 mt-2 gap-lg-3 gap-md-3">
                      <div className="my-lg-3 my-2 col-lg-6 col-md-6 col-11">
                        <input
                          type="text"
                          name="FirstName"
                          className="form-control text-grey rounded-pill font14 px-3"
                          placeholder="Your first name"
                          style={{ fontSize: "14px",fontWeight:"500", border: "1px solid lightgray" }}
                          value={formData.FirstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="my-lg-3 my-2 col-lg-6 col-md-6 col-11">
                        <input
                          type="text"
                          name="LastName"
                          className="form-control rounded-pill text-grey font14 px-3"
                          placeholder="Your last name"
                          style={{ fontSize: "14px",fontWeight:"500", border: "1px solid lightgray" }}
                          value={formData.LastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-column mt-lg-0 mt-2 gap-3">
                      <div className="col-lg-6 col-md-6 col-11">
                        <input
                          type="text"
                          name="PhoneNumber"
                          className="form-control text-grey rounded-pill font14 px-3 border"
                          placeholder="Your mobile no."
                          style={{ fontSize: "14px",fontWeight:"500", border: "1px solid lightgray" }}
                          value={formData.PhoneNumber}
                          onChange={handleInputChange}
                          required
                        />
                        {formData.PhoneNumber && errors.PhoneNumber && (
                          <div className="text-danger col-12 fs14 mt-2">{errors.PhoneNumber}</div>
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6 col-11">
                        <input
                          type="email"
                          name="EmailId"
                          className="form-control px-3 rounded-pill border"
                          placeholder="Your email id"
                          style={{ fontSize: "14px",fontWeight:"500", border: "1px solid lightgray" }}
                          value={formData.EmailId}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="p-2 gradient_red fs-6 col-lg-6 col-md-6 col-6 my-3 border-0  text-white rounded-pill animated-button "
                      // style={{
                      //   backgroundColor: "#B40606",
                      // }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topuniversity;
