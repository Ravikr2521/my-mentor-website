import React from "react";
import Header from "../header/Header";
async function getData() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/nav-bars?populate=navbars.urlicon&populate=navbars.url_collections.urlicon`, { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
const Navbar = async () => {
    const { data } = await getData();
    const navdata = data[0].attributes.navbars.data;

    return (
        <div className="w-100 ">
            <Header data={navdata} />
        </div>
    );
};
export default Navbar;
