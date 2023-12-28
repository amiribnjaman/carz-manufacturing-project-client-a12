import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function PaymentMessage() {
  const navigate = useNavigate()
  return (
    <div className="w-full mb-16">
      {/*========== MENU============== */}
      <div className="bg-[#014E9C]">
        <div class="md:flex py-2 pb-4 md:pb-0 justify-between items-center md:mx-auto md:w-full px-8 sm:items-center sm:justify-between">
          <div className="footer-logo py-2 self-start md:mb-0 md:mt-24px mb-2">
            <Link to="/" class="md:flex sm:mb-0">
              <span class="self-center text-white LOGO text-2xl font-semibold whitespace-nowrap dark:text-white">
                thecar<span className="text-green-400">Z</span>
              </span>
            </Link>
          </div>

          <div className="flex gap-1 md:gap-3 items-center">
            <ul className="text-white flex gap-8 text-sm">
              <li>Wishlist</li>
              <li>Cart</li>
              <li>All order</li>
            </ul>
          </div>
        </div>
      </div>

      {/*=================== MESSAGE CARD================ */}
      <div
        id="popup-modal"
        tabindex="-1"
        class="flex items-center justify-center my-12 overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            ></button>
            <div class="p-4 md:p-5 text-center">
              <div className="flex justify-center my-4 border border-2 border-green-600 w-[50px] h-[50px] items-center mx-auto rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="text-center text-green-600"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Your payment has been Succeed!
              </h3>
              <div className="flex gap-4 items-center justify-center">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                >
                  Go Home
                </button>
                <button
                  onClick={() => navigate("/my-shop")}
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  My Order Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
