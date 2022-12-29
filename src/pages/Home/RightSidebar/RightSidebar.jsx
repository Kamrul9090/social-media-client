import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const RightSidebar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='w-full lg:w-1/4'>
            <ul className="menu bg-base-200 w-full rounded-xl">
                <div className="avatar flex items-center flex-col my-2">
                    <div className="w-16 rounded-full">
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt="" />
                                :
                                <img src="https://placeimg.com/192/192/people" alt="" />
                        }
                    </div>
                    <p className='my-2 text-white'>{user?.displayName}</p>
                </div>
                <div className="divider"></div>
                <li><a href="#media">Media</a></li>
                <li><Link to="/">About</Link></li>
                <div className="divider"></div>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    );
};

export default RightSidebar;