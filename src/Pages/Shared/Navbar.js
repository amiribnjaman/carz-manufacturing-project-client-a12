import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import CustomLink from "../../Components/CustomLink";
import auth from "../../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="py-8 shadow relative">
      <nav class="bg-white pb-2 w-10/12 z-50 mx-auto h-[90px] border-gray-200 md:px-10 sm:px-4 flex items-center rounded rounded-full dark:bg-gray-800">
        <div
          class={`${
            showMenu ? "relative top-[90px]" : ""
          } container flex flex-wrap justify-between items-center mx-auto`}
        >
          <div className="">
            <Link to="/" class="flex items-center">
              <span class="self-center LOGO text-3xl font-semibold whitespace-nowrap dark:text-white">
                thecar<span className="text-green-400">Z</span>
              </span>
            </Link>
            <p className="text-[11px]">The product you dream for!</p>
          </div>
          <div class="flex items-center md:order-2 relative">
            {/* Navbar mid section */}
            <div className="flex mr-20 -mt-[10px] gap-5 text-[13px] items-center">
              <div className=" gap-2 mr-4 items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <h5 className="text-left text-[12px] font-normal">Call Us</h5>
                </div>
                <div className="">
                  <span className="text-[13px] font-semibold">
                    +88 013456789
                  </span>
                </div>
              </div>
              <div className=" gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <h5 className="text-left text-[12px] font-normal">Mail Us</h5>
                </div>
                <div className="">
                  <span className="text-[13px] font-semibold">
                    carz@mail.com
                  </span>
                </div>
              </div>
              <div className=" gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h5 className="text-left text-[12px] font-normal">
                    Opening Time
                  </h5>
                </div>

                <div className="">
                  <span className="text-[13px] font-semibold">
                    At 10:00AM - 10:00PM
                  </span>
                </div>
              </div>
            </div>
            <ul class="flex mt-3 flex-col md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
              {/* <li>
                <a
                  href="#"
                  class="block text-[12px] py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </a>
              </li>*/}
              <li className="ml-[22px]">
                <a
                  href="#"
                  class="block text-[12px] py-2 pr-1 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Wishlist
                </a>
              </li>
              {/* <li>
                <Link
                  to="#"
                  class="flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="bi bi-basket"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <sup className="text-sm text-white bg-[#31C48D] -ml-[4px] shadow rounded-full px-[4px] z-5">
                    0
                  </sup>
                </Link>
              </li> */}

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

            <div>
              <ul class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-[12px]"></ul>
            </div>

            <button
              onClick={() => setShowMenu(!showMenu)}
              data-collapse-toggle="mobile-menu"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* MAIN MENU */}

          {/* <div class={`${showMenu ? 'block shadow bg-[rgba(237,246,253,.9)] z-40' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CustomLink to="/" class="block py-2 pr-4 pl-3 text-[#03a89d] rounded md:bg-transparent md:hover:text-[#03a89d] md:text-black md:p-0 dark:text-white" aria-current="page">Home</CustomLink >
                            </li>
                            <li>
                                <CustomLink to="/blogs" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</CustomLink >
                            </li>
                            {/* <li>
                                <CustomLink to="myportfolio" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Portfolio</CustomLink >
                            </li> 
                            {user ?
                                <li>
                                    <CustomLink to="/dashboard" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</CustomLink >
                                </li>
                                : ''
                            // }
                        </ul>
                    </div> */}
        </div>
      </nav>

      {/* MAIN NAVBAR/MENU */}
      <div className="absolute w-[79%] mx-auto bottom-[-40px] left-[10%]">
        <MainMenu />
      </div>
    </div>
  );
};

export default Navbar;
