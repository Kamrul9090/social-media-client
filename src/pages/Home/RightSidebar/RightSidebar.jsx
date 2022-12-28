import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
    return (
        <div className='w-full lg:w-1/4'>
            <ul className="menu bg-base-200 w-full rounded-xl">
                <div className="avatar flex items-center flex-col my-2">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    <p className='my-2 text-white'>name</p>
                </div>
                <div className="divider"></div>
                <li><Link to="/">Media</Link></li>
                <li><Link to="/">About</Link></li>
                <div className="divider"></div>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    );
};

export default RightSidebar;