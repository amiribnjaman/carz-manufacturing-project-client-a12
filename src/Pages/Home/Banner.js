import React from 'react';


const Banner = () => {
    return (
        <div className=''>
            <div className='relative banner-section -z-20'>
                <div className='banner-image-box absolute mb-2 text-white'>
                    <div>
                        <h5 className='text-sm uppercase'>car'Z - A manufacturing company</h5>
                        <h1 className='text-2xl md:text-5xl text-[#00CCBD] font-bold'>We Believe in Quality</h1>
                        <p>Our supreme objective is to provide the best Quality Products. </p>
                        <button className='px-8 py-2 cursor-pointer hover:bg-[#00CCBD] text-white border border-[#00CCBD] mt-6 '>Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;