import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';
import React from 'react';
import PostReact from './PostReact';
import PostComments from './PostComments';
const MediaPost = () => {

    const { data: postData = [], isLoading } = useQuery({
        queryKey: ["postData"],
        queryFn: async () => {
            const res = await fetch(`https://social-media-server-delta.vercel.app/post`)
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <PacmanLoader></PacmanLoader>
    }
    return (
        <section id='#media'>
            {
                postData.map(post => <div className="card card-compact w-80 lg:w-96 mx-auto shadow-xl my-10">
                    <figure><img src={post?.imageURL} alt="Shoes" /></figure>
                    <div className="card-body space-y-2">
                        <p>{post?.post}</p>
                        <div>
                            <PostReact key={post._id} id={post._id}></PostReact>
                            <PostComments key={post._id} id={post._id}></PostComments>
                        </div>
                    </div>
                </div>)
            }
        </section>
    );
};

export default MediaPost;