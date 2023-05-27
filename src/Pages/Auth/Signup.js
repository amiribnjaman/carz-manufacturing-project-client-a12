import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    const [createUserWithEmailAndPassword, creatingUser, creatingLoading, creatingError,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const [customSignupError, setCustomSignupError] = useState('');


    //  Create a user using react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        reset()
    };

    // Handle Sign in google popup
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    // if (googleError) {
    //     console.log(googleError);
    // }

    // Upsert User into database
    if (creatingUser || googleUser) {
        const user = creatingUser || googleUser;
        setTimeout(() => {
            fetch('https://carz-manufacturing-project-server-a12.vercel.app/user', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: user?.user?.email,
                    name: user?.user?.displayName,
                    role: "user"
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem("accessToken", data.token)
                    // After creating user he/she will be redirected
                    const from = location.state?.from?.pathname || "/";
                    if (user) {
                        navigate(from, { replace: true });
                    };
                })
        }, 1000);
    }

    useEffect(() => {
        if (creatingError?.code === 'auth/email-already-in-use') {
            setCustomSignupError(<p className='text-[13px] text-center text-red-500 font-semibold'>Email already exist. Please try to login. </p>);
        } else if (googleError) {
            setCustomSignupError(<p className='text-[13px] text-center text-red-500 font-semibold'>Something wrong. Please try again.</p>)
        }
    }, [creatingError?.code, googleError])


    return (
        <div className='signup-page md:pt-10'>
            <div className='w-11/12 mx-auto md:pt-0 pt-4 md:flex '>
                <div className='md:w-1/2'>
                </div>
                <div className='md:w-1/2 '>
                    <div class="p-6 max-w-md grid grid-cols-1 gap-3 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h2 className='text-xl font-semibold'>Signup</h2>
                        {customSignupError && customSignupError}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='grid grid-cols-1 gap-3'>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name field is required.'
                                    }
                                })}
                                type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Your Name" />
                            {errors.name?.type === 'required' && <span className='text-sm text-left text-red-800'>{errors.name?.message}</span>}

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

                            <button type="submit" class={`${creatingLoading ? 'bg-gray-300 py-2.5 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-900 py-3'} mt-4  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 `}>{creatingLoading ? <div class="flex items-center justify-center ">
                                <div class="w-6 h-6 border-b-2 border-gray-800 rounded-full animate-spin"></div>
                            </div> : 'SIGNUP'}</button>
                        </form>
                        <p className=' text-left'><small className=''>New to carZ? <Link to='/login' className='text-blue-600'>Login</Link></small></p>
                        <div className='flex items-center px-1'>
                            <div className='w-1/2 bg-black h-[1px]'></div>
                            <div className='px-3'>or</div>
                            <div className='w-1/2 bg-black h-[1px]'></div>
                        </div>
                        <button type="button"
                            onClick={handleSignInWithGoogle}
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">SIGNIN WITH GOOGLE</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;