import React from "react";
import user2 from "../../Assets/Images/user/user2.jpg";
import user3 from "../../Assets/Images/user/user3.jpg";
import user4 from "../../Assets/Images/user/user4.jpg";
import user5 from "../../Assets/Images/user/user5.jpg";

const OurTeam = () => {
  return (
    <div className="w-[80%] px-3 md:grid grid-cols-12 expert-section gap-5 mx-auto mt-24 mb-8">
      {/* Meet Our Experts */}
      <div className="col-span-3 text-left">
        <h2 className="text-[22px] font-[600] text-left">Meet Our Experts</h2>
        {/* Divider */}
        <div className="flex float-left jusify-between gap-2 mt-2 ">
          <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
        </div>
        <div className="text-left text-sm mt-10 w-[80%] mr-auto">
          <h4>
            We have a bunch of talented & expert team whom always doing hard
            work for ensure the best services.
          </h4>
          <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[15px] border border-[#014E9C]">
            Explore Team
          </button>
        </div>
      </div>

      {/* <h2 className='text-2xl md:text-3xl font-semibold'></h2>
            <p className='w-4/5 md:w-3/6 mx-auto text-center text-sm'>We have a bunch of talented & expert team whom always doing hard work for ensure the best services. </p> */}
      <div className="col-span-9">
        {/* TEAM OPTION SELECTION */}
        <div className="flex justify-end border-0 mb-1">
          <select className="border-0 cursor-pointer text-sm font-[500]">
            <option>Select Team</option>
          </select>
        </div>
        <div className="gap-1 grid md:grid-cols-4 h-[90%]gap-0 w-full">
          {/* First Member */}
          <div className="expert-box opacity-1 cursor-pointer shadow-md">
            <img className="w-full h-[100%]" src={user3} alt="" />
            <div className="expert-details mt-[100px] p-2 bg-[rgba(89, 100, 106, 0.7)] flex items-center text-center justify-center font-semibold text-black">
              <div>
                <h3 className="text-black text-[14px]">Steven Marks</h3>
                <h5 className="text-[#00CCBD] text-[13px]">Engineer</h5>
                <h6 className="text-[11px] text-black">
                  Team Leader, the carZ
                </h6>
                <button className="mt-2 underline text-[10px]">
                  Know More
                </button>
              </div>
            </div>
                  </div>
                  
          <div className="expert-box opacity-1 cursor-pointer shadow-md">
            <img className="w-full h-[100%]" src={user2} alt="" />
            <div className="expert-details mt-[100px] p-2 bg-[rgba(89, 100, 106, 0.7)] flex items-center text-center justify-center font-semibold text-black">
              <div>
                <h3 className="text-black text-[14px]">Steven Marks</h3>
                <h5 className="text-[#00CCBD] text-[13px]">Engineer</h5>
                <h6 className="text-[11px] text-black">
                  Team Leader, the carZ
                </h6>
                <button className="mt-2 underline text-[10px]">
                  Know More
                </button>
              </div>
            </div>
          </div>
          <div className="expert-box opacity-1 cursor-pointer shadow-md">
            <img className="w-full h-[100%]" src={user4} alt="" />
            <div className="expert-details mt-[100px] p-2 bg-[rgba(89, 100, 106, 0.7)] flex items-center text-center justify-center font-semibold text-black">
              <div>
                <h3 className="text-black text-[14px]">Steven Marks</h3>
                <h5 className="text-[#00CCBD] text-[13px]">Engineer</h5>
                <h6 className="text-[11px] text-black">
                  Team Leader, the carZ
                </h6>
                <button className="mt-2 underline text-[10px]">
                  Know More
                </button>
              </div>
            </div>
          </div>
          <div className="expert-box opacity-1 cursor-pointer shadow-md">
            <img className="w-full h-[100%]" src={user5} alt="" />
            <div className="expert-details mt-[100px] p-2 bg-[rgba(89, 100, 106, 0.7)] flex items-center text-center justify-center font-semibold text-black">
              <div>
                <h3 className="text-black text-[14px]">Steven Marks</h3>
                <h5 className="text-[#00CCBD] text-[13px]">Engineer</h5>
                <h6 className="text-[11px] text-black">
                  Team Leader, the carZ
                </h6>
                <button className="mt-2 underline text-[10px]">
                  Know More
                </button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
