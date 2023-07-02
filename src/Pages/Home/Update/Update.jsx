import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const Update = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trending-blogs")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  const updateBlog = blogData.filter(bgdata=> bgdata.status === 'trending')

  return (
    <div>
      <Zoom>
        <h1 className="ready text-white font-bold text-4xl text-center mt-4">
          Get Update and & News
        </h1>
      </Zoom>
      <Zoom>
        <p className="ready text-white font-bold text-xl text-center mt-4">
          Here I will update everythings about how trending work and why its
          changes every year
        </p>
      </Zoom>
      <Zoom>
        <div className="pb-20 mt-20 md:mx-10 mx-4 md:pr-16 grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-10">
          {updateBlog.slice(0, 3).map((pd) => (
            <div
              key={pd._id}
              className="relative transition  duration-400  rounded"
            >
              <img
                src={pd.image}
                alt=""
                className="w-72 h-96 md:mx-20 mx-6 -z-2 object-cover"
              />
              <div className="bg-gradient-to-b from-transparent to-rose-500  w-72 h-96 md:mx-20 mx-6 bg-opacity-80 py-4 px-3 opacity-90    text-gray-300 absolute inset-0 flex flex-col">
                <Link className="mt-auto w-1/2" to={`/detail/${pd._id}`}>
                  <button className="btn btn-sm bg-white border-0 text-red-500 font-bold   rounded-none ">
                    View Detail <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Update;
