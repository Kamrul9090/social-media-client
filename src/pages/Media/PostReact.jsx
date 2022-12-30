import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';

const PostReact = ({ id }) => {
    const [react, setReact] = useState(1);
    const [updateReact, setUpdateReact] = useState(0);
    const handleReact = (id) => {
        setReact(react + 1);
        fetch(`https://social-media-server-delta.vercel.app/post/${id}?react=${react}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    fetch(`https://social-media-server-delta.vercel.app/post/${id}`)
                        .then(res => res.json())
                        .then(data => {
                            const myReact = data.react;
                            setUpdateReact(myReact)
                        })
                }
            })

    }

    return (
        <div className="flex items-center text-white font-semibold">
            <FcLike onClick={() => handleReact(id)} className='w-8 h-8'></FcLike>
            <small>{updateReact}</small>
        </div>
    );
};

export default PostReact;