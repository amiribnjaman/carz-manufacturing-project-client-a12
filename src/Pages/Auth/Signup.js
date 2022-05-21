import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    // Handle Sign in google popup
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    if(user){
        console.log(user);
    }

    return (
        <div className='signup-page md:pt-10'>
            <div className='w-11/12 mx-auto flex '>
                <div className='w-1/2'>
                </div>
                <div className='w-1/2 '>
                    <div class="p-6 max-w-md grid grid-cols-1 gap-3 bg-white rounded-lg border border-gray-200 shadow-md">
                        <h2 className='text-xl font-semibold'>Signup</h2>
                        <form action="" className='grid grid-cols-1 gap-3'>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Your Name" required />
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Your Email" required />
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Your Password" required />
                            <button type="submit" class="text-white mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">SIGNUP</button>
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