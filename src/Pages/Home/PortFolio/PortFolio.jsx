import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Portfolio.css";

const PortFolio = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allprojects")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  return (
    <div className="mt-36">
      <h1 className="text-4xl text-center font-bold">My Recent Work</h1>
      <div className="mb-20 mt-20">
        {projectData.map((pd) => (
          <div
            key={pd._id}
            className="relative transition  duration-400  rounded"
          >
            <img
              src={pd.image1}
              alt=""
              className="w-72 h-96 md:mx-20 mx-10 object-cover"
            />
            <div className="bg-gradient-to-b from-transparent to-pink-500  w-72 h-96 md:mx-20 mx-10 bg-opacity-80 py-4 px-3 opacity-90    text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
              {/* The button to open modal */}
              <label
                htmlFor={pd._id}
                className="btn btn-sm bg-white border-0 text-red-500 font-bold   rounded-none mt-auto w-1/2"
              >
                View Detail <FaArrowRight />
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id={pd._id} className="modal-toggle rounded-none" />
              <div className="modal modal-bottom rounded-none sm:modal-middle mt-5">
                <div className="modal-box rounded-none">
                  <div class="image-wrap">
                    <img src={pd.image2} alt="" />
                  </div>
                  <p className="py-4 text-black">
                   {pd.description} <a className="text-purple-600 font-semibold" href={pd.liveSite}>Live Site</a>
                  </p>
                   <h3 className="text-black">Technology</h3>
                   <div className="grid grid-cols-4 text-center mt-2 gap-4 text-black font-semibold ">
                     <p className="bg-red-400 rounded-sm">{pd.tech1}</p>
                     <p className="bg-yellow-300 rounded-sm">{pd.tech2}</p>
                     <p className="bg-indigo-300 rounded-sm">{pd.tech3}</p>
                     <p className="bg-pink-300 rounded-sm">{pd.tech4}</p>
                   </div>
                  <div className="modal-action">
                    <label htmlFor={pd._id} className="btn btn-xs btn-square btn-outline absolute top-2 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;
