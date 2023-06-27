import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner md:bg-fixed">
      <div className="bg-black bg-opacity-50 md:p-60">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl md:pt-5 pt-32 font-bold text-white">
            Welcome To  My Creative Journey
          </h1>
          <p className="md:text-xl  text-base font-normal text-white mt-4 mb-5">
            Bringing Ideas to Life. Navigate Through My Portfolio of Innovative
            Creations. Discover My Journey and Works
          </p>
          <button className="btn  btn-active bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white rounded-none mr-3 mb-3">Download Reaume</button>
          <button className="btn btn-active btn-neutral rounded-none">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
