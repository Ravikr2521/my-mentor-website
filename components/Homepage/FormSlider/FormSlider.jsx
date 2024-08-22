'use client'
import CarouselForm from '@/components/globalcomponent/CarouselForm';
// import CarouselForm from '@/components/CarouselForm';
import React, { useEffect, useState } from 'react'

const FormSlider = ({ CarouselData }) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // console.log(CarouselData , "CarouselData")

    return (
        <div className="container mt-lg-5 mb-5 ">
            <div id="carouselExampleControls" className="carousel slide mt-5 d-lg-block " data-bs-ride="carousel">
                <div className="carousel-inner rounded ">
                    {CarouselData?.map((item, index) => {
                        return (
                            <div className={`carousel-item h-auto ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className=''>
                                    <div className={`d-flex flex-lg-row flex-column justify-content-center align-items-center carousel_slider_img p-5 ${isMobile ? 'bg-none-mobile' : ''}`} style={{
                                        backgroundImage: !isMobile && `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.cardBackgroundimg.data.attributes.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundColor: isMobile && index === 0 ? '#A9C8E0' : index === 1 ? '#3E3770' : index === 2 ? '#66677D' : index === 3 ? '#7D6667' : index === 4 ? '#6E7D65' : "#7D677E",
                                    }} >
                                        <div className='col-lg-7 col-md-6 '>
                                        </div>
                                        <div className='col-lg-4 col-md-6  p-lg-4  d-flex flex-column justify-content-end '>
                                            <div className=' '> <p className={`text_start h5  ${index === 0 ? "text-blue" : "text-white"} `}>{item.attributes.card_content}</p></div>

                                            <div className='mt-4 ' data-aos="fade-right" data-aos-duration="1000"><CarouselForm color={item?.attributes?.css} index={index} /></div>


                                        </div>
                                    </div>

                                </div>

                            </div>

                        )
                    })}

                </div>
                <button className="carousel-control-prev previous_icon " style={{ marginLeft: "-1%" }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next next_icon " style={{ marginRight: "-2%" }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default FormSlider
