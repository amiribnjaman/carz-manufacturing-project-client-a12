import React from "react";
import Img1 from "./../../Assets/Images/cars/img-1.jpg";
import Img2 from "./../../Assets/Images/cars/img-2.jpg";
import Img3 from "./../../Assets/Images/cars/img-3.jpg";
import Img4 from "./../../Assets/Images/cars/img-4.jpg";
import Img5 from "./../../Assets/Images/cars/img-5.jpg";
import { useState } from "react";

const Banner = () => {
  const [like, setLike] = useState(false)
  return (
    <div className="bg-gradient-to-r from-[#e2effb] to-[#fafffd]">
      <div className="md:pt-[115px]">
        {/* BANNER SECTION HEADING */}
        <div className="md:w-[80%] mx-auto flex justify-between px-3">
          <div className="flex gap-3 items-center">
            <h1 className="text-left text-[21px] font-semibold flex gap-2 items-center">
              Our objective is to provide the best Quality Product.
            </h1>
            <h6 className="flex items-center gap-1">
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
            </h6>
          </div>

          <div className="flex gap-3">
            <div className="flex gap-1 items-center mt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-[15px] h-[15px] mt-[1px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="text-[11px] font-semibold">{like ? '271' : '270' } Likes</span>
            </div>
            <span>.</span>
            <button className="flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={`${like ? '#EF2360' : 'none'}`}
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class={`w-[19px] h-[19px] mt-[4px] ${like ? 'text-[#EF2360]' : ''}`}
                onClick={()=> setLike(!like)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <span className="underline hover:text-[#014E9C] hover:decoration-[#014E9C]">
                Explore More
              </span>
            </button>
          </div>
        </div>

        {/* BANNER SECTION BODY */}
        <div className="md:mt-8 w-[80%] mx-auto md:pb-20">
          <div className="w-full grid grid-cols-4 grid-rows-1 gap-4 px-4">
            <div className="col-span-2 row-span-1">
              <div className="row-span-1">
                <img
                  className="cursor-pointer hover:opacity-90 h-[390px] w-full rounded-tl-[13px] rounded-bl-[13px]"
                  src={Img1}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1 grid grid-rows-2 gap-4 ">
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

            <div className="col-span-1 row-span-1 grid grid-rows-2 gap-4 ">
              <div className=" ">
                <img
                  className="cursor-pointer hover:opacity-80 h-[186px] w-full rounded-tr-[13px]"
                  src={Img4}
                  alt=""
                />
              </div>
              <div className=" ">
                <img
                  className="cursor-pointer hover:opacity-80 h-[186px] w-full rounded-br-[13px] "
                  src={Img5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className=''>
    //     <div className='relative banner-section -z-20'>
    //         <div className='banner-image-box absolute mb-2 text-white'>
    //             <div className='text-[#343C97]'>
    //                 <h5 className='text-sm uppercase'>car'Z - A manufacturing company</h5>
    //                 <h1 className='text-xl md:text-4xl font-bold'>We Believe in Quality</h1>
    //                 <p class>Our supreme objective is to provide the best Quality Product. </p>
    //                 <button className='px-8 py-2 hover:bg-[#00CCBD] border border-[#343C97] mt-6 hover:cursor-pointer'>Explore More</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // <div className="banner">
    //     <div class="wrapper">
    //         <div class="wave"></div>
    //     </div>
    // </div>
  );
};

export default Banner;
