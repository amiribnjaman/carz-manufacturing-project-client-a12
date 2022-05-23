import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='w-[90%] border flex justify-between h-96 text-left'>
            <div className='w-full mt-4 overflow-y-auto'>
                <div className='p-4 border mx-2'>
                    <h3 className='text-xl font-semibold '>General Info</h3>
                    <div className='py-2'>
                        <h3>Name: <span className='font-semibold text-sm'>{user?.displayName}</span></h3>
                        <h4>Email: <span className='font-semibold text-sm'>{user?.email}</span></h4>
                        <h5>Phone Number: <span className='font-semibold text-sm'>{user?.phoneNumber ? user?.phoneNumber : 'Not set yet!'} </span></h5>
                        <div className='mt-4'>
                            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2 ">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p4 mt-4 mx-2'>
                <aside class="w-64" aria-label="Sidebar">
                    <div class=" py-4 px-3 bg-gray-50 mt-8 rounded dark:bg-gray-800">
                        <ul class="space-y-2 relative">
                            <div className='pb-3'>
                                <img class="absolute z-30 top-[-50px] mb-8 inline-block left-[35%] w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user?.photoURL} alt="" />
                            </div>
                            <li className='mt-8'>
                                <Link to="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span class="ml-3">General Info</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </aside>

            </div>
        </div>

    );
};

export default MyProfile;