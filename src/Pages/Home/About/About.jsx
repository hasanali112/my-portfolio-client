import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="mt-28 mb-20"
    >
      <h1 className="text-center md:text-5xl text-3xl font-bold">
        About My Creative Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-x-4 md:mx-16 mt-16">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <img
            src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
            alt=""
            className="w-[600px]"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <h3 className="text-xl text-gray-500 font-bold">
            I am MERN stack developer.Being a MERN stack developer, I have a
            powerful and versatile set of tools at your disposal for building
            full-stack web applications I am proficient in using four key
            technologies:
          </h3>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className="grid grid-cols-1"
          >
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
        </div>
      </div>
    </div>
  );
};

export default About;
