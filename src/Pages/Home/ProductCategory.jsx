import React from "react";
import Cat1 from "../../Assets/Images/cars/cat-1.jpg";
import Cat2 from "../../Assets/Images/cars/cat-2.jpg";
import Cat3 from "../../Assets/Images/cars/cat-3.jpg";
import Cat4 from "../../Assets/Images/cars/cat-4.jpg";

export default function ProductCategory() {
  return (
    <div className="md:mt-16 px-3 md:mb-12 md:w-[80%] mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-9 grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <div>
            <div className="bg-[#E1EFFE] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="col-span-1">
                <img
                  className="h-[180px] opacity-90 rounded-tl-lg rounded-bl-lg"
                  width={500}
                  src={Cat1}
                  alt=""
                />
              </div>
              <div className="p-4 text-justify text-black text-[12px] font-[500]">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  minus eveniet nemo odio,.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="bg-[#8d9bab] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="col-span-1">
                <img
                  className="h-[180px] opacity-90 rounded-tl-lg rounded-bl-lg"
                  width={500}
                  src={Cat2}
                  alt=""
                />
              </div>
              <div className="p-4 text-justify text-white text-[12px] font-[500]">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  minus eveniet nemo odio,.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="bg-[#8d9bab] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="p-4 text-justify text-white text-[12px] font-[500]">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  minus eveniet nemo odio,.
                </p>
              </div>
              <div className="col-span-1">
                <img
                  className="h-[180px] opacity-90 rounded-tr-lg rounded-br-lg"
                  width={500}
                  src={Cat3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            {/* 7c8793 */}
            <div className="bg-[#E1EFFE] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="p-4 text-justify text-black text-[12px] font-[500]">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  minus eveniet nemo odio,.
                </p>
              </div>
              <div className="col-span-1">
                <img
                  className="bg-blend-darken h-[180px] opacity-90 rounded-tr-lg rounded-br-lg"
                  width={500}
                  src={Cat4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category heading */}
      <div className="col-span-3">
        <h2 className="text-[22px] font-[600]">Products Categories</h2>
        {/* Divider */}
        <div className="flex float-right jusify-between gap-2 ml-auto mt-2 ">
          <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
        </div>
        <div className="text-right text-sm mt-10 w-[80%] ml-auto">
          <h4>
            We manufacturing and providing bounch of types products those we
            provide to our clites for a long time.
          </h4>
          <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[15px] border border-[#014E9C]">
            See All Categories
          </button>
        </div>
      </div>
    </div>
  );
}
