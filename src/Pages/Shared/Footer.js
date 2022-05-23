import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div class="sm:flex w-11/12 mx-auto sm:items-center sm:justify-between">
                <Link to="/" class="flex items-center mb-4 sm:mb-0">
                <span class="self-center LOGO text-xl font-semibold whitespace-nowrap dark:text-white">thecar<span className='text-[#00CCBD]'>Z</span></span>
                </Link>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="#" class="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                    </li>
                    <li>
                        <Link to="#" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> &copy; {year} <Link to="https://flowbite.com" class="hover:underline">the carZ™</Link>. All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;