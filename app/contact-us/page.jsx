import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationPin } from "react-icons/fa6";
import ContactUsForm from "@/components/globalcomponent/ContactUsForm";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import Link from "next/link";
import Qna from "@/components/Homepage/Faq/Faq";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/contact-us?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-us?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=address&populate=section_two&populate=section_three.faqs&populate=section_three.cards.cardBackgroundimg&populate=section_three.cards.cardBackgroundmobimg&populate=seo.ogImage&populate=seo.twitterImage`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const { data } = await getData();

  const section_one = data.attributes.section_one;

  const section_two = data.attributes.section_two;

  const section_three = data.attributes.section_three.data;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center position-relative fade-in">
      <div className="contact-sec d-flex flex-column  align-items-center">
        <img
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            section_one?.data.attributes.BackgroundImage.data.attributes.url
          }
          alt="Dummy"
          className="img-fluid w-100"
        />

        <div className="container position-absolute contact-us  d-flex gap-lg-1 gap-4  justify-content-center flex-column flex-lg-row flex-md-row  bg-white col-lg-10 col-12 col-md-12 grey1  p-lg-5 p-md-5 p-4  contant_det">
          <div className="col-lg-4 col-md-4 col-12 ">
            <p className="text-black  fw-normal  ">Main branch</p>
            <div className="d-flex align-items-start gap-3 my-2   ">
              <div>
                <FaLocationPin />
              </div>
              <div className="mt-2">
                <h6 className="fw-bold ">Lucknow:</h6>
                <p className=" pe-lg-5 text-secondary">
                  Dhan Nirman Complex, 1st Floor, Ashok Marg, Near SIDBI,
                  Hazratganj, Lucknow, Uttar Pradesh 226001
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3  ">
              <div>
                <IoCall />
              </div>
              <div className="mt-2">
                <Link
                  href="tel: +91 9129888502 "
                  className="text-decoration-none  text-secondary  fw-bold "
                >
                  <h6 className="">+91 9457167201 </h6>
                </Link>{" "}
                <Link
                  href="tel: +91 9457167201 "
                  className="text-decoration-none   text-secondary fw-bold "
                >
                  <h6 className="">+91 9129888502 </h6>
                </Link>{" "}
                <Link
                  href="tel: +91 09412761977 "
                  className="text-decoration-none text-secondary fw-bold "
                >
                  <h6 className="">+91 9412761977 </h6>
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <p className="text-black  fw-normal ">Second branch</p>
            <div className="d-flex align-items-start gap-3 my-2  pe-lg-5 ">
              <div>
                <FaLocationPin />
              </div>
              <div className="mt-2">
                <h6 className="fw-bold ">Bareilly:</h6>
                <p className=" pe-lg-5 text-secondary">
                  5-K-6/A Opp Agrasen Park, Rampur Garden, Bareilly, Uttar
                  Pradesh 243001
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3  ">
              <div>
                <IoMail />
              </div>
              <div className="mt-2">
                <Link
                  className="text-decoration-none text-secondary"
                  href="mailto:info@my-mentor.co.in"
                >
                  <h6 className="">info@my-mentor.co.in</h6>
                </Link>
                <Link
                  className="text-decoration-none text-secondary"
                  href="mailto:mymentor.edu@gmail.com"
                >
                  <h6 className="">mymentor.edu@gmail.com</h6>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <ContactUsForm />
          </div>
        </div>
      </div>

      <div
        className="col-lg-10 col-md-10 col-11 container   d-flex justify-content-center align-items-center flex-column my-lg-5 my-md-5  rounded-3 p-2 py-5"
        style={{ backgroundColor: "#FAF9F5" }}
      >
        <h2>{section_two?.data.attributes.Heading}</h2>
        <h6 className="mt-3">{section_two?.data.attributes.Heading_Two}</h6>
      </div>

      <Qna Faqs={section_three} />
    </div>
  );
};

export default page;
