"use client";
import React from "react";
import Marquee from "react-fast-marquee";


const Marque = ({ Data,Data2 }) => {

    return (
        <div className="container uni w-100">


          <div className="d-flex justify-content-center align-items-center">
                <div className=" white_shade">
                    <Marquee>
                        <div className=" mx-2 mt-2 mb-lg-4 uni-list">
                            {Data.map(

                                (item, index) => {
                                    return (
                                        <img
                                            src={
                                                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                                item?.attributes?.url
                                            }
                                            alt="uni"
                                            className="img-fluid mx-2"
                                            key={index}
                                        />
                                    );
                                }
                            )}

                        </div>
                    </Marquee>
                    <Marquee direction="right">
                        <div className=" mx-2 mt-2 mb-lg-4 uni-list">
                            {Data2.map(

                                (item, index) => {
                                    return (
                                        <img
                                            src={
                                                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                                item?.attributes?.url
                                            }
                                            alt="uni"
                                            className="img-fluid  mx-2"
                                            key={index}
                                        />
                                    );
                                }
                            )}

                        </div>
                    </Marquee>
                </div>
          </div>



        </div>
    );
};

export default Marque;
