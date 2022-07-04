import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer class="px-4 text-center text-white shadow md:px-8 dark:bg-gray-800">
            <div class="sm:flex md:mx-auto w-10/12 sm:items-center sm:justify-between">
                <Link to="/" class="md:flex items-center mb-4 sm:mb-0">
                <span class="self-center LOGO text-xl font-semibold whitespace-nowrap dark:text-white">thecar<span className='text-white'>Z</span></span>
                </Link>
                <ul class="flex flex-wrap justify-center md:justify-end items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="#" class="sm:mr-4 mr-1 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="#" class="sm:mr-4 mr-1 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="#" class="sm:mr-4 mr-1 hover:underline md:mr-6 ">Licensing</Link>
                    </li>
                    <li>
                        <Link to="#" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
            <p class="block mt-16 block text-sm text-white sm:text-center dark:text-gray-400"> &copy; {year} <Link to="https://flowbite.com" class="hover:underline">the carZ™</Link>. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;