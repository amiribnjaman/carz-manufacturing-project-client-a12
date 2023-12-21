import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import CustomLink from "../../Components/CustomLink";
import auth from "../../firebase.init";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Handle menu toggle
  // const handleShowMenu = () => {
  //   setShowLogout(!showMenu)
  // }

  return (
    <div className="md:pt-6 md:pb-5 py-2 shadow relative">
      <nav class="bg-white md:pb-2 w-10/12 z-50 mx-auto h-[90px] border-gray-200 md:px-10 sm:px-4 flex items-center rounded rounded-full dark:bg-gray-800">
        <div
          class={`${
            showMenu ? "relative" : ""
          } container flex flex-wrap justify-between items-center mx-auto`}
        >
          <div className="flex items-center gap-20">
            <div>
              <Link to="/" class="flex items-center">
                <span class="self-center LOGO text-3xl font-semibold whitespace-nowrap dark:text-white">
                  thecar<span className="text-[#014E9C]">Z</span>
                </span>
              </Link>
              <p className="text-[11px]">The product you dream for!</p>
            </div>
            {/*
          /*
          /*
          /*NAVBAR ITEMS FOR DESKTOP DEVICES
          /*
          /*
          */}
            <div className="hidden md:block">
              <ul class="flex -ml-2 flex-col mt-4 md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium">
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
                <li className="ml-[7px]">
                  <CustomLink
                    to="/products"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
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
                {/*===============SHOP MY SHOP PAGE IF USER LOGEDIN=============== */}
                {user ? (
                  <li>
                    <CustomLink
                      to="/my-shop"
                      class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Shop
                    </CustomLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>

          {/*
          /*
          /*
          /*NAVBAR HUMBERGER ICON FOR MOBILE DEVICES
          /*
          /*
          */}

          <div className="grid md:hidden gap-1.5 cursor-pointer">
            <div className="w-[18px] h-[2px] bg-black rounded"></div>
            <div className="w-[30px] h-[1.5px] bg-black rounded"></div>
            <div className="w-[18px] h-[2px] bg-black rounded justify-self-end"></div>
          </div>

          {/*
          /*
          /*
          /*NAVBAR FOR DESKTOP DEVICES
          /*
          /*
          */}
          <div class="hidden md:flex items-center md:order-2 relative">
            {/* Navbar mid section */}
            <div className="hidden md:flex mr-20 -mt-[10px] gap-5 text-[13px] items-center"></div>
            <ul class="hidden items-center md:flex mt-3 flex-col md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">
              <li className="ml-[22px]">
                <a
                  href="#"
                  class="flex gap-1 text-[12px] py-2 pr-1 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    data-slot="icon"
                    class="w-[24px] h-[24px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span className="text-[11px] mt-1.5">Wishlist </span>
                </a>
              </li>
              <li className="ml-[22px] flex gap-1">
                <a
                  href="#"
                  class="flex gap-1 text-[12px] py-2 pr-1 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    data-slot="icon"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <span className="text-[11px] mt-1.5">Cart </span>
                </a>
              </li>

              <li>
                {!user ? (
                  <CustomLink
                    to="/login"
                    class="block py-2 pr-4 pl-3 text-black rounded md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <span id="navbar-login-btn" className="r">
                      Login
                    </span>
                  </CustomLink>
                ) : user?.photoURL ? (
                  <>
                    <img
                      onClick={() => setShowLogout(!showLogout)}
                      class="w-8 h-8 rounded-full cursor-pointer inline-block"
                      src={user?.photoURL}
                      alt={user.displayName}
                    />
                    {/* <p>
                      <small>{user?.displayName?.split(" ")[0]}</small>
                    </p> */}
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => setShowLogout(!showLogout)}
                      class="relative w-10 h-10 overflow-hidden cursor-pointer bg-gray-100 rounded-full "
                    >
                      <svg
                        class="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <small>{user?.displayName?.split(" ")[0]}</small>
                    </p>
                  </>
                )}
              </li>

              {/* User profile and logout button  */}
              <div
                className={` ${
                  showLogout ? "block" : "hidden"
                } z-40 absolute top-[65px] left-[-55px] bg-gray-100  px-5 py-2 rounded shadow-sm`}
              >
                <ul>
                  <li>
                    <CustomLink
                      onClick={() => setShowLogout(!showLogout)}
                      to="/dashboard/myprofile"
                      class="font-semibold block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Profile
                    </CustomLink>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowLogout(!showLogout);
                        signOut(auth);
                      }}
                      class="font-semibold block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* MAIN NAVBAR/MENU */}
      {/* absolute w-[79%] mx-auto md:bottom-[-40px] md:left-[10%] left-[21%]  */}
      <div className="w-10/12 md:block hidden  mx-auto ">
        <MainMenu showMenu={showMenu} />
      </div>
    </div>
  );
};

export default Navbar;
