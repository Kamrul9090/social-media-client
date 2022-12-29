import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { loginWithGoogle, login } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login success")
                reset()
            })
            .catch(e => console.error(e.message))

    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success("Login Successful")
            })
            .catch(e => console.error(e))
    }


    return (
        <div className='bg-base-200 rounded-md'>
            <h1 className='text-3xl font-bold text-center text-purple-300'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-5">
                <div className='flex flex-col w-72 mx-auto'>
                    <label>Email</label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className='flex flex-col w-72 mx-auto'>
                    <label>Password</label>
                    <input type="password" {...register("password", { required: true })} className="input input-bordered w-full" />
                    {errors.password && <span>This field is required</span>}
                </div>
                <input type="submit" className="btn btn-outline btn-secondary w-72 mx-auto" />
                <small className='text-center'>Already have an account? <Link to="/signUp"><button className='text-fuchsia-500'>SignUp</button></Link></small>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn bg-blue-800 text-fuchsia-100 w-72 mx-auto'>Login with Google</button>
        </div>
    );
};

export default Login;