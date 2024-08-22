"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { notify, notifyerror } from "./Toast";

const QuickEnquiry = ({ toggle }) => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateMobileNumber = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    if (value === "" || phonePattern.test(value)) {
      setErrors(prevErrors => ({ ...prevErrors, mobileNumber: "" }));
      return true;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, mobileNumber: "Enter a valid 10-digit number." }));
      return false;
    }
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();

    if (validateMobileNumber(mobileNumber)) {
      setShowNameInput(true);
    }
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrors({ name: "Name is required." });
      return;
    }
    setErrors({});

    const apiUrl = `${process?.env?.NEXT_PUBLIC_STRAPI_API_URL}/api/quick-enquiry-forms`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          MobileNo: mobileNumber,
          Name: name,
        },
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      if (response.status === 200) {
      notify("Form submitted successfully", result);
        setSubmitted(true);
        setTimeout(() => toggle(false), 4000); 
      } else {
       
        console.error("Error:", result.error.message);
        notifyerror({ form: "An error occurred while submitting the form. Please try again later." });
      }
    } catch (error) {
      console.error("Network error:", error);
      notifyerror({ form: "Number must me unique" });
    }
  };

  return (
    <div>
      <div className="custom-tooltip rounded-3">
        <div className="d-flex justify-content-end">
          <div>
            <RxCross2 className="cursor" onClick={() => toggle(false)} />
          </div>
        </div>

        {!submitted ? (
          <div>
            <div
              className="text-center position-absolute"
              style={{ left: "20%", top: "16%" }}
            >
              <label
                className="m-0"
                style={{ fontSize: "14px", fontWeight: "500" }}
              >
                Enter Your Phone Number <br /> for Free Consultation!
              </label>
            </div>

            <div
              className="px-2 mb-3 position-relative"
              style={{ marginTop: "2.7rem" }}
            >
              <form onSubmit={showNameInput ? handleNameSubmit : handleMobileSubmit}>
                {!showNameInput ? (
                  <>
                    <div>
                      <input
                        type="text"
                        name="MobileNumber"
                        className="form-control rounded-pill px-3 fs15 h6"
                        placeholder="+91 xxx-xxx-xxx"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                      {errors.mobileNumber && (
                        <div className="text-danger mt-1 mx-2 m-0 fs14">{errors.mobileNumber}</div>
                      )}
                      <button
                        className="border-0 rounded-pill position-absolute right_arrow"
                        type="submit"
                      >
                        <FaLongArrowAltRight className="mb-1 text-danger" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <input
                        type="text"
                        name="Name"
                        className="form-control rounded-pill px-3 fs15 h6"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      {errors.name && (
                        <div className="text-danger mt-2">{errors.name}</div>
                      )}
                      <button
                        className="border-0 rounded-pill position-absolute right_arrow"
                        type="submit"
                      >
                        <FaLongArrowAltRight className="mb-1 text-danger" />
                      </button>
                    </div>
                  </>
                )}
                {errors.form && (
                  <div className="text-danger mt-2 text-center">{errors.form}</div>
                )}
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center d-flex flex-column justify-content-center align-items-center mt-3">
           <div className="col-5 text-center "> <img src="/img/thankyou.svg" className="img-fluid w-25"/></div>
            <h6 className="text-success">Thank you for enquiry!</h6>
            <p className="">our counsellor will <br></br> contact in 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickEnquiry;
