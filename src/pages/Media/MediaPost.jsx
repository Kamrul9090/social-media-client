import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';
import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { toast } from 'react-hot-toast';
const MediaPost = () => {
    // const [myComment, setMyComment] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [react, setReact] = useState(0);
    const { data: postData = [], isLoading } = useQuery({
        queryKey: ["postData"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/post`)
            const data = await res.json();
            return data;
        }
    })

    const { data: comments = [], refetch } = useQuery({
        queryKey: ["comments"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments`)
            const data = await res.json()
            return data;
        }
    })

    console.log(comments);
    const handleCommentButtonClick = () => {
        setIsVisible(!isVisible);
    };

    const handleAddComment = (e) => {
        e.preventDefault()
        console.log(e);
        const form = e.target;
        const comment = form.comment.value;
        const addComment = { comment }
        fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addComment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.comment.value = "";
                    toast.success("comment success")
                    refetch()
                }
            })
    }

    const handleReact = () => {
        setReact(react + 1);
    }




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
                            <div onClick={handleReact} className="flex items-center text-white font-semibold">
                                <FcLike className='w-8 h-8'></FcLike>
                                <small>{react}</small>
                            </div>
                            <div className='mt-2'>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-2"
                                    id="comment-button"
                                    onClick={handleCommentButtonClick}
                                >
                                    All Comment
                                </button>
                                <div
                                    id="comment-container"
                                    className={`${isVisible ? '' : 'hidden'}`}
                                >
                                    <div>
                                        {
                                            comments?.map(comment =>
                                                <div class="comment">
                                                    <p class="text-white font-bold py-2 px-4">{comment?.comment}</p>
                                                </div>)
                                        }
                                    </div>
                                </div>

                                <form onSubmit={handleAddComment}>
                                    <textarea
                                        name='comment'
                                        id="comment-input"
                                        className="bg-gray-200 rounded-lg py-2 px-4 block w-full leading-5 focus:outline-none focus:bg-white mb-2"
                                        placeholder="Write your comment here"
                                    />
                                    <button
                                        type='submit'
                                        className="bg-fuchsia-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                        id="submit-button"
                                    >
                                        Add Comment
                                    </button>
                                </form>


                            </div>
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