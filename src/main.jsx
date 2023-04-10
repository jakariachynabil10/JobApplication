import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import Statistics from './Statistics/Statistics';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Blog from './Blog/Blog';
import { NormalDataLoad } from './normalDataLoad/NormalDataLoad';
import JobDetails from './JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : NormalDataLoad,
      },
      {
        path : 'home',
        element : <Home></Home>,
        loader : NormalDataLoad
      },
      {
        path : 'jobDetails/:jobId',
        element : <JobDetails></JobDetails>,
        loader : () => fetch(`/jobData.json`)
      },
      {
        path : 'statistics',
        element : <Statistics></Statistics>
      },
      {
        path : 'appliedJobs',
        element : <AppliedJobs></AppliedJobs> 
      },
      {
        path : 'blog',
        element : <Blog></Blog> 
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
