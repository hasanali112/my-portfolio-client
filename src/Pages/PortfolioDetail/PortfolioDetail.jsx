import React from "react";
import { useLoaderData } from "react-router-dom";
import "./PortfolioDetail.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const PortfolioDetail = () => {
  const loadProject = useLoaderData();
  console.log(loadProject);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      
      <div>
        <Particles
          id="tsparticles"
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

        <div className="hero  min-h-screen md:-mt-[600px] -mt-[741px]">
          <div className="hero-content  min-h-screen space-x-10 flex-col lg:flex-row-reverse">
            <div class="image-wrap">
              <img
                src={loadProject.image2}
                className="rounded-lg  shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="md:text-4xl text-xl font-bold text-white">
                About This Project
              </h1>
              <h1 className="md:text-xl md:font-semibold mt-10 text-white">
                {loadProject.description} <a className="text-white" href={loadProject.liveSite} target="_blank">Live site</a>
              </h1>
              <h1 className="text-xl md:font-semibold mt-5 text-white">
                Technology
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mr-10 text-center mt-3">
                <p className="bg-red-400 rounded-sm text-black">
                  {loadProject.tech1}
                </p>
                <p className="bg-yellow-300 rounded-sm text-black">
                  {loadProject.tech2}
                </p>
                <p className="bg-indigo-300 rounded-sm text-black">
                  {loadProject.tech3}
                </p>
                <p className="bg-pink-300 rounded-sm text-black">
                  {loadProject.tech4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
