import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "./CustomLink";

export default function MyShopCard() {
  const [showCard, setShowCard] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  /*
    /*
    /*NAVIGATE TO MY SHOP PAGE
    /*
*/
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/my-shop");
  };

  return (
    <div>
      <button
        onClick={() => setShowCard(!showCard)}
        className="fixed flex items-center gap-3 cursor-pointer top-[120px] right-[0] hover:right-[0] z-50 bg-[#fafafa] px-3 py-2 rounded-tl rounded-bl shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          data-slot="icon"
          class="w-7 h-7 text-[#000] pr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>

      {/*=================== SHOP CARD=========== */}
      <div
        className={`${
          showCard ? "block" : "hidden"
        } fixed top-0 right-0 w-[300px] h-[100vh] bg-[#f4faff] z-[100] shadow-lg`}
      >
        {/*=================== SHOP CARD CANCEL=========== */}
        <div className="flex justify-between items-center my-6 mx-3 ">
          <div>
            {user ? (
              user?.photoURL ? (
                <>
                  <img
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
                  <div class="relative w-10 h-10 overflow-hidden cursor-pointer bg-gray-100 rounded-full ">
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
              )
            ) : (
              <CustomLink
                to="/login"
                class="block font-semibold py-2 pr-4 pl-3 text-black rounded md:p-0 dark:text-white"
                aria-current="page"
              >
                <span id="navbar-login-btn" className="r">
                  Login
                </span>
              </CustomLink>
            )}
          </div>
          <div
            onClick={() => setShowCard(!showCard)}
            className=" bg-[#014E9C] p-[4px] rounded cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/*=================== SHOP CARD BODY=========== */}
        <div className="mt-14">
          {/*=================== SHOP CARD MENU=========== */}
          <ul className="flex gap-4 px-4 mx-2 bg-[#014E9C] rounded-full text-white text-[13px] py-2">
            <li className="cursor-pointer">My Cart</li>
            <li className="cursor-pointer">My Shop</li>
          </ul>
          {/*=================== SHOP CARD TABEL=========== */}
          <div className="shadow mt-4 rounded-lg mx-2">ddd</div>
        </div>
      </div>
    </div>
  );
}
