import { faBox, faPersonRunning, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoSection = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {/* bg-[#83CC34] bg-[#00CCBD]*/}
                <div className='  bg-gradient-to-r from-cyan-500 to-[#14C38E]  py-10 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faBox} className='p-5 h-8 w-8 border-2 border-slate-400 bg-white rounded-full' />
                    <h3 className='text-xl pl-3 font-semibold'>Quality Products</h3>
                </div>
                <div className='bg-gradient-to-r from-sky-500 to-[#00CCBD] py-10 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faPersonRunning} className='p-5 h-8 w-8 border-2 border-slate-400 bg-white rounded-full' />
                    <h3 className='text-xl pl-3 font-semibold'>Less Price</h3>
                </div>
                <div className=' bg-gradient-to-r from-[#3BACB6] to-[#EFD345] py-10 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faTruckRampBox} className='p-5 h-8 w-8 border-2 border-slate-400 bg-white rounded-full' />
                    <h3 className='text-xl pl-3 font-semibold'>Argent Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;