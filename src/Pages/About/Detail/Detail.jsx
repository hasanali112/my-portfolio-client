import React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "./Detail.css";
import project from '../../../assets/project.png'
import htmlcss from '../../../assets/html.png'
import javascript from '../../../assets/js.png'
import mern from '../../../assets/atom.png'

const Detail = () => {
  return (
    <div>
      <div>
        <h1 className="detail-about text-4xl font-bold mt-10 ml-10">
          About Me
        </h1>
        <p className="mx-9 detail-about mt-3 font-sans font-normal">
          I am a passionate and highly motivated MERN stack developer, eager to
          embark on a successful career in the world of web development. With a
          strong foundation in JavaScript, along with expertise in the MERN
          (MongoDB, Express.js, React.js, Node.js) stack, I am equipped with the
          skills and knowledge to bring innovative ideas to life. I am confident
          that my passion for web development, combined with my technical skills
          and determination, will make me a valuable asset to any team. I am
          ready to take on new challenges and contribute to the ever-evolving
          world of web development.
        </p>
      </div>
      <div className="mt-10 ml-9 mb-10">
        <h1 className="detail-about text-4xl font-bold">Skills</h1>
        <div className="grid grid-cols-1  md:grid-cols-3">
          <div className="mt-5">
            <h4 className="detail-about">HTML 85%</h4>
            <progress
              className="progress progress-info w-56"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="mt-4">
            <h4 className="detail-about">CSS 80%</h4>
            <progress
              className="progress progress-info w-56"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="mt-4">
            <h4 className="detail-about">JavaScript 70%</h4>
            <progress
              className="progress progress-info w-56"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="mt-4">
            <h4 className="detail-about">React 90%</h4>
            <progress
              className="progress progress-info w-56"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="mt-4">
            <h4 className="detail-about">Express 75%</h4>
            <progress
              className="progress progress-info w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="mt-4">
            <h4 className="detail-about">Node JS 65%</h4>
            <progress
              className="progress progress-info w-56"
              value="65"
              max="100"
            ></progress>
          </div>
          <div className="mt-4">
            <h4 className="detail-about">Mongodb 60%</h4>
            <progress
              className="progress progress-info w-56"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="mt-10  mb-10">
            <h1 className="detail-about text-4xl font-bold mb-6">Projects</h1>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:mx-0 mx-8 text-white">
           <div className="card w-48 h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
            <div className="card-body">
                <img src={project} alt="" className="w-14 ml-6"/>
              <h2 className="text-center detail-about text-xl font-bold">Total Project</h2>
              <p className="text-center text-2xl">20</p>
            </div>
          </div>
           <div className="card w-48 h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="card-body">
            <img src={htmlcss} alt="" className="w-14 ml-7"/>
              <h2 className="text-center detail-about text-xl font-bold">HTML & CSS</h2>
              <p className="text-center text-2xl">5</p>
            </div>
          </div>
           <div className="card w-48 h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
            <div className="card-body">
            <img src={javascript} alt="" className="w-14 ml-8"/>
              <h2 className="text-center detail-about text-xl font-bold">JavaScript</h2>
              <p className="text-center text-2xl">5</p>
            </div>
          </div>
           <div className="card w-48 h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
            <div className="card-body">
            <img src={mern} alt="" className="w-14 ml-8"/>
              <h2 className="text-center detail-about text-xl font-bold">MERN Stack</h2>
              <p className="text-center text-2xl">10</p>
            </div>
          </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
