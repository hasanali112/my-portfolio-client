import React, { useEffect, useState } from 'react';
import { useCallback } from "react";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Blog.css'



const Blog = () => {
    const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("https://my-portfolio-server-iota-ebon.vercel.app/allprojects")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  const recentWork = projectData.filter(rw=> rw.status === 'recent')


    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    
      
    return (
        <div>
            <Particles
          id="tsparticle"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
            },
            particles: {
              number: { value: 10, density: { enable: true, value_area: 600 } },
              color: { value: "#ffffff" },
              shape: {
                type: "square",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.25,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 29,
                random: true,
                anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: false,
                distance: 300,
                color: "#ffffff",
                opacity: 0,
                width: 0,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "top",
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: false, mode: "repulse" },
                onclick: { enable: false, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 800, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 790,
                  size: 79,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: { distance: 400, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          }}
        />
         <div className='md:-mt-[560px] -mt-[989px]'> 
               <h1 className='mt-14 text-3xl ready font-bold text-white md:ml-14 ml-10'>Latest Blog & Update</h1>
              <div>
              <div  className="pb-14 mt-6  mx-6 grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-10">
        {recentWork.map((pd) => (
          <div
            key={pd._id}
            className="relative transition  duration-400  rounded"
          >
            <img
              src={pd.image1}
              alt=""
              className="w-72 h-96  mx-6 -z-2 object-cover"
            />
            <div className="bg-gradient-to-b from-transparent to-pink-500  w-72 h-96  mx-6 bg-opacity-80 py-4 px-3 opacity-90    text-gray-300 absolute inset-0 flex flex-col">
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
            </div>
        </div>
    );
};

export default Blog;