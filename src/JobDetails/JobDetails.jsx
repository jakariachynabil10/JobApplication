import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const loadData = useLoaderData()
    const {jobId} = useParams()
    console.log(loadData , jobId)

    
   

   
    return (
        <>
            <h1>Job Details</h1>
        </>
    );
};

export default JobDetails;