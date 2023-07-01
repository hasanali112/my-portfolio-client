import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-16">
      <h1
        data-aos="zoom-in-down"
        className="text-center text-white md:text-4xl text-3xl font-bold"
      >
        About My Creative Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-x-4 md:mx-16 mt-16">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
            alt=""
            className="w-[600px]"
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="text-xl text-white font-bold">
            I am MERN stack developer.Being a MERN stack developer, I have a
            powerful and versatile set of tools at your disposal for building
            full-stack web applications I am proficient in using four key
            technologies:
          </h3>
          <div className="grid grid-cols-1 text-white">
            <p className="mt-4 font-semibold inline-flex items-center">
              <FaCheck style={{ color: "green" }} className="mr-3" /> React.js
            </p>
            <p className="mt-3 font-semibold inline-flex items-center">
              <FaCheck style={{ color: "green" }} className="mr-3" /> Express.js
            </p>
            <p className="mt-3 font-semibold inline-flex items-center">
              <FaCheck style={{ color: "green" }} className="mr-3" /> Node.js
            </p>
            <p className="mt-3 font-semibold inline-flex items-center">
              <FaCheck style={{ color: "green" }} className="mr-3" /> MongoDB
            </p>
          </div>
          <Link to="/about">
            <button className="btn  btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white rounded-none px-8 mt-6">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
