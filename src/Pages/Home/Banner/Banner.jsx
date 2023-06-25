import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner md:bg-fixed">
      <div className="bg-black bg-opacity-50 md:p-60">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl pt-20 font-bold text-white">
            Welcome To  My Creative Journey
          </h1>
          <p className="md:text-xl  text-base font-normal text-white mt-4 mb-5">
            Bringing Ideas to Life. Navigate Through My Portfolio of Innovative
            Creations. Discover My Journey and Works
          </p>
          <button className="btn  btn-active btn-success rounded-none mr-3 mb-3">Explore Now</button>
          <button className="btn btn-active btn-neutral rounded-none">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
