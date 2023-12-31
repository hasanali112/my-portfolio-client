import React from "react";
import "./Banner.css";

const Banner = () => {

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '../../../../public/Hasan Resume.pdf';
    link.download = 'filename.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  };



  return (
    <div className="banner md:bg-fixed">
      <div className="bg-black bg-opacity-50 md:p-60">
        <div className="text-center">
          <h1 className="md:text-4xl ready text-2xl md:pt-5 pt-32 font-bold text-white">
            Welcome To  My Creative Journey
          </h1>
          <p className="md:text-xl ready text-base font-normal text-white mt-4 mb-5">
          Hello, I'm Hasan. I am a passionate and highly motivated MERN stack developer, eager to embark on a successful career in the world of web development. With a strong foundation in JavaScript, along with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I am equipped with the skills and knowledge to bring innovative ideas to life.
          </p>
          <button onClick={downloadPDF} className="btn  btn-active bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white rounded-none mr-3 mb-3">Download Reaume</button>
          <button className="btn btn-active btn-neutral rounded-none">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
