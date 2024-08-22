import Homepage from "@/components/Homepage/Homepage";
import { generateMetadata_ } from "@/components/MetaDataGenerator";

export function generateMetadata() {
  return generateMetadata_({
    ApiUrl:
      "/api/home-page?&populate=seo.ogImage&populate=seo.twitterImage",
  });
}
async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page?populate=section_one.BackgroundImage&populate=section_one.BackgroundMobileImage&populate=section_one.Offers&populate=UniBannerOne&populate=UniBannerTwo&populate=section_two.cardBackgroundimg&populate=section_two.cardBackgroundmobimg&populate=section_three.cards.cardBackgroundimg&populate=section_three.cards.cardBackgroundmobimg&populate=section_three.cards.card_button&populate=section_four.cards.cardBackgroundimg&populate=section_four.cards.cardBackgroundmobimg&populate=section_five.cardBackgroundimg&populate=section_five.cardBackgroundmobimg&populate=section_five.hoverimage&populate=section_five.hovermobimage&populate=section_six.cards.cardBackgroundimg&populate=section_six.cards.cardBackgroundmobimg&populate=section_seven.cardBackgroundimg&populate=section_seven.cardBackgroundmobimg&populate=section_nine.cards.cardBackgroundimg&populate=section_nine.cards.cardBackgroundmobimg&populate=section_nine.faqs&populate=section_four.cards.card_button&populate=section_four.cards.frontimage&populate=section_four.cards.frontmobimage&populate=seo.ogImage&populate=seo.twitterImage&populate=section_eight.Featuredimage&populate=section_eight.FeaturedMobileimage`,
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
      <Homepage
        sectionOne={data.attributes.section_one}
        studentData={data.attributes.section_one.data.attributes.Offers}
        UniBannerOne={data.attributes.UniBannerOne.data}
        UniBannerTow={data.attributes.UniBannerTwo.data}
        section_two={data.attributes.section_two.data}
        section_three={data.attributes.section_three.data}
        section_four={data.attributes.section_four.data}
        section_five={data.attributes.section_five.data}
        section_six={data.attributes.section_six.data}
        section_eight={data?.attributes?.section_eight?.data}
        section_nine={data.attributes.section_nine.data}
      />
    </div>
  );
};
export default page;
