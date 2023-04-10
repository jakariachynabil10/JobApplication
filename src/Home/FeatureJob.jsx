import React from 'react';
import locationIcon from "../assets/Icons/Location Icon.png"
import sallaryIcon from '../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

const FeatureJob = ({data}) => {
    const {brand_name , company_name, location, salary, img, id, position } = data
    return (
        <>
          <div className='border rounded-lg  p-10 w-full'>
            <img className='h-[39.98px]' src={img} alt="" />
            <h2 className='pt-8 font-bold text-2xl'>{company_name}</h2>
            <p className='font-semibold text-xl text-gray-400 pt-2'>{brand_name}</p>
            <div className='flex gap-3 mt-4'>
                <div>
                    <button className='border border-blue-300 font-bold text-base rounded-lg py-2 px-5 text-blue-300'>{position}</button>
                </div>
                <div>
                <button className='border border-blue-300 font-bold text-base rounded-lg py-2 px-5 text-blue-300'>Full Time</button>
                </div>
            </div>
          <div className='flex gap-5 pt-4'>
          <p className='flex'><img src={locationIcon} alt="" />{location}</p>
          <p className='flex'><img src={sallaryIcon} alt="" />{salary}</p>
          </div>
        <Link to={`jobDetails/${id}`}>  <button className="border rounded-lg px-7 text-white mt-6 py-4 font-semibold btn-color">
          View Details
            </button></Link>
            </div>  
        </>
    );
};

export default FeatureJob;