import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({ id, refetch }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const personalInfo = {
            name: data.name,
            email: data.email,
            address: data.address,
            school: data.school
        }
        fetch(`https://social-media-server-delta.vercel.app/userInfo/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(personalInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset()
                refetch()
            })
    }
    return (
        <>
            <label htmlFor="Edit-About" className="btn btn-primary mt-5">Edit</label>
            <input type="checkbox" id="Edit-About" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Edit-About" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add About You</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("name")} required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email")} required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("address")} required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your School</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("school")} required />
                        </div>
                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;