import React from 'react';
import Footer from '../Footer/Footer';
import Post from './Post/Post';
import RightSidebar from './RightSidebar/RightSidebar';

const Home = () => {
    return (

        <div>
            <div className='flex flex-col lg:flex-row m-12'>
                <RightSidebar></RightSidebar>
                <div className='w-1/2'>
                    <Post></Post>
                </div>
                <div className='w-1/4'>
                    dasdsakbkdmfldkldskldfmlkkkldsdnsnkllnfsd
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;