import React from "react";
import Cat1 from "../../Assets/Images/cars/cat-1.jpg";
import Cat2 from "../../Assets/Images/cars/cat-2.jpg";
import Cat3 from "../../Assets/Images/cars/cat-3.jpg";
import Cat4 from "../../Assets/Images/cars/cat-4.jpg";

export default function ProductCategory() {
  return (
    <div className="mt-16 px-3 md:mb-12 md:w-[80%] mx-auto grid md:grid-cols-12 gap-5">
      <div className="md:col-span-9 order-2 md:order-1 grid md:grid-cols-2 gap-y-4 md:gap-3">
        <div className="col-span-1">
          <div>
            {/*E1EFFE*/}
            <div className="bg-[#7c8793] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="col-span-1">
                <img
                  className="h-[180px] opacity-90 rounded-tl-lg rounded-bl-lg"
                  width={500}
                  src={Cat1}
                  alt=""
                />
              </div>
              <div className="p-4 text-justify text-white  font-[500]">
                <h4 className="text-[14px] hover:underline"># Brand New car</h4>
                <p className="text-[11px] mt-2 text-[#eeeeee]">
                  We manufacturing brand new cars which are dominating in the
                  market and you must love it.
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
              <div className="p-4 text-justify text-white  font-[500]">
                <h4 className="text-[14px] hover:underline">
                  # Customize car
                </h4>
                <p className="text-[11px] mt-2 text-[#eeeeee]">
                  If you have your own choice car design we will customized and
                  provide the car as your wish.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="bg-[#8d9bab] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="p-4 text-justify font-[500]">
                <h4 className="text-[14px] text-white  hover:underline">
                  # Used car
                </h4>
                <p className="text-[11px] mt-2 text-[#eeeeee]">
                  Somethime you may wish to buy a used product, and then we are
                  here to provide it to you.
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
            {/* 7c8793 8d9bab*/}
            <div className="bg-[#7c8793] grid grid-cols-2 w-full rounded flex gap-1">
              <div className="p-4 text-justify text-white  font-[500]">
                <h4 className="text-[14px] hover:underline">
                  # World famous car
                </h4>
                <p className="text-[11px] mt-2 text-[#eeeeee]">
                  If you wish to buy a world famous car, we also can provide it.
                  We've third party car provide package.
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
      <div className="md:order-2 order-1 md:col-span-3">
        <h2 className="text-[22px] md:text-right text-left font-[600]">
          Products Categories
        </h2>
        {/* Divider */}
        <div className="flex md:float-right jusify-between gap-2 ml-auto mt-2 ">
          <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
        </div>
        <div className="md:text-right text-left text-sm mt-4 md:mt-10 w-[80%] md:ml-auto">
          <h4>
            We manufacturing and providing bounch of types products those for a
            long time with 100% cilents satisfaction.
          </h4>
          <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[15px] border border-[#014E9C]">
            See All Categories
          </button>
        </div>
      </div>
    </div>
  );
}
