'use client'
import CustomForm from '@/components/DynamicComponents/CustomForm';
import React from 'react';
function StartedWithMentor() {

   
    return (
        <div className='flex_property' >
        
        <div className='p-lg-0 container p-md-0 '>
            <div className='d-flex'>
                <div className='col-12'>
                    <div className='position-relative' >
                        <img
                            className='w-100' src='/img/caption.png'>
                        </img>
                        <div className='d-flex flex_property get-started p-lg-0 p-md-0 ' data-aos='fade-up' data-aos-duration="1000">
                            <div style={{backgroundColor:"#F5F5F5"}} 
                         className='col-lg-10 col-md-11 rounded'>

                               <div ><CustomForm/></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default StartedWithMentor;