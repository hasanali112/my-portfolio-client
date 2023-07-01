import React, { useEffect, useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar  text-white site-navbar  site-navbar-target ${
      scrolled ? ' bg-[#2E2252]' : ''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
              <li><Link className="hover:bg-blue-500 hover:text-white" to='/'>Home</Link></li>
          <li><Link className="hover:bg-blue-500 hover:text-white" to='/about'>About</Link></li>
         <li><a>Blog</a></li>
         <li><Link className="hover:bg-blue-500 hover:text-white"  to='/dashboard'>Dashboard</Link></li>
         <li><a>Login</a></li>
          </ul>
        </div>
       <Link to='/'> <a className="font-bold md:ml-14  text-xl">My Creative Journey</a></Link>
      </div>
      <div className="navbar-center navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className="hover:bg-blue-500 hover:text-white" to='/'>Home</Link></li>
          <li><Link className="hover:bg-blue-500 hover:text-white" to='/about'>About</Link></li>
         <li><a>Blog</a></li>
         <li><Link className="hover:bg-blue-500 hover:text-white"  to='/dashboard'>Dashboard</Link></li>
         <li><a>Login</a></li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
