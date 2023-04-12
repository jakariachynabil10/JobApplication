import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewApplied from "./ReviewApplied";

const AppliedJobs = () => {
  const DataLoader = useLoaderData();
  const [dataCart, setDataCart] = useState(DataLoader);
  const [selectedOption, setSelectedOption] = useState('all');

  // useEffect( () =>{

  // }, [])

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === 'remote') {
      const remoteData = DataLoader.filter(item => item.position === 'remote');
      setDataCart(remoteData);
    } else if (option === 'onsite') {
      const onsiteData = DataLoader.filter(item => item.position === 'onsite');
      setDataCart(onsiteData);
    } else {
      setDataCart(DataLoader);
    }
  }
  return (
    <>
      <div className="flex justify-end">
        <ul className="menu menu-horizontal px-1 ">
          <li tabIndex={0}>
            <button className="border py-2 px-4 bg-white shadow-lg">
              Filter
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </button>
            <ul className="p-2 bg-base-100">
              <li>
                <Link><button onClick={() => handleOptionChange('remote')}>Remote</button></Link>
              </li>
              <li>
              <Link><button  onClick={() => handleOptionChange('onsite')}>Onsite</button></Link>

              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        {dataCart.map((d) => (
          <ReviewApplied key={d.id} d={d}></ReviewApplied>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
