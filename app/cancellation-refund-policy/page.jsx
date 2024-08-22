import { generateMetadata_ } from "@/components/MetaDataGenerator";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl: "/api/cancellation?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/cancellation?populate=section_one`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const { data } = await getData();
  const section_one = data?.attributes?.section_one?.data?.attributes;
  return (
    <div className="d-flex align-contnet-center container py-5 ">
      <div className="custom_height">
        <h1 className="txt_blue fw-bold">{section_one?.Heading}</h1>
        <Markdown className="gap-2 mt-4" remarkPlugins={[remarkGfm]}>
          {section_one?.HeadingDescription}
        </Markdown>
      </div>
    </div>
  );
};

export default page;
