import React from 'react';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import MediaPost from '../Media/MediaPost';
import Post from './Post/Post';
import RightSidebar from './RightSidebar/RightSidebar';

const Home = () => {

    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:m-12'>
                <RightSidebar></RightSidebar>
                <div className='w-1/2'>
                    <Post></Post>
                    <MediaPost></MediaPost>
                </div>
                <div className='w-full lg:w-1/4'>
                    <Login></Login>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;