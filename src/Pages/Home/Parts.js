import React from 'react';
import tier1 from '../../Assets/Images/tier1.jpg'

const Parts = () => {
    return (
        <div className='my-20 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10'>
            <div className='grid grid-cols-2 gap-4 shadow p-2'>
                <div>
                    <img src={tier1} alt="" />
                </div>
                <div className='text-left'>
                    <h4 className='text-2xl font-semibold'>Name: Tier</h4>
                    <p>
                        Description: This is the market one of the best tier.
                    </p>
                    <h6 className='text-md'>Min Order: 100</h6>
                    <h6 className='text-md'>Available Quantity: 500</h6>

                    <h5 className='font-semibold'>price: $199</h5>
                    <p>Ratings: 5</p>
                    <button className=' border rounded-sm border-[#00CCBD] px-5 mt-4 py-2 hover:bg-[#00CCBD] hover:text-white'>Purchase Now</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 shadow p-2'>
                <div>
                    <img src={tier1} alt="" />
                </div>
                <div className='text-left'>
                    <h4 className='text-2xl font-semibold'>Name: Tier</h4>
                    <p>
                        Description: This is the market one of the best tier.
                    </p>
                    <h6 className='text-md'>Min Order: 100</h6>
                    <h6 className='text-md'>Available Quantity: 500</h6>

                    <h5 className='font-semibold'>price: $199</h5>
                    <p>Ratings: 5</p>
                    <button className=' border rounded-sm border-[#00CCBD] px-5 mt-4 py-2 hover:bg-[#00CCBD] hover:text-white'>Purchase Now</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 shadow p-2'>
                <div>
                    <img src={tier1} alt="" />
                </div>
                <div className='text-left'>
                    <h4 className='text-2xl font-semibold'>Name: Tier</h4>
                    <p>
                        Description: This is the market one of the best tier.
                    </p>
                    <h6 className='text-md'>Min Order: 100</h6>
                    <h6 className='text-md'>Available Quantity: 500</h6>

                    <h5 className='font-semibold'>price: $199</h5>
                    <p>Ratings: 5</p>
                    <button className=' border rounded-sm border-[#00CCBD] px-5 mt-4 py-2 hover:bg-[#00CCBD] hover:text-white'>Purchase Now</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 shadow p-2'>
                <div>
                    <img src={tier1} alt="" />
                </div>
                <div className='text-left'>
                    <h4 className='text-2xl font-semibold'>Name: Tier</h4>
                    <p>
                        Description: This is the market one of the best tier.
                    </p>
                    <h6 className='text-md'>Min Order: 100</h6>
                    <h6 className='text-md'>Available Quantity: 500</h6>

                    <h5 className='font-semibold'>price: $199</h5>
                    <p>Ratings: 5</p>
                    <button className=' border rounded-sm border-[#00CCBD] px-5 mt-4 py-2 hover:bg-[#00CCBD] hover:text-white'>Purchase Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Parts;