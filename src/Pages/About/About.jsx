import React from "react";
import aboutImg from '../../assets/unnamed.jpg'
import "@fontsource/roboto"; 
import "@fontsource/roboto/400.css"; 
import './About.css'
import { Link } from "react-router-dom";
import Detail from "./Detail/Detail";
import { FaDownload, FaHome } from "react-icons/fa";



const About = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <Detail></Detail>
    <label htmlFor="my-drawer-2" className="btn btn-xs btn-outline btn-primary drawer-button lg:hidden mb-20 ml-32">View Profile</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 md:w-72 w-72 h-full bg-gray-200 text-base-content">
          {/* Sidebar content here */}
          <li>
           <img src={aboutImg} alt=""  className="rounded-full w-44  ml-10"/>
          </li>
          <li className="text-xl font-bold font-sans text-center">MD HASAN ALI KHAN</li>
          <li className="text-base  font-sans font-semibold text-center">MERN Stack Developer</li>
          <li  className="abouts text-base font-medium ml-4 mt-10">mdhasan.alikhan67@gmail.com</li>
          <li className="abouts text-base  text-left ml-4">Phone: +8801307034372</li>
          <li className="abouts text-base  text-left ml-4">Address: Rajshahi, Bangladesh</li>
          <div className="abouts flex  text-base space-x-3 items-center ml-4">
          <li>LinkdIn:</li>
          <a className="text-purple-600" href="https://www.linkedin.com/in/md-hasan-ali-khan/" target="_blank">MD Hasan Ali Khan</a>
          </div>
          <div className="abouts flex  text-base space-x-3 items-center ml-4">
          <li>GitHub:</li>
          <a className="text-purple-600" href="https://github.com/hasanali112" target="_blank">hasanali112</a>
          </div>
          <div className="grid grid-cols-2 gap-3 ml-4 mt-6">
          <button className="btn btn-sm btn-outline rounded-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white "><FaDownload/> Resume</button>
          <Link to='/'><button className="btn btn-sm btn-outline rounded-none btn-neutral"><FaHome/> Home</button></Link> 
          </div>
        </ul>
  </div>
</div>
  );
};

export default About;


