import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Home></Home>
        </div>

    );
};

export default Main;