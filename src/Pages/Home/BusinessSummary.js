import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faBoxesPacking, faPeopleCarryBox, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import './CSS/Home.css'

const BusinessSummary = () => {
    return (
        // <div className='my-24 buniness-section w-11/12 mx-auto'>
        //     <h3 className='text-[#000] text-2xl md:text-3xl pt-12 font-semibold'>Business Statistics</h3>
        //     <div className='w-11/12 mb-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 align-items-center text-white mt-16'>
        //         <div className='bg-[rgba(152,152,152,0.5)] rounded-md py-7 shadow'>
        //             <FontAwesomeIcon className='text-3xl mb-3 text-[#118FD1]' icon={faPeopleCarryBox} />
        //             <h4 className='text-2xl text-[#fff]'>Sell This Month</h4>
        //             <h3 className='text-2xl font-semibold text-[#118FD1]'>+$1 M</h3>
        //         </div>
        //         <div className='bg-[rgba(152,152,152,0.5)] rounded-md py-7'>
        //             <FontAwesomeIcon className='text-3xl mb-3 text-[#118FD1]' icon={faHandshakeAngle} />
        //             <h4 className='text-2xl'>Clients Satisfaction</h4>
        //             <h3 className='text-2xl font-semibold text-[#118FD1]'>100%</h3>
        //         </div>
        //         <div className='bg-[rgba(152,152,152,0.5)] rounded-md py-7'>
        //             <FontAwesomeIcon className='text-3xl mb-3 text-[#118FD1]' icon={faBoxesPacking} />
        //             <h4 className='text-2xl'>Total Products</h4>
        //             <h3 className='text-2xl font-semibold text-[#118FD1]'>+50 K</h3>
        //         </div>
        //         <div className='bg-[rgba(152,152,152,0.5)] rounded-md py-7'>
        //             <FontAwesomeIcon className='text-3xl mb-3 text-[#118FD1]' icon={faChartColumn} />
        //             <h4 className='text-2xl'>Annual Reveneu</h4>
        //             <h3 className='text-2xl font-semibold text-[#118FD1]'>+120 M</h3>
        //         </div>
        //     </div>
        // </div>
        <div className="md:w-[80%] md:mt-28 px-3 md:grid grid-cols-12 expert-section gap-5 mx-auto mt-24 mb-8">
            {/*--------------BUSINESS SUMMARY HEADER------------ */}
      <div className="col-span-3 text-left">
        <h2 className="text-[22px] font-[600] text-left">Business Summary</h2>
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
          <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[25px] border border-[#014E9C]">
            More Data
          </button>
        </div>
      </div>

      {/* <h2 className='text-2xl md:text-3xl font-semibold'></h2>
            <p className='w-4/5 md:w-3/6 mx-auto text-center text-sm'>We have a bunch of talented & expert team whom always doing hard work for ensure the best services. </p> */}
      <div className="col-span-9">
        
      </div>
    </div>
    );
};

export default BusinessSummary;