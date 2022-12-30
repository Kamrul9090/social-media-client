import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PostComments = ({ id }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [myComment, setMyComment] = useState("");
    const [updateComment, setUpdateComment] = useState([])
    const { data: comments = [], refetch } = useQuery({
        queryKey: ["comments"],
        queryFn: async () => {
            const res = await fetch(`https://social-media-server-delta.vercel.app/comments`)
            const data = await res.json()
            return data;
        }
    })

    const handleCommentButtonClick = () => {
        setIsVisible(!isVisible);
    };

    const handleAddComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const addComment = { comment }
        // fetch(`https://social-media-server-delta.vercel.app/comments`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addComment)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if (data.acknowledged) {
        //         form.comment.value = "";
        //         toast.success("comment success")
        //         refetch()
        //     }
        // })
    }

    const handleTextComment = event => {
        setMyComment(event.target.value)
    }

    const addComment = (id) => {
        // setCommentId(id)
        fetch(`https://social-media-server-delta.vercel.app/comments/${id}?comment=${myComment}`, {
            method: 'POST',
            body: JSON.stringify({ myComment })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    fetch(`https://social-media-server-delta.vercel.app/comments/${id}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            const comment = data[0].react;
                            setUpdateComment(data)
                            toast.success("comment success")
                        })
                }
            })
    }
    console.log(updateComment);

    return (
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
                    <div class="comment">
                        <p class="text-white font-bold py-2 px-4">{updateComment[0]?.react}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleAddComment}>
                <textarea
                    onChange={handleTextComment}
                    name='comment'
                    id="comment-input"
                    className="bg-gray-200 rounded-lg py-2 px-4 block w-full leading-5 focus:outline-none focus:bg-white mb-2"
                    placeholder="Write your comment here"
                />
                <button
                    onClick={() => addComment(id)}
                    type='submit'
                    className="bg-fuchsia-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    id="submit-button"
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default PostComments;