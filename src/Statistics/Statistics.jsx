import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assaigmentData = useLoaderData()
    console.log(assaigmentData)
    return (
        <>
       <div className='flex justify-center items-center mt-5'>
       <LineChart
        width={500}
        height={300}
        data={assaigmentData}
        >
            <Line dataKey='marks' stroke="#8884d8"></Line>
            <Line dataKey='marks' stroke="#8884d8"></Line>
            <XAxis dataKey='assignment'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
       </div>
        </>
    );
};

export default Statistics;