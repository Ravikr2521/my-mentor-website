
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import ServiceOffered from "@/components/allservices/ServiceOffered";
import React from "react";


export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/service?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/service?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_one.FontImage&populate=section_one.frontmobimage&populate=section_one.cards.cardBackgroundimg&populate=section_one.cards.cardBackgroundmobimg&populate=section_two.BackgroundImage&populate=section_two.BackgroundMobileImage&populate=section_two.cards.cardBackgroundimg&populate=section_two.cards.cardBackgroundmobimg&populate=section_three.BackgroundImage&populate=section_three.BackgroundMobileImage&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_four.button&populate=section_four.cards.cardBackgroundimg&populate=section_four.cards.cardBackgroundmobimg&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_five.button&populate=section_five.cards.cardBackgroundimg&populate=section_five.cards.cardBackgroundmobimg&populate=section_six.BackgroundImage&populate=section_six.BackgroundMobileImage&populate=section_six.button&populate=section_seven.BackgroundImage&populate=section_seven.BackgroundMobileImage&populate=section_six.cards.cardBackgroundimg&populate=section_six.cards.cardBackgroundmobimg`,
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
    <>
      <ServiceOffered
        section_one={data.attributes.section_one}
        section_two={data.attributes.section_two}
        section_three={data.attributes.section_three}
        section_four={data.attributes.section_four}
        section_five={data.attributes.section_five}
        section_six={data.attributes.section_six}
        section_seven={data.attributes.section_seven}
      />
    
    </>
  );
};

export default page;
