import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './Footer.css'
import VisaCard from './../../../src/Assets/Images/cards/visa.png'
import MasterCard from './../../../src/Assets/Images/cards/card.png'
import AmericanExpress from './../../../src/Assets/Images/cards/american-express.png'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer class="px-4 md:py-4 text-center text-black md:px-8 dark:bg-gray-800">
            <div class="md:flex justify-between items-start md:mx-auto md:w-[80%] sm:items-center sm:justify-between">
                <div className='footer-logo items-self-start md:mb-0 md:mt-24px mb-2'>
                    <Link to="/" class="md:flex sm:mb-0">
                        <span class="self-center LOGO text-2xl font-semibold whitespace-nowrap dark:text-white">thecar<span className='text-green-400'>Z</span></span>
                    </Link>
                    <p className="text-[11px]">The product you dream for!</p>
                </div>

                <div class="grid grid-cols-1 gap-8 py-8 pl-6 text-left md:grid-cols-4">
                    <div>
                        <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">Company</h2>
                        <ul class="text-gray-800">
                            <li class="mb-2">
                                <Link to="/" class="text-[13px] hover:underline">About</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="text-[13px] hover:underline">Careers</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="text-[13px] hover:underline">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">Help center</h2>
                        <ul class="text-gray-800">
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Linkedin</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Facebook</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">Legal</h2>
                        <ul class="text-gray-800">
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Privacy Policy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Licensing</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Terms &amp; Conditions</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Licensing</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">Legal</h2>
                        <ul class="text-gray-800">
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Privacy Policy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Licensing</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Terms &amp; Conditions</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Privacy Policy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Licensing</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="hover:underline text-[13px]">Terms &amp; Conditions</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/" class="mt-3 hover:underline text-[13px] flex gap-2">
                                    {/* <span className='text-[11px]'>Powered by: </span> */}
                                    {/* CARDS */}
               <img src={VisaCard} alt='' className='w-[40px] rounded h[8px] px-[4px] bg-[#eee]'/> 
               <img src={MasterCard} alt='' className='w-[40px] rounded h[7px] px-[4px] bg-[#eee]'/> 
               <img src={AmericanExpress} alt='' className='w-[40px] rounded h[7px] px-[4px] bg-[#eee]' /> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="md:mt-6 mt-3 block text-[12px] font-semibold text-gray-800 sm:text-center dark:text-gray-400"> &copy; {year} <Link to="/" class="hover:underline">the carZ</Link>. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;