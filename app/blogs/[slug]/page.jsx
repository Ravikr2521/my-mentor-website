import { generateMetadata_ } from "@/components/MetaDataGenerator";
import React from "react";
import Markdown from "react-markdown";
import { FaArrowLeftLong } from "react-icons/fa6";
import remarkGfm from "remark-gfm";
import Link from "next/link";
async function RenderComponent({ Listing }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className=" d-flex justify-content-center align-items-center container row  ">
        <div className="col-12">
          <div className="mb-3 px-lg-5 px-2  w-100   ">
            <div className=" py-2 w-100 ">
              <div className="row main-blog-content ">
                <div className="d-flex align-items-center  mt-lg-4 mt-md-4 mt-3 mb-lg-5 mb-md-5 mb-4">
               <Link href="/blog" className="d-lg-block d-md-block d-none"> <FaArrowLeftLong  size={22} className="cursor text-decoration-none text-black"/></Link>
                
                <h1 className=" h3  mx-lg-3">
                  {Listing.data[0].attributes.Title}
                </h1>
                </div>
                <div className="col-lg-6">
                  <img
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      Listing.data[0]?.attributes?.Featuredimage?.data
                        ?.attributes?.url
                    }
                    className="w-100 rounded"
                  />
                </div>
                <div className=" col-lg-6 mt-lg-0 mt-md-0 mt-4">
                  <div className="pb-6 blog_detail text_justify">
                    <Markdown className="" remarkPlugins={[remarkGfm]}>
                      {Listing.data[0].attributes.FirstMainParagraphFullWidth}
                    </Markdown>
                  </div>
                </div>

               
              </div>
              <div className="col-lg-12 col-md-12 mt-5">
                  <div className="pb-6 blog_detail  text_justify">
                    <Markdown className="" remarkPlugins={[remarkGfm]}>
                      {Listing.data[0].attributes.FullDescription}
                    </Markdown>
                  </div>
                </div>
              {/* <div className="">
                <h6 className=" ">{Listing.data[0].attributes.ShortContent}</h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function generateMetadata() {
  return generateMetadata_({ ApiUrl: "/api/blogs?populate=seo.ogImage&populate=seo.twitterImage" });
}
export default async function page({ params }) {

  const List = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${params?.slug}&populate=Featuredimage&populate=FeaturedMobileimage&populate=SingleBannerImg&populate=SingleBannerMobileImg&populate=BlogImage&populate=BlogMobileImage&populate=seo.ogImage&populate=seo.twitterImage&populate=similar_blogs&populate=blog_categories&populate=author`
  )
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        return result;
      }
    });
  return (
    <>
      <RenderComponent Listing={List} />
    </>
  );
}
