import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';

const Main = () => {
    const location = useLocation()

    const noHeaderFooter = location.pathname.includes('about')
    return (
        <div>
          {noHeaderFooter ||  <Header></Header>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;