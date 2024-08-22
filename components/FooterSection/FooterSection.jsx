import React from "react";
import Footer from "../footer/Footer";

async function getData() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footers?populate=footer_top_urls.url_collections&populate=footer_bottom.siteLogo&populate=footer_bottom.Address&populate=footer_bottom.urls&populate=footer_bottom.socialmedia.icon`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();

  
}


const FooterSection = async () => {
    const { data } = await getData();
    const footerData = data;

    return (
        <div className="w-100">
            <Footer footerData={footerData[0]}  />
        </div>
    );
};
export default FooterSection;
