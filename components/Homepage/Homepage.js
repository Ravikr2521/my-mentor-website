import React from 'react';
import Topuniversity from './Topuniversity/Topuniversity';
import StudentNumbers from '../globalcomponent/StudentNumbers';
import Marque from '../globalcomponent/Marque';
import FormSlider from './FormSlider/FormSlider';
import Countries from './Countries/Countries';
import Mentor from './Mentor/Mentor';
import Testimonial from './Testimonial/Testimonial';
import StartedWithMentor from './Startedwithmentor/StartedWithMentor';
import BlogSection from './BlogSection/BlogSection';
import Faq from './Faq/Faq';
import Qna from './Faq/Faq';
import StorySlider from './Services/Services';

function Homepage({ sectionOne, studentData, UniBannerOne, UniBannerTow, section_two, section_four, section_five, section_six,section_eight, section_nine, section_three }) {
    return (
        <div className='fade-in'>
            <Topuniversity sectionOne={sectionOne} />
            <div className="d-lg-block d-md-block d-none">
            <StudentNumbers StudentsData={studentData} /></div>
           
           <div className='mt-5'><Marque Data={UniBannerOne} Data2={UniBannerTow} /></div> 
            <FormSlider CarouselData={section_two} />
            <StorySlider data={section_three} />
            <Countries section_four={section_four} />
            <Mentor MentorData={section_five} />
            <Testimonial Testimonials={section_six} />
           <div className='mt-5' id="start-mentor"> <StartedWithMentor /></div>
            <BlogSection BlogData={section_eight}/>
           <div className='mt_100'><Qna Faqs={section_nine} /></div> 
        </div>
    );
}

export default Homepage;