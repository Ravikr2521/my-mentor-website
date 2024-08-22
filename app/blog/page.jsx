
import React from "react";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import Link from "next/link";
import TypeWriterText from "@/components/globalcomponent/TypeWriterText";

export function generateMetadata() {
  return generateMetadata_({ ApiUrl: "/api/blogs?populate=seo.ogImage&populate=seo.twitterImage" });
}

async function getSuccessData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blog-page?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=blogs.Featuredimage&populate=blogs.FeaturedMobileimage`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const { data } = await getSuccessData();

  const BlogsData=data?.attributes?.blogs?.data
  const Section_one=data?.attributes?.section_one?.data?.attributes

  const typingSpeed=60;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center fade-in">
      <div className="position-relative ">
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + Section_one?.BackgroundImage?.data?.attributes?.url}
          className="img-fluid w-100 "
          
        />
        <div
          className="position-absolute  top-0  text-white flex_property w-100 "
          style={{ height: "100%" }}
        >
          <div className="col-lg-6 text-center">
          <h1 className=" mx-lg-0 mx-md-0 mx-3 blog_heading">
          <TypeWriterText
                    text={Section_one.Heading}
                    speed={typingSpeed}
                  />
          </h1>
          <h6>{Section_one?.Heading_Two}</h6>
          </div>
         
        </div>
      </div>

      <div className="custom_container  my-4 ">
        <div className="col-lg-4 text-center mt-3">
          <h2 className="">Popular Blogs</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center  gap-5  py-4  flex-wrap" >
          {BlogsData?.map((item) => (
            <div className="col-lg-5 col-11" key={item?.id} data-aos="fade-up" data-aos-duration="1500">
              <div className="d-flex flex-column mx-2 ">
                <Link
                  className="text-decoration-none text-black "
                  href={`blogs/${item?.attributes.slug}`}
                //   onClick={handleLoader}
                >
                  <div>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item?.attributes?.Featuredimage?.data?.attributes?.url
                      }
                      className="img-fluid rounded"
                      alt="image"
                    />
                  </div>
                  <div
                    className="  ps-2 my-4  pe-1"
                    style={{ height: "200px" }}
                  >
                    <div className="d-flex  justify-content-start gap-5 align-items-start ">
                      <h6>{item?.attributes?.PublishedDate}</h6>
                    </div>
                    <h5>{item?.attributes?.Title}</h5>
                    <p className="font14  me-1 text_justify">
                      {" "}
                      {(item?.attributes.FirstMainParagraphFullWidth).slice(
                        0,
                        140
                      )}
                      ...
                    </p>
                    <p style={{ color: "#0089C5" }} className="font14">
                      Read More...
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
