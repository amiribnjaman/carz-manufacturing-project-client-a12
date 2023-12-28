import React from "react";
import Img1 from "./../../Assets/Images/cars/img-1.jpg";
import Img2 from "./../../Assets/Images/cars/img-2.jpg";
import Img3 from "./../../Assets/Images/cars/img-3.jpg";
import Img4 from "./../../Assets/Images/cars/img-4.jpg";
import Img5 from "./../../Assets/Images/cars/img-5.jpg";
import { useState } from "react";

const Banner = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="bg-gradient-to-r from-[#e2effb] to-[#fafffd]">
      
      <div className="md:pt-[70px]">
        {/* BANNER SECTION HEADING */}
        <div className="md:w-[80%] mb-4 md:mb-0 mx-auto flex md:flex-row flex-col justify-between px-3">
          <div className="gap-3 mt-4 md:mt-0 items-center md:w-[80%]">
            <h1 className="text-left text-[18px] md:text-[23px] font-semibold flex gap-2 items-center">
              Our objective is to provide the best Quality Product.
            </h1>
            <p className="text-[12px] hidden md:block md:text-[14px] w-[60%] text-left">
              We manufacturing automobiles for more than 10+ years with client
              satisfaction priority. Our team always doing hard work for insure
              the best product & services.
            </p>
          </div>

          <div className="flex md:flex-col gap-3 h-[35px] md:mb-0 mb-4 mt-2 md:mt-[5px]">
            <span className="underline hover:text-[#014E9C] hover:decoration-[#014E9C] cursor-pointer text-left md:text-right">
              Explore More
            </span>
            <div className="flex items-center gap-1 md:gap-2 mt-0">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-[16px] h-[16px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span className="font-normal">4.9</span>
              </div>
              <span className="mb-[6px]">.</span>
              <div className="flex gap-1 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class={`w-[19px] h-[19px] mt-[4px`}
                  onClick={() => setLike(!like)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-[16px] h-[16px] mt-[1px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg> */}

                <span className="text-[11px] font-semibold">
                  {like ? "271" : "270"} Likes
                </span>
              </div>
              <span className="mb-[6px]">.</span>
              <button className="flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={`${like ? "#EF2360" : "none"}`}
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class={`w-[19px] h-[19px] mt-[4px] ${
                    like ? "text-[#EF2360]" : ""
                  }`}
                  onClick={() => setLike(!like)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* BANNER SECTION BODY */}
        <div className="md:mt-5 md:pb-20">
          <div className="w-full grid grid-cols-4 grid-rows-1 gap-3">
            <div className="col-span-2 row-span-1">
              <div className="row-span-1">
                <img
                  className="cursor-pointer hover:opacity-90 h-[390px] w-full"
                  src={Img1}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1 grid grid-rows-2 gap-3 ">
              <div className=" ">
                <img
                  className="cursor-pointer hover:opacity-80 h-[186px] w-full "
                  src={Img2}
                  alt=""
                />
              </div>
              <div className=" ">
                <img
                  className="cursor-pointer hover:opacity-80 h-[186px] w-full"
                  src={Img3}
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-1 row-span-1 grid grid-rows-2 gap-3 ">
              <div className=" ">
                <img
                  className="cursor-pointer hover:opacity-80 h-[186px] w-full "
                  src={Img4}
                  alt=""
                />
              </div>
              <div className=" ">
                <img
                  className="cursor-pointer hover:opacity-80 h-[186px] w-full "
                  src={Img5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
