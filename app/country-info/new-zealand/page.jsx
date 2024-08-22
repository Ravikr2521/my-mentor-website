import React from "react";
import { generateMetadata_ } from "@/components/MetaDataGenerator";
import Destination from "@/components/DynamicComponents/Destination";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/destination-newzealand?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/destination-newzealand?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_one.DropDown&populate=section_two.BackgroundImage&populate=section_two.Offers&populate=section_two.BackgroundMobileImage&populate=section_three.UTable&populate=section_four.BackgroundImage&populate=section_four.BackgroundMobileImage&populate=section_four.Offers&populate=section_five.BackgroundImage&populate=section_five.BackgroundMobileImage&populate=section_six.BackgroundImage&populate=section_six.BackgroundMobileImage&populate=section_seven.BackgroundImage&populate=section_seven.BackgroundMobileImage&populate=section_seven.cards.cardBackgroundimg&populate=section_seven.cards.cardBackgroundmobimg&populate=section_seven.cards.frontimage&populate=section_two.FontImage&populate=section_two.frontmobimage&populate=section_four.popularcourse&populate=section_four.popularcourse.icon&populate=section_six.FontImage&populate=section_six.frontmobimage&populate=section_four.FontImage&populate=section_four.frontmobimage&populate=section_seven.cards.frontmobimage`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async () => {
  const { data } = await getData();

  return <Destination data={data} />;
};
export default page;
