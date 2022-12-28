import React, { useState } from 'react';

const Post = () => {
    const [postValue, setPostValue] = useState("");
    const handlePost = e => {
        setPostValue(e.target.value);
    }

    return (
        <form className='flex relative flex-col mx-10'>
            <textarea onChange={handlePost} class="w-full h-64 rounded-md shadow-md p-4 resize-none leading-tight focus:outline-none focus:shadow-outline-blue-500 bg-base-300" placeholder="Enter your input here...">
            </textarea>
            <input type="file" name='photo' className='absolute top-52 bg-base-100 rounded-2xl w-full lg:w-3/5' />
            <button type="submit" className='w-40 btn mt-5'>Post</button>
        </form>
    );
};

export default Post;