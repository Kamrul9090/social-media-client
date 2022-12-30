import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Post = () => {
    const [images, setImages] = useState("");

    // const imageHostKey = process.env.REACT_APP_image_bb_key;
    const imageHostKey = "c4f0af5fed6f65faa06eb02aa76e3727";
    const handlePostValue = e => {
        e.preventDefault();
        const post = e.target.post.value;
        const image = e.target.photo.files[0];
        console.log(image);
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imageURL = imageData.data.url;
                console.log(imageURL);
                setImages(imageData.data.url)

                const postData = {
                    post,
                    imageURL
                }

                fetch('http://localhost:5000/post', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Your Post added")
                        }
                    })
            })
    }



    return (
        <form onSubmit={handlePostValue} className='flex relative flex-col lg:mx-10 my-10 lg:my-0'>
            <textarea name='post' className="w-96 lg:w-full h-64 rounded-md shadow-md p-4 resize-none leading-tight focus:outline-none focus:shadow-outline-blue-500 bg-base-300" placeholder="Enter your input here...">
            </textarea>
            <input type="file" name='photo' className='absolute top-52 bg-base-100 rounded-2xl w-full lg:w-3/5' />
            <button type="submit" className='w-40 btn btn-outline btn-secondary mt-5'>Post</button>
        </form>
    );
};

export default Post;