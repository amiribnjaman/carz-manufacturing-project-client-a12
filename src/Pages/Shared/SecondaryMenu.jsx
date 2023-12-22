import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import MainMenu from "./MainMenu";
import CustomLink from "../../Components/CustomLink";
import auth from "../../firebase.init";
import "./CSS/Navbar.css";
import MobileMenu from "./MobileMenu";

const SecondaryMenu = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="py-4 md:py-1 shadow fixed w-full z-50 top-0 left-0 bg-white">
      <nav class="bg-white py-2 mb-1 md:mb-0 md:py-2 w-10/12 z-50 mx-auto h-[65px] border-gray-200 md:px-9 sm:px-4 flex flex-wrap items-center justify-between dark:bg-gray-800">
        <div class={`container flex justify-between items-center mx-auto`}>
          <div className="">
            <Link to="/" class="flex">
              <span class="self-center LOGO text-3xl font-semibold whitespace-nowrap dark:text-white">
                thecar<span className="text-[#014E9C]">Z</span>
              </span>
            </Link>
            <p className="text-[11px] text-left">The product you dream for!</p>
          </div>
          {/*============ MENU ITEMS ==============*/}
          <div
            class={`justify-between hidden items-center w-full md:flex md:w-auto justify-between`}
            id="mobile-menu-2"
          >
            {/*
          /*
          /*
          /*NAVBAR ITEMS FOR DESKTOP DEVICES
          /*
          /*
          */}
            <ul class="flex -ml-2 flex-col mt-4 md:flex-row justify-center items-center md:space-x-6 md:mt-0 md:text-sm md:font-medium">
              <li className="ml-[7px]">
                <CustomLink
                  to="/"
                  class="block py-2 pr-4 pl-3 text-[#03a89d] border-b md:border-0 border-gray-100 rounded md:bg-transparent hover:text-[#014E9C] md:text-black md:p-0 dark:text-white"
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
                  to="products"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="services"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="contact"
                  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
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

          {/*
          /*
          /*
          /*NAVBAR HUMBERGER ICON FOR MOBILE DEVICES
          /*
          /*
          */}
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="grid md:hidden gap-1.5 cursor-pointer"
          >
            <div className="w-[18px] h-[2px] bg-black rounded"></div>
            <div className="w-[30px] h-[1.5px] bg-black rounded"></div>
            <div className="w-[18px] h-[2px] bg-black rounded justify-self-end"></div>
          </div>

          {/*=============== LOGIN BUTTON============= */}
          <div className="hidden md:block">
            <ul>
              <li>
                {!user ? (
                  <CustomLink
                    to="/login"
                    class={`${
                      location.pathname == "/login"
                        ? "bg-[#f4faff]"
                        : "bg-[#fafafa] font-semibold"
                    } block py-2 pr-5 pl-3 rounded text-[#000] px-[20px] py-[8px] dark:text-white`}
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
                      class="w-8 h-8 rounded-full cursor-pointer inline-block "
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
            </ul>
          </div>
        </div>
      </nav>
      {/*
          /*
          /*
          /*NAVBAR FOR DESKTOP DEVICES
          /*
          /*
          */}
      <div className="w-full absolute top-0 left-0">
        <MobileMenu user={user} showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default SecondaryMenu;
