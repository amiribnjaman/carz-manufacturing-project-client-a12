import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    //  Create a user using react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };

    // useEffect(()=> {
    //     if(user){
    //         console.log(user);
    //     }
    // }, [user])

    // Handle Sign in google popup
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    return (
        <div className='login-page md:pt-14'>
            <div className='w-11/12 mx-auto flex '>
                <div className='w-1/2'>
                </div>
                <div className='w-1/2 '>
                    <div class="p-6 max-w-md grid grid-cols-1 gap-3 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h2 className='text-xl font-semibold'>Login</h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            action="" className='grid grid-cols-1 gap-3'>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email field is required.'
                                    },
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                                type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Your Email" />
                            {errors.email?.type === 'required' && <span className='text-sm text-left text-red-800'>{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-sm text-left text-red-800'>{errors.email?.message}</span>}
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password field is required.'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password should longer or equal 8 characters.'
                                    }
                                })}
                                type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Your Password" />
                            {errors.password?.type === 'required' && <span className='text-sm text-left text-red-800'>{errors.password?.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-sm text-left text-red-800'>{errors.password?.message}</span>}

                            <button type="submit" class="text-white mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">LOGIN</button>
                        </form>

                        <p className='text-left'><small className=''>New to carZ? <Link to='/signup' className='text-blue-600'>Signup</Link></small></p>
                        <div className='flex items-center px-1'>
                            <div className='w-1/2 bg-black h-[1px]'></div>
                            <div className='px-3'>or</div>
                            <div className='w-1/2 bg-black h-[1px]'></div>
                        </div>

                        <button
                            onClick={handleSignInWithGoogle}
                            type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">SIGNIN WITH GOOGLE</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;