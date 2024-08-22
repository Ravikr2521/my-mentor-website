import React from "react";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import CustomCourses from "@/components/DynamicComponents/CustomCourses";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/course-fashion?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/course-fashion?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_three.cards.cardBackgroundimg&populate=section_three.cards.cardBackgroundmobimg&populate=section_three.button&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_three.css&populate=section_one.FontImage&populate=section_one.frontmobimage`,
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
    <div>
      <CustomCourses data={data} boolean={true}/>
    </div>
  );
};
export default page;
