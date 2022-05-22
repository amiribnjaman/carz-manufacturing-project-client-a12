import React from 'react';
import banner from '../../Assets/Images/banner.jpg'


const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={banner} alt="" />
                <div className='absolute top-1/4 flex justify-center left-1/4 text-white'>
                    <div>
                        <h5 className='text-sm'>carZ manufacturing</h5>
                        <h1 className='text-6xl text-[#00CCBD] font-bold'>Believe in the Best Quality</h1>
                        <p>We dominate this world for year of year. Our supreme objective is provide the best Quality. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;