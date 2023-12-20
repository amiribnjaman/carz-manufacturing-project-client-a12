import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyShopCard() {
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
    <button
      onClick={navigateToShop}
      className="fixed flex items-center gap-3 cursor-pointer top-[140px] right-[-75px] hover:right-[0] z-50 bg-[#fafafa] px-3 py-2 rounded-tl rounded-bl shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        data-slot="icon"
        class="w-7 h-7 text-[#014E9C] pr-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <span className="text-[13px] font-semibold">My Shop</span>
    </button>
  );
}
