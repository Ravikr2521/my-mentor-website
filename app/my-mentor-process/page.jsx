import React from "react";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import MentorProcess from "@/components/MentorProcess";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl: "/api/mm-process?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/mm-process?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_one.cards.cardBackgroundimg&populate=section_one.cards.cardBackgroundmobimg&populate=section_two.cards&populate=section_three.BackgroundImage&populate=section_three.BackgroundMobileImage&populate=section_three.cards&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_four.cards.cardBackgroundimg&populate=section_four.cards.cardBackgroundmobimg&populate=section_one.FontImage&populate=section_one.frontmobimage`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async () => {
  const { data } = await getData();


  return (
   <div className="fade-in">
            <MentorProcess data={data} />
    
   </div>
  );
};
export default page;
