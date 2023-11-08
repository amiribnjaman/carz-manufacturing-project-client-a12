import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import CustomLink from "../../Components/CustomLink";
import auth from "../../firebase.init";
import "./Navbar.css";

const SecondaryMenu = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Handle menu toggle
  // const handleShowMenu = () => {
  //   setShowLogout(!showMenu)
  // }

  return (
    <div className="py-2 md:py-1 shadow fixed w-full z-50 top-0 left-0 bg-white">
      <nav class="bg-white pb-2 w-10/12 z-50 mx-auto h-[90px] border-gray-200 md:px-10 sm:px-4 flex items-center justify-between dark:bg-gray-800">
        <div
          class={`${
            showMenu ? "relative" : ""
          } container flex justify-between items-center mx-auto`}
        >
          <div className="">
            <Link to="/" class="flex">
              <span class="self-center LOGO text-3xl font-semibold whitespace-nowrap dark:text-white">
                thecar<span className="text-green-400">Z</span>
              </span>
            </Link>
            <p className="text-[11px] text-left">The product you dream for!</p>
          </div>
          {/* MAIN MENU */}
          <div
            class={`justify-between items-center w-full md:flex md:w-auto`}
            id="mobile-menu-2"
          >
            <ul class="flex -ml-2 flex-col mt-4 md:flex-row justify-center items-center md:space-x-7 md:mt-0 md:text-sm md:font-medium">
              <li className="ml-[7px]">
                <CustomLink
                  to="/"
                  class="block py-2 pr-4 pl-3 text-[#03a89d] border-b md:border-0 border-gray-100 rounded md:bg-transparent md:hover:text-[#03a89d] md:text-black md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </CustomLink>
              </li>
              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </CustomLink>
              </li>

              <li className="ml-[7px]">
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-4 text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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

              <li>
                {!user ? (
                  <CustomLink
                    to="/login"
                    class="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 dark:text-white"
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
                      class="w-8 h-8 rounded-full cursor-pointer inline-block mt-3"
                      src={user?.photoURL}
                      alt={user.displayName}
                    />
                    <p>
                      <small>{user?.displayName?.split(" ")[0]}</small>
                    </p>
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
              {/* <li>
                                <CustomLink to="myportfolio" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Portfolio</CustomLink >
                            </li> 
                            {user ?
                                <li>
                                    <CustomLink to="/dashboard" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</CustomLink >
                                </li>
                                : ''
                            //*/}
            </ul>
          </div>

          {/* MAIN MENU */}

          {/* <div
            class={`${
              showMenu
                ? "block shadow bg-[rgba(237,246,253,.9)] z-40"
                : "hidden"
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <CustomLink
                  to="/"
                  class="block py-2 pr-4 pl-3 text-[#03a89d] rounded md:bg-transparent md:hover:text-[#03a89d] md:text-black md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="myportfolio"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Portfolio
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
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default SecondaryMenu;
