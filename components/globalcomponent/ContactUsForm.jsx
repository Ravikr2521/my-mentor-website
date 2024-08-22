"use client";
import React, { useState } from "react";
import { notify, notifyerror } from "./Toast";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    EmailId: "",
    MobileNumber: "",
    howcan: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-forms`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: formData.Name,
          EmailId: formData.EmailId,
          MobileNumber:formData.MobileNumber,
          howcan: formData.howcan,
        },
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      if (response.status === 200) {
        notify("Data submitted successfully. We will get to you soon!");
        setFormData({
          Name: "",
          EmailId: "",
          MobileNumber: "",
          howcan: ""
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="font14 fw-normal text-black mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="Name"
            className="form-control text-grey font14"
            placeholder="Your Name"
            style={{ fontSize: "14px" }}
            value={formData.Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="font14 fw-normal text-black font14 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            name="EmailId"
            style={{ fontSize: "14px" }}
            value={formData.EmailId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="font14 fw-normal text-black font14 mb-1"
          >
          Mobile Number
          </label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter Your number"
            name="MobileNumber"
            style={{ fontSize: "14px" }}
            value={formData.MobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="font14 fw-normal text-black font14 mb-1"
          >
            How can we Help?
          </label>
          <textarea
            className="form-control"
            rows="3"
            name="howcan"
            placeholder="Tell us little bit about your destination dream"
            style={{ fontSize: "14px" }}
            value={formData.howcan}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-100 py-2 rounded my-3 text-white bg-red animated-button"
            style={{ border: "none" }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
