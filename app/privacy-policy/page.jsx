import { generateMetadata_ } from "@/components/MetaDataGenerator";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateMetadata() {
    return generateMetadata_({
      ApiUrl:
        "/api/privacy-policy?&populate=seo.ogImage&populate=seo.twitterImage",
    });
  }

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/privacy-policy?populate=section_one`,{ cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const { data } = await getData();
  const section_one = data?.attributes?.section_one?.data?.attributes
  return (
    <div className="d-flex justify-content-center align-items-center align-contnet-center container py-4 ">
      <div>
        <h1 className="txt_blue">{section_one?.Heading}</h1>
        <Markdown
          className="gap-2 mt-4 heading_blue"
          remarkPlugins={[remarkGfm]}
        >{section_one?.HeadingDescription}</Markdown>
      </div>
    </div>
  );
};

export default page;
