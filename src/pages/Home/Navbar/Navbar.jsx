import React from 'react';
const Navbar = () => {
    return (
        <div className="navbar bg-white rounded-lg">
            <div className="navbar-start">
                <div className="">
                    <a className="font-bold font-mono uppercase text-xl hidden lg:block text-black">Chat-Post</a>
                </div>
            </div>
            <div className="navbar-center">
                <button className="pl-2 absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <input type="text" placeholder="Search here" className="pl-20 mr-2 lg:pl-10 input input-sm input-lg input-bordered w-full max-w-sm" />
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;