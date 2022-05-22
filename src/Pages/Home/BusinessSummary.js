import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faBoxesPacking, faPeopleCarryBox, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const BusinessSummary = () => {
    return (
        <div className='my-20 buniness-section w-11/12 mx-auto'>
            <h3 className='text-white text-3xl pt-12 font-semibold'>Our Stutastics</h3>
            <div className='w-11/12 mb-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 align-items-center text-white mt-16'>
                <div className='bg-[rgba(0,0,0,.3)] rounded-md py-7'>
                    <FontAwesomeIcon className='text-3xl mb-3 text-[#00CCBD]' icon={faPeopleCarryBox} />
                    <h4 className='text-2xl'>Sell This Month</h4>
                    <h3 className='text-2xl font-semibold text-[#099e94]'>+$1 M</h3>
                </div>
                <div className='bg-[rgba(0,0,0,.3)] rounded-md py-7'>
                    <FontAwesomeIcon className='text-3xl mb-3 text-[#00CCBD]' icon={faHandshakeAngle} />
                    <h4 className='text-2xl'>Clients Satisfaction</h4>
                    <h3 className='text-2xl font-semibold text-[#099e94]'>100%</h3>
                </div>
                <div className='bg-[rgba(0,0,0,.3)] rounded-md py-7'>
                    <FontAwesomeIcon className='text-3xl mb-3 text-[#00CCBD]' icon={faBoxesPacking} />
                    <h4 className='text-2xl'>Total Products</h4>
                    <h3 className='text-2xl font-semibold text-[#099e94]'>+50 K</h3>
                </div>
                <div className='bg-[rgba(0,0,0,.3)] rounded-md py-7'>
                    <FontAwesomeIcon className='text-3xl mb-3 text-[#00CCBD]' icon={faChartColumn} />
                    <h4 className='text-2xl'>Annual Reveneu</h4>
                    <h3 className='text-2xl font-semibold text-[#099e94]'>+120 M</h3>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;