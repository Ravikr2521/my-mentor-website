"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';


const Slider = ({ section_three }) => {
  return (
    <div className='container mt-5'>
      <h2 className='text-center'>{section_three?.Heading}</h2>
      <div className="mt-5 ">
        <Marquee
          speed={50} 
          gradient={false} 
          loop={0} 
        >
          {section_three?.cards?.data.map((item, index) => (
            <div
              key={index}
              className="marquee-item"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.cardBackgroundimg.data.attributes.url}`}
                className="img-fluid  cursor mb-4"
                alt="Card"
                style={{height:"350px" , width:"94%"}}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
