import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';
import React from 'react';
import PostReact from './PostReact';
import PostComments from './PostComments';
const MediaPost = () => {

    const { data: postData = [], isLoading } = useQuery({
        queryKey: ["postData"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/post`)
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <PacmanLoader></PacmanLoader>
    }
    return (
        <section id='#media' className="">
            {
                postData.map(post => <div className="card card-compact w-96 mx-auto shadow-xl my-10">
                    <figure><img src={post?.imageURL} alt="Shoes" /></figure>
                    <div className="card-body space-y-2">
                        <p>{post?.post}</p>
                        <div>
                            <PostReact key={post._id} id={post._id}></PostReact>
                            <PostComments key={post._id} id={post._id}></PostComments>
                        </div>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>)
            }
        </section>
    );
};

export default MediaPost;