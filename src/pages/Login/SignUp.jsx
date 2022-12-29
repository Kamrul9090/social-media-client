import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserName } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateName(data.name)
                console.log(user);
                toast.success("Sign Up Success")
                reset()
            })
            .catch(e => console.error(e.message))
    }

    const updateName = (name) => {
        const profile = {
            displayName: name
        }

        updateUserName(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-purple-300'>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-5">
                <div className='flex flex-col w-80 mx-auto'>
                    <label>Name</label>
                    <input {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col w-80 mx-auto'>
                    <label>Email</label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className='flex flex-col w-80 mx-auto'>
                    <label>Password</label>
                    <input type="password" {...register("password", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <span>This field is required</span>}
                </div>
                <input type="submit" className="btn btn-outline btn-secondary w-80 mx-auto" />
                <small className='text-center'>Already have an account? <Link to="/"><button className='text-fuchsia-500'>Login</button></Link></small>
            </form>

        </div>
    );
};

export default SignUp;