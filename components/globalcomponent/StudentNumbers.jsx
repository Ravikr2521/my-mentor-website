import React from "react";

const StudentNumbers = ({ StudentsData }) => {
    return (
        <div className=" p-lg-5 p-2 bg-dark-blue ">
            <div className="d-flex my-lg-0 my-md-0 my-5 flex-lg-row  flex-md-row flex-row flex-wrap justify-content-between align-items-center text-white">
                {StudentsData?.map((item, index) => {
                    return (
                    
                    <div className="col-lg-2 col-md-2 col-4 d-flex flex-column justify-content-center align-items-center  p-lg-0 p-2 text-center" key={index}>
                        <p className="fw-bold  m-0 h5">{item.Heading} </p>
                            <p className="m-0 smallFont mx-2 mt-lg-0 mt-2 mb-lg-0 mb-3 "> {item.Description}</p>
                    </div>)
                })}

            </div>
        </div>
    );
};

export default StudentNumbers;
