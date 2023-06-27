import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/dashboard.json";
import Chart from "./Chart/Chart";

const DashboardBanner = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-4">DashBoard</h1>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-20  gap-6 md:mx-4 mx-8 text-white">
            <div className="card w-40 h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
              <div className="card-body">
                <h2 className=" detail-about text-xl font-bold">All Project</h2>
                <p className="text-center detail-about  text-xl">20</p>
              </div>
            </div>
            <div className="card w-40 h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
              <div className="card-body">
                <h2 className="text-center detail-about text-xl font-bold">
                  All Blog
                </h2>
                <p className="text-center detail-about  text-xl">5</p>
              </div>
            </div>
            <div className="card w-40 h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
              <div className="card-body">
                <h2 className="text-center detail-about text-xl font-bold">
                  All Users
                </h2>
                <p className="text-center detail-about text-xl">5</p>
              </div>
            </div>
          </div>
          <Chart></Chart>
        </div>
        <div>
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            className="w-3/4 mx-auto mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
