import React from 'react';
import DashboardBanner from '../Pages/Dashboard/DashboardBanner/DashboardBanner';
import {  NavLink, Outlet, useLocation } from 'react-router-dom';
import '../Layout/Dashboard.css'
import { FaBloggerB, FaChalkboardTeacher, FaHome, FaRegCalendarAlt} from "react-icons/fa";
import userImg from '../assets/unnamed.jpg'

const Dashboard = () => {
    const location = useLocation()

    const noBanner = location.pathname.includes('/dashboard/addproject')|| location.pathname.includes('/dashboard/addblog')
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    {noBanner || <DashboardBanner></DashboardBanner>}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 h-full bg-neutral">
      {/* Sidebar content here */}
      <li className='title ml-3 text-white text-xl font-bold'>My Creative Journey</li>
      <li>
           <img src={userImg} alt=""  className="rounded-full w-28  ml-10 mt-3"/>
      </li>
      <li className="text-white  title text-base ml-6">MD HASAN ALI KHAN</li>
      <li><NavLink className='text-white hover:text-white ml-2 title text-base mt-16' to='/dashboard'><FaChalkboardTeacher/>Admin Dashboard</NavLink></li>
      <li><NavLink className='text-white hover:text-white ml-2 title text-base mt-3' to='/dashboard/addproject'><FaRegCalendarAlt/>Add Project</NavLink></li>
      <li ><NavLink className='text-white hover:text-white ml-2 title text-base mt-3 mb-3' to='/dashboard/addblog'><FaBloggerB/>Add blog</NavLink></li>
      <hr />
      <li><NavLink className='text-white hover:text-white  ml-2 title text-base mt-3' to='/'><FaHome/> Home</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;