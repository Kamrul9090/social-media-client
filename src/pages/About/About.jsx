import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PacmanLoader } from 'react-spinners';
import Modal from '../../components/Modal/Modal';

const About = () => {

    const { data: usersInfo = [], isLoading, refetch } = useQuery({
        queryKey: ["userInfo"],
        queryFn: async () => {
            const res = await fetch(`https://social-media-server-delta.vercel.app/userInfo`)
            const data = res.json();
            return data;
        }
    })
    console.log(usersInfo);
    if (isLoading) {
        return <PacmanLoader></PacmanLoader>
    }
    return (
        <div className='mt-10'>
            <ul className="menu bg-base-100 text-white w-56 space-y-5">
                <h1 className='text-center text-2xl font-semibold'>About Me</h1>
                <li>Name:<a>{usersInfo[0]?.name}</a></li>
                <li>Email:<a>{usersInfo[0]?.email}</a></li>
                <li>Adress:<a>{usersInfo[0]?.address}</a></li>
                <li>School/University:<a>{usersInfo[0]?.school}</a></li>
                <li><a>School</a></li>
            </ul>
            <Modal key={usersInfo[0]?._id} id={usersInfo[0]?._id} refetch={refetch}></Modal>
        </div>
    );
};

export default About;