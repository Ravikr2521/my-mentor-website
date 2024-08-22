'use client'
import Loader from '@/components/Loader';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const BlogSection = ({ BlogData }) => {
    const [loader, setLoader] = useState(false);
    const pathname = usePathname()

    const handleLoader = () => {
        setLoader(true);
    };

    useEffect(() => {
        setLoader(false);
    }, [pathname]);
    // console.log(BlogData,"hhh")
    return (
        <div className=' mt-lg-0 mt-md-0 mt-5'>
            {loader ? <Loader isLoading={loader} /> : null}

            <h2 className='text-center h3 '>Our Blogs</h2>
            <div className= ' container overflow-hidden d-flex flex-lg-row flex-md-row flex-column justify-content-center gap-4 align-items-center mt-lg-5 mt-4 mt-md-4'>

                {BlogData?.slice(0, 2).map((data, index) => {
                    return (

                        <div className="d-flex flex-column mx-2 col-lg-6 "data-aos="fade-left" data-aos-duration="1000" key={index}>
                            <Link
                                className="text-decoration-none text-black "
                                href={`blogs/${data?.attributes?.slug}`}
                                onClick={handleLoader}
                            >
                                <div>
                                    <img
                                        src={
                                            process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                            data?.attributes?.Featuredimage?.data?.attributes?.url
                                        }
                                        className="img-fluid rounded"
                                        alt="image"
                                    />
                                </div>
                                <div
                                    className="  ps-2 my-4  pe-1"
                                    style={{ height: "200px" }}
                                >
                                    <div className="d-flex  justify-content-start gap-5 align-items-start ">
                                        <h6>{data?.attributes?.PublishedDate}</h6>
                                    </div>
                                    <h5 >{data?.attributes.title}</h5>
                                    <p className="font14  me-1 text_justify">
                                        {" "}
                                        {(data?.attributes.FirstMainParagraphFullWidth).slice(0, 250)}...
                                    </p>
                                    <p style={{ color: "#0089C5" }} className="font14">
                                        Read More...
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })}


                
            </div>
            <div className='flex_property'> 
                <div className='col-lg-2 col-md-3 col-7'>

                
           <Link href="/blog"> <button onClick={handleLoader}    className="w-100 p-2 mt-lg-0 mt-md-0 mt-4 rounded-pill bg-transparent txt_blue fs-6 cursor animated-button">
                 View All Blogs
                </button></Link>
                </div>
                </div>

           
        </div>
    )
}

export default BlogSection
