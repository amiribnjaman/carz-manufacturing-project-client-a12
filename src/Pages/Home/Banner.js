import React from 'react';


const Banner = () => {
    return (
        <div className=''>
            <div className='relative banner-section -z-20'>
                <div className='banner-image-box absolute mb-2 text-white'>
                    <div className='text-[#343C97]'>
                        <h5 className='text-sm uppercase'>car'Z - A manufacturing company</h5>
                        <h1 className='text-xl md:text-4xl font-bold'>We Believe in Quality</h1>
                        <p class>Our supreme objective is to provide the best Quality Products. </p>
                        <button className='px-8 py-2 hover:bg-[#00CCBD] border border-[#343C97] mt-6 hover:cursor-pointer'>Explore More</button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="banner">
        //     <div class="wrapper">
        //         <div class="wave"></div>
        //     </div>
        // </div>
    )
};

export default Banner;