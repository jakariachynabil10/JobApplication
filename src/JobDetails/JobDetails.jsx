import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import SingleJob from './SingleJob';
import calander from "../assets/Icons/Frame-1.png";
import sallaryIcon from "../assets/Icons/Frame.png";
import phoneIcon from "../assets/Icons/Frame-2.png";
import emailIcon from "../assets/Icons/Frame-3.png";
import address from "../assets/Icons/Frame-4.png";
import { addToDb } from "../localStorage/LocalStorage";




const JobDetails = () => {
  const { jobId } = useParams();
  const loadData = useLoaderData();
  // console.log(loadData , jobId)
  const [jobsId, setJobsId] = useState([]);
  useEffect(() => {
    const find = loadData.find((data) => data.id == jobId);
    // console.log(find);
    setJobsId(find);
  }, [jobId, loadData]);
  // console.log(jobsId)
  const {
    id,
    description,
    responsibility,
    educational_requirements,
    experience,
    salary,
    job_title,
    email,
    phone_number,
    location,
  } = jobsId;

  const handleToApplyNow = (id) =>{
    // console.log(id)
    addToDb(id)
  }

  return (
    <>
      <section className="bg-color ">
        <h1 className="text-center font-bold py-24 text-5xl">Job Details</h1>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <div className="mx-10">
            <p className="py-4">
              <span className="font-bold text-base">Job Description:</span>{" "}
              {description}
            </p>
            <p className="py-4">
              <span className="font-bold text-base">Job Responsibility:</span>{" "}
              {responsibility}
            </p>
            <p className="py-4">
              <span className="font-bold text-base">
                Educational Requirements:
              </span>{" "}
              {educational_requirements}
            </p>
            <p>
              <span className="font-bold text-base">Experiences:</span>{" "}
              {experience}
            </p>
          </div>
         <div className="flex flex-col">
         <div className="border w-[350px] mx-4 p-7 rounded-xl mt-4 border-blue-100 bg-blue-100">
            <h2 className="font-bold text-xl">Job Details</h2>
            <hr className="mt-4" />
            <div className=" gap-5 pt-4">
              <p className="flex font-semibold">
                <img src={sallaryIcon} alt="" /> Salary : {salary}
              </p>
              <p className="flex  font-semibold pt-5">
                <img src={calander} alt="" /> Job Title :{job_title}
              </p>
            </div>
            <h2 className="font-bold text-xl pt-5">Contact Information</h2>
            <hr className="mt-4" />
            <div className=" gap-5 pt-4">
              <p className="flex font-semibold">
                <img src={phoneIcon} alt="" /> Phone : {phone_number}
              </p>
              <p className="flex  font-semibold pt-5">
                <img src={emailIcon} alt="" /> email :{email}
              </p>
              <p className="flex  font-semibold pt-5">
                <img src={address} alt="" /> Location :{location}
              </p>
            </div>
          </div>
            <button onClick={() => handleToApplyNow(id)} className="border w-[350px] ml-4 rounded-lg px-7 text-white mt-8 py-4 font-semibold btn-color">
            Apply Now
            </button>
         </div>
      </div>
    </>
  );
};

export default JobDetails;
