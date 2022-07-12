import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer class="px-4 text-center text-white shadow md:px-8 dark:bg-gray-800">
            <div class="flex justify-between items-start md:mx-auto md:w-10/12 sm:items-center sm:justify-between">
                <div className='footer-logo'>
                    <Link to="/" class="md:flex mb-4 sm:mb-0">
                        <span class="self-center LOGO text-xl font-semibold whitespace-nowrap dark:text-white">thecar<span className='text-green-400'>Z</span></span>
                    </Link>
                </div>
                
                <div class="grid grid-cols-2 gap-8 py-8 px-6 text-left md:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                        <ul class="text-gray-300">
                            <li class="mb-2">
                                <Link to="/" class=" hover:underline">About</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Careers</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Help center</h2>
                        <ul class="text-gray-300">
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Linkedin</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Facebook</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                        <ul class="text-gray-300">
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Privacy Policy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Licensing</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="mt-6 block text-sm text-gray-200 sm:text-center dark:text-gray-400"> &copy; {year} <Link to="/" class="hover:underline">the carZ</Link>. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;