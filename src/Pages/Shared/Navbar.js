import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../Components/CustomLink';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [showLogout, setShowLogout] = useState(false)

    return (
        <div className='shadow'>
            <nav class="bg-white w-11/12 mx-auto h-[90px] border-gray-200 px-2 sm:px-4 flex items-center rounded dark:bg-gray-800">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" class="flex items-center">
                        <span class="self-center LOGO text-xl font-semibold whitespace-nowrap dark:text-white">thecar<span className='text-[#00CCBD]'>Z</span></span>
                    </Link >
                    <div class="flex items-center md:order-2 relative">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                {
                                    !user ? <CustomLink
                                        to="/login" class="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Login</CustomLink > : user?.photoURL ? <><img
                                            onClick={() => setShowLogout(!showLogout)}
                                            class="w-8 h-8 rounded-full cursor-pointer inline-block mt-3" src={user?.photoURL} alt={user.displayName} />
                                            <p><small>{user?.displayName?.split(' ')[0]}</small></p>
                                        </> : <>
                                        <div
                                            onClick={() => setShowLogout(!showLogout)}
                                            class="relative w-10 h-10 overflow-hidden cursor-pointer bg-gray-100 rounded-full ">
                                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

                                        </div>
                                        <p><small>{user?.displayName?.split(' ')[0]}</small></p></>

                                }
                            </li>

                            {/* User profile and logout button  */}
                            <div className={`${showLogout && user ? 'block' : 'hidden'} z-40 absolute top-[65px] left-[-55px] bg-gray-100  px-5 py-2 rounded shadow-sm`}>
                                <ul>
                                    <li>
                                        <CustomLink
                                            onClick={() => setShowLogout(!showLogout)}
                                            to="/dashboard/myprofile" class="font-semibold block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Profile</CustomLink >
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setShowLogout(!showLogout)
                                                signOut(auth)
                                            }}
                                            class="font-semibold block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CustomLink to="/" class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:hover:text-[#03a89d] md:text-black md:p-0 dark:text-white" aria-current="page">Home</CustomLink >
                            </li>
                            <li>
                                <CustomLink to="/blogs" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</CustomLink >
                            </li>
                            <li>
                                <CustomLink to="myportfolio" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Portfolio</CustomLink >
                            </li>
                            {user ?
                                <li>
                                    <CustomLink to="/dashboard" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</CustomLink >
                                </li>
                                : ''
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;