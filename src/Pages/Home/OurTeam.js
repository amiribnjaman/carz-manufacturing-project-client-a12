import React from 'react';
import user2 from '../../Assets/Images/user/user2.jpg'
import user3 from '../../Assets/Images/user/user3.jpg'
import user4 from '../../Assets/Images/user/user4.jpg'
import user5 from '../../Assets/Images/user/user5.jpg'

const OurTeam = () => {
    return (
        <div className='w-10/12 expert-section mx-auto mt-24 mb-8'>
            <h2 className='text-3xl font-semibold'>Meet Our Experts</h2>
            <p className='w-3/6 mx-auto text-center text-sm'>We have a bunch of talented & expert team whom always doing hard work for ensure the best services. </p>
            <div className='grid md:grid-cols-4 h-[90%] gap-4 w-full mt-12'>
                <div className='expert-box opacity-1 cursor-pointer shadow-md'>
                    <img className='w-full h-[100%] rounded-md' src={user3} alt="" />
                    <div className='expert-details flex items-center text-center justify-center font-semibold text-black'>
                        <div>
                            <h3 className='text-white text-xl'>Steven Marks</h3>
                            <h5 className='text-[#00CCBD] '>Enginner</h5>
                            <h6 className='text-[13px]'>Team Leader, the carZ</h6>
                            <button className='mt-2 underline text-[12px]'>Know More</button>
                        </div>
                    </div>
                </div>
                <div className='expert-box opacity-1 cursor-pointer shadow-md'>
                    <img className='w-full h-[100%] rounded-md' src={user2} alt="" />
                    <div className='expert-details flex items-center text-center justify-center font-semibold text-black'>
                        <div>
                            <h3 className='text-white text-xl'>Tom Hars</h3>
                            <h5 className='text-[#00CCBD] '>Engine Expert</h5>
                            <h6 className='text-[13px]'>Senior Engineer, the carZ</h6>
                            <button className='mt-2 underline text-[12px]'>Know More</button>
                        </div>
                    </div>
                </div>
                <div className='expert-box opacity-1 cursor-pointer shadow-md'>
                    <img className='w-full h-[100%] rounded-md' src={user4} alt="" />
                    <div className='expert-details flex items-center text-center justify-center font-semibold text-black'>
                        <div>
                            <h3 className='text-white text-xl'>Rock Holland</h3>
                            <h5 className='text-[#00CCBD] '>Desinger</h5>
                            <h6 className='text-[13px]'>Design Expert, the carZ</h6>
                            <button className='mt-2 underline text-[12px]'>Know More</button>
                        </div>
                    </div>
                </div>
                <div className='expert-box opacity-1 cursor-pointer shadow-md'>
                    <img className='w-full h-[100%] rounded-md' src={user5} alt="" />
                    <div className='expert-details flex items-center text-center justify-center font-semibold text-black'>
                        <div>
                            <h3 className='text-white text-xl'>Ali Haddar</h3>
                            <h5 className='text-[#00CCBD] '>Engineer</h5>
                            <h6 className='text-[13px]'>Senior Operator, the carZ</h6>
                            <button className='mt-2 underline text-[12px]'>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;