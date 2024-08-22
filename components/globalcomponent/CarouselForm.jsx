"use client";
import React, { useState } from "react";
import { notify, notifyerror } from "./Toast";

const CarouselForm = ({ color , index }) => {
    const [formData, setFormData] = useState({
        name: "",
        emailid: "",
        mobile: "",
        howcanwehelp: "",
    });
    const [errors, setErrors] = useState({
        mobile: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateMobile = (value) => {
        const pattern = /^\d{10}$/;
        if (!pattern.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                mobile: "Mobile number must be exactly 10 digits",
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                mobile: "",
            }));
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateMobile(formData.mobile)) {
            return; 
        }

        const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-forms`;

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    Name: formData.name,
                    EmailId: formData.emailid,
                    MobileNumber: formData.mobile,
                    howcan: formData.howcanwehelp,
                },
            }),
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            const result = await response.json();
            if (response.status === 200) {
                notify("Data submitted successfully. We will get to you soon!");
                setFormData({
                    name: "",
                    emailid: "",
                    mobile: "",
                    howcanwehelp: "",
                });
            } else {
                notifyerror(result?.error?.message);
            }
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="text_start fontsize15">
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input
                        type="text"
                        className="form-control formclass  text-white p-2 px-3 w-100 fs14  rounded-pill bg-"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                       
                    />
                </div>
                <div className=" mt-2">
                    <input
                        type="email"
                        className="form-control formclass text-white p-2 px-3 w-100 fs14 rounded-pill "
                        placeholder="Your Email Id"
                        name="emailid"
                        value={formData.emailid}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className=" mt-2">
                    <input
                        type="text"
                        pattern="\d{10}"
                        className={`form-control formclass text-white p-2 px-3 w-100 fs14 rounded-pill ${errors.mobile ? 'border-danger' : ''}`}
                        placeholder="Enter Mobile No."
                        name="mobile"
                        value={formData.mobile}
                        onChange={(e) => {
                            handleInputChange(e);
                            validateMobile(e.target.value);
                        }}
                        required
                    />
                    {errors.mobile && <div className="text-danger mx-3 fs14">{errors.mobile}</div>}
                </div>
                <div className=" mt-2">
                    <textarea
                        style={{borderRadius:"18px" }}
                        cols={25}
                        rows={6}
                        className="form-control formclass text-white p-2 px-3 fs14 w-100 "
                        name="howcanwehelp"
                        placeholder="Tell a little about destination dream"
                        value={formData.howcanwehelp}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className=" mt-3">
                    <button type="submit" className={`w-100 p-2 fs-6 rounded-pill border-0 rounded animated-button ${index === 0 || index === 4 || index === 5 ? "text-white" : "txt_blue" }`} style={{backgroundColor:color}}>
                        <p className="m-0"> Submit{" "}</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CarouselForm;
