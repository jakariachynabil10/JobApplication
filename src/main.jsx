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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : 'home',
        element : <Home></Home>
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
