import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Update from "../Update/Update";
import PortFolio from "../PortFolio/PortFolio";
import "./Home.css";

const Home = () => {
  

  return (
    <div>
      <Banner></Banner>
      <div id="homebg">
        <About></About>
        <PortFolio></PortFolio>
        <Update></Update>
      </div>
    </div>
  );
};

export default Home;
