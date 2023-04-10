import React from "react";
import personImg from "../assets/All Images/P3OLGJ1 copy 1.png";
import JobCatg from "./JobCatg";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadNormalData = useLoaderData()
  // console.log(loadNormalData)
 
  return (
    <>
      {/* Banner section */}
      <section className="">
        <div className="lg:flex justify-center items-center mx-16">
          <div className="pt-10">
            <h2 className="font-extrabold font-family text-5xl">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-blue-200">Dream Job</span>
            </h2>
            <p className="pt-6 font-medium text-lg">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br /> your job application from start to finish.
            </p>
            <button className="border rounded-lg px-7 text-white mt-8 py-4 font-semibold btn-color">
              Get Started
            </button>
          </div>
          <div>
            <img src={personImg} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-32">
      <h2 className="font-bold text-5xl text-center">Job Category List</h2>
        <p className="text-center pt-4 font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      <div className="lg:flex justify-center items-center gap-4 mt-8">
      {
        loadNormalData.map(data => <JobCatg key={data.id} data={data}></JobCatg>)
       }
      </div>
      </section>
    </>
  );
};

export default Home;
