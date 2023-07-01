import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Update from "../Update/Update";
import PortFolio from "../PortFolio/PortFolio";
import "./Home.css";
import ReadyToWork from "../ReadToWork/ReadyToWork";
import Contact from "../Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  

  return (
    <div>
      <Helmet>
        <title>Home | My Creative Journey</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <div id="homebg">
        <About></About>
        <PortFolio></PortFolio>
        <ReadyToWork></ReadyToWork>
        <Update></Update>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
