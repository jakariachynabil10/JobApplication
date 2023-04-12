import React from "react";

const JobCatg = ({ data }) => {
  const { id, img, about, name } = data;

  return (
    <>
      <div className="bg-blue-50 pt-5 card card-compact w-[250px] bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
        </div>
      </div>
    </>
  );
};

export default JobCatg;
