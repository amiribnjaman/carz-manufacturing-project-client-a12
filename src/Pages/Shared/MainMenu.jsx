import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../../Components/CustomLink";
import auth from "../../firebase.init";
import "./Navbar.css";

const MainMenu = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="pl-3">
      <nav class="bg-white w-full shadow shadow-md border border-[1px] z-50 mx-auto h-[50px] py-9 border-gray-200 md:px-10 sm:px-4 flex items-center rounded dark:bg-gray-800">
        <div
          class={`${
            showMenu ? "relative items-center top-[90px]" : ""
          } container flex flex-wrap justify-between items-center mx-auto`}
        >
          {/* MAIN MENU */}
          <div
            class={`${
              showMenu
                ? "block shadow bg-[rgba(237,246,253,.9)] z-40"
              : "hidden"
              // md:order-1
            } justify-between items-center w-full md:flex md:w-auto`}
            id="mobile-menu-2"
          >
            <ul class="flex -ml-2 flex-col mt-4 md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium">
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
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team Collaboration
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blogs"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#03a89d] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
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

          {/* SEARCH BUTTON */}
          <div className="search-btn mt-[6px] hover:tooltip-open -mr-2 cursor-pointer rounded-full" >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-6 h-6 text-[#C5C5C5]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            {/* CUSTOM TOOLTIP */}
            {/* <div className="search-tooltip">
              <p>Search</p>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
