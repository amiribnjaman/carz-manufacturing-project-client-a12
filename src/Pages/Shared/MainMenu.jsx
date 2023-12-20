import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../../Components/CustomLink";
import auth from "../../firebase.init";
import "./CSS/Navbar.css";

const MainMenu = ({ showMenu }) => {
  const [user, loading, error] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [showFilterCard, setShowFilterCard] = useState(false);

  return (
    <div className="">
      <nav
        class={`${
          showMenu ? "block" : "hidden"
        } bg-white w-full z-50 mx-auto md:h-[50px] md:py-7 border-gray-200 md:px-10 sm:px-4 md:flex items-center rounded dark:bg-gray-800`}
      >
        {/* shadow shadow-md border border-[1px] */}
        {/*  class={`${
            showMenu ? "relative items-center md:top-[90px]" : ""
          } container flex flex-wrap md:justify-between items-center mx-auto`} */}
        <div className="flex justify-between w-full items-center">
          {/*=================MAIN MENU===================*/}
          <div
            class={`justify-between gap-5 items-center w-full md:flex md:w-auto`}
            id="mobile-menu-2"
          >
            {/*=============CATEGORIES SELECT BUTTON=========== */}
            <button className="bg-[#0d5daf] flex justify-between items-center py-2 text-white px-2 w-[210px]">
              <span className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

              All categories
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" data-slot="icon" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

            </button>
            {/* <ul class="flex -ml-2 flex-col mt-4 md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium">
              <li className="">
                <CustomLink
                  to="/"
                  className="block py-2 pr-4 pl-3 border-b md:border-0 border-gray-100 rounded md:bg-transparent hover:text-[#014E9C] md:text-black md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/about"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </CustomLink>
              </li>
              {/* <li className="ml-[7px]">
                <CustomLink
                  to="/products"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </CustomLink>
              </li> */}
            {/*  <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team Collaboration
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </CustomLink>
              </li> 
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-4 text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </CustomLink>
              </li>
              {user ? (
                <li>
                  <CustomLink
                    to="/dashboard"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Dashboard
                  </CustomLink>
                </li>
              ) : (
                ""
              )}
              {/* <li>
                                <CustomLink to="myportfolio" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Portfolio</CustomLink >
                            </li> 
                            {user ?
                                <li>
                                    <CustomLink to="/dashboard" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</CustomLink >
                                </li>
                                : ''
                            //*
            </ul> */}
            {/*================= SEARCH FIELD =====================*/}
            <div className="search-btn h-[80%] hidden w-[480px] text-center md:flex hover:tooltip-open -mr-2 cursor-pointer rounded-full">
              <input
                className="w-full border-[#e6e6e6]"
                type="text"
                placeholder="Search product by name here..."
              />
              <button
                className="justify-self-center mb-3 bg-[#0d5daf] px-2.5 md:mb-0"
                onClick={() => setShowFilterCard(!showFilterCard)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
              
            </div>
          </div>

          

          {/*================== LOGIN BUTTON =====================*/}
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-6 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <div className="ml-auto justify-selft-end">
              <div className="flex items-center">
                <h5 className="text-left text-[13px] font-normal">Call Us</h5>
              </div>
              <div className="">
                <span className="text-[14px] font-semibold">
                  +88 01345678900
                </span>
              </div>
            </div>
          </div>
          {/* <div>
            {!user ? (
              <Link
                to="/login"
                className="px-9 rounded py-3 bg-[#0d5daf] text-white font-semibold"
              >
                Login
              </Link>
            ) : (
              <button>Get App</button>
            )}
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
