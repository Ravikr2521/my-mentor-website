'use client';
import Link from "next/link";
import React, { useState } from "react";
import { notify, notifyerror } from "../globalcomponent/Toast";

const CustomForm = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [isGuard, setIsGuard] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    EmailId: "",
    MobileNo: "",
    P_S_FirstName: "",
    P_S_LastName: "",
    P_S_EmailId: "",
    agree_policy: false,
    agree_message: false,
    CityName: ""
  });

  const handleStudentClick = () => {
    setIsStudent(true);
    setIsGuard(false);
  };

  const handleGuardClick = () => {
    setIsStudent(false);
    setIsGuard(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(formData.MobileNo)) {
      notifyerror("Please enter a valid 10-digit mobile number.");
      return;
    }

   let apiUrl;
    let requestPayload;

    if (isGuard) {
       apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-info-form-parents`;
      requestPayload = {
        data: {
            FirstName: formData.FirstName,
            LastName: formData.LastName,
            EmailId: formData.EmailId,
            MobileNo: formData.MobileNo,  
            C_S_FirstName: formData.P_S_FirstName,
            C_S_LastName: formData.P_S_LastName,
            C_S_EmailId: formData.P_S_EmailId,
            agree_policy: formData.agree_policy,
            agree_message: formData.agree_message,
            CityName: formData.CityName,
          }
      
      };
    } else {
       apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-info-forms`;
      requestPayload = { data: formData };
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      // const result = await response.json();
      if (response.status === 200) {
        notify("Data submitted successfully!");
        setFormData({
          FirstName: "",
          LastName: "",
          EmailId: "",
          MobileNo: "",
          P_S_FirstName: "",
          P_S_LastName: "",
          P_S_EmailId: "",
          agree_policy: false,
          agree_message: false,
          CityName: ""
        });
      } else {
        notifyerror("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column col-lg-11 mx-lg-5 p-lg-5 p-md-5 p-4">
        <h1>Get started with My Mentor</h1>
        <div className="col-lg-9">
          <p className="desktop_font">
            Your path to an elite university is just a page away. Fill out the
            form below and an Academic Advisor will get in touch with you and
            show you how My Mentor can help you get into your dream school.
          </p>
          <p className="desktop_font">Are you a student/ parent?</p>
        </div>
        <div className="d-inline-flex gap-2">
          <button
            className={`rounded-pill border d-flex align-items-center justify-content-between px-3 ${
              isStudent
                ? `bg-red my-button1 font14 py-1 border-1 fw-semibold text-white`
                : `pinkbtn my-button1 font14 py-1 border-1 fw-semibold`
            }`}
            onClick={handleStudentClick}
          >
            <input
              type="radio"
              checked={isStudent}
              onChange={handleStudentClick}
              className="me-2 p-2 custom-radio"
              disabled={isGuard}
            />
            Student
          </button>
          <button
            className={`rounded-pill border d-flex align-items-center justify-content-between px-3 ${
              isGuard
                ? `bg-red text-white my-button1 font14 py-1 border-1 fw-semibold`
                : `pinkbtn my-button1 font14 py-1 border-1 fw-semibold`
            }`}
            onClick={handleGuardClick}
          >
            <input
              type="radio"
              checked={isGuard}
              onChange={handleGuardClick}
              className="me-2 custom-radio"
              disabled={isStudent}
            />
            Parent
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="col-lg-9">
            <p className="mt-4 fw-bold">My contact info is...</p>
            <div className="col-12 d-flex flex-lg-row flex-md-row flex-column gap-lg-5 gap-3 pb-3">
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  className="form-control rounded text-grey font14 mt-1 px-3"
                  placeholder={isStudent ? "Your First Name" : "Enter your parent's first name"}
                  value={formData.FirstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder={isStudent ? "Your Last Name" : "Enter your parent's last name"}
                  value={formData.LastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-12 d-flex flex-lg-row flex-md-row flex-column gap-lg-5 gap-3 pb-3">
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">Email</label>
                <input
                  type="email"
                  name="EmailId"
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder="Enter your email"
                  value={formData.EmailId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">Phone Number</label>
                <input
                  type="text"
                  name="MobileNo"
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder="+91"
                  value={formData.MobileNo}
                  onChange={handleInputChange}
                  required
                  minLength={10}
                  maxLength={10}
                />
              </div>
            </div>
            <div className="col-12 d-flex flex-lg-row flex-md-row flex-column gap-lg-5 gap-3 pb-3">
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">
                  {isStudent ? "Parent's First Name" : "Child's First Name"}
                </label>
                <input
                  type="text"
                  name={isStudent ? "P_S_FirstName" : "C_S_FirstName"}
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder={isStudent ? "Enter your parent's first name" : "Enter your child's first name"}
                  value={isStudent ? formData.P_S_FirstName : formData.C_S_FirstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">
                  {isStudent ? "Parent's Last Name" : "Child's Last Name"}
                </label>
                <input
                  type="text"
                  name={isStudent ? "P_S_LastName" : "C_S_LastName"}
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder={isStudent ? "Enter your parent's last name" : "Enter your child's last name"}
                  value={isStudent ? formData.P_S_LastName : formData.C_S_LastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-12 d-flex flex-lg-row flex-md-row flex-column gap-lg-5 gap-3 pb-3">
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">
                  {isStudent ? "Parent's Email" : "Child's Email"}
                </label>
                <input
                  type="email"
                  name={isStudent ? "P_S_EmailId" : "C_S_EmailId"}
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder={isStudent ? "Enter your parent's email" : "Enter your child's email"}
                  value={isStudent ? formData.P_S_EmailId : formData.C_S_EmailId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <label className="txt_blue fw-bold">City</label>
                <input
                  type="text"
                  name="CityName"
                  className="form-control rounded text-grey font14 px-3 mt-1"
                  placeholder="Enter your city"
                  value={formData.CityName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="py-3">
              <div>
                <input
                  type="checkbox"
                  name="agree_policy"
                  checked={formData.agree_policy}
                  onChange={handleInputChange}
                  required
                />
                <label className="mx-1">
                  I agree to the <Link className="text-black" href="/privacy-policy">privacy policy</Link>
                </label>
              </div>
              <div className="d-flex mt-2 justify-content-start">
                <input
                  type="checkbox"
                  name="agree_message"
                  checked={formData.agree_message}
                  onChange={handleInputChange}
                  // style={{ marginTop: "-2%" }}
                />
                <span className="mx-1  " >
                   I want to receive study pathways, free resources, and admissions guidance from My Mentor.
                </span>
              </div>
            </div>
            <button type="submit" style={{padding:"7px"}}  className="animated-button col-lg-4  col-8 col-md-4 gradient_red fs-6 text-white  fontsize15 text-center border-0 rounded-pill">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomForm;
