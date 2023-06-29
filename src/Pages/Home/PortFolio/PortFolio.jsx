import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const PortFolio = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allprojects")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  const recentWork = projectData.filter(rw=> rw.status === 'recent')

  return (
    <div className="mt-32 pb-20">
      <h1 className="text-4xl text-center text-white font-bold">My Recent Work</h1>
      <div className="mb-20 mt-20 md:mx-24 mx-4 grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-10">
        {recentWork.slice(0, 3).map((pd) => (
          <div
            key={pd._id}
            className="relative transition  duration-400  rounded"
          >
            <img
              src={pd.image1}
              alt=""
              className="w-72 h-96 md:mx-20 mx-6 -z-2 object-cover"
            />
            <div className="bg-gradient-to-b from-transparent to-pink-500  w-72 h-96 md:mx-20 mx-6 bg-opacity-80 py-4 px-3 opacity-90    text-gray-300 absolute inset-0 flex flex-col">
              <Link className="mt-auto w-1/2" to={`/detail/${pd._id}`}> <button
                className="btn btn-sm bg-white border-0 text-red-500 font-bold   rounded-none "
              >
                View Detail <FaArrowRight />
              </button></Link>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;



