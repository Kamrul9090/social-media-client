import React from 'react';
import EditAbout from '../pages/About/EditAbout';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Home></Home>
            {/* <EditAbout></EditAbout> */}
        </div>

    );
};

export default Main;