import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Update from '../Update/Update';
import PortFolio from '../PortFolio/PortFolio';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <PortFolio></PortFolio>
           <Update></Update>
        </div>
    );
};

export default Home;