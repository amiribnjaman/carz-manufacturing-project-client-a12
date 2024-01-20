import React, { useRef } from "react";
import CustomLink from "../../Components/CustomLink";
import "./CSS/Navbar.css";


export default function MobileMenu({ user, showMenu, setShowMenu }) {
  /**
   **
   **HIDE NAVBAR WHEN LIST ITEM CLICK EVENT OCCURED
   **
   */
  const handleListClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`mobile-menu ${showMenu ? "block" : "hidden"} w-full fixed z-[100]`}>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-8 right-7 bg-[#eee] p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-9 h-9 p-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul
        onClick={handleListClick}
        class="flex h-[100vh] bg-[#0D5DAF] flex-col justify-center"
      >
        <li className="ml-[7px]">
          <CustomLink
            to="/"
            class="block py-2 pr-4 pl-3 text-white md:border-0 border-gray-100 rounded md:bg-transparent hover:text-[#014E9C] md:text-black md:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </CustomLink>
        </li>
        <li className="ml-[7px]">
          <CustomLink
            to="/about"
            class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </CustomLink>
        </li>
        <li className="ml-[7px]">
          <CustomLink
            to="products"
            class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Products
          </CustomLink>
        </li>
        <li className="ml-[7px]">
          <CustomLink
            to="services"
            class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </CustomLink>
        </li>
        <li className="ml-[7px]">
          <CustomLink
            to="contact"
            className={`block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
          >
            Contact
          </CustomLink>
        </li>

        <li className="ml-[7px]">
          <CustomLink
            to="/blogs"
            class="block py-2 pr-4 pl-4 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Blogs
          </CustomLink>
        </li>
        {user ? (
          <li>
            <CustomLink
              to="/my-shop"
              class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#014E9C] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Shop
            </CustomLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
