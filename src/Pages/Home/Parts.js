import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Parts = () => {
    const navigate = useNavigate()
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products/latest')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const handleNavigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <> 
            <div className='mt-20 text-3xl font-semibold'>
            <h2>Best Selling Products</h2>
            </div>
            {
                parts.length <= 0 ? <LoadingSpinner /> : ''}

            <div className='mb-20 mt-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10'>
                {
                    parts.map(part => <>
                        <div className='grid shadow-md grid-cols-1 gap-8 rounded-tl-md rounded-tr-md'>
                            <div className=''>
                                <img style={{height: '230px', width: '100%'}} className='rounded-tl-md rounded-tr-md' src={part.image} alt="" />
                            </div>
                            <div className='text-center py-2'>
                                <h6 className='w-2/5 mx-auto rounded-full mb-4 text-[11px] bg-blue-200 py-1 px-2 text-dark'>Best Seller</h6>
                                <h4 className='text-xl font-semibold'>{part.productName}</h4>
                                {/* <p>
                                    Description: {part.description}
                                </p> */}
                                {/* <h6 className='text-md'>Min Order: {part.minOrder}</h6>
                                <h6 className='text-md'>Available Quantity: {part.quantity}</h6> */}

                                <h5 className='font-semibold'>price: ${part.price}</h5>
                                {/* <p>Ratings: 5</p> */}
                                <button
                                    onClick={() => {
                                        handleNavigateToPurchase(part._id)
                                    }}
                                    className='w-1/2 border rounded-full px-5 mt-4 py-1.5 bg-green-400 text-white'>Buy Now</button>
                            </div>
                        </div>
                    </>
                    )
                }


                {/* <div className='grid grid-cols-2 gap-4 shadow p-2'>
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
                    <button className=' border rounded-sm border-[#000] px-5 mt-4 py-2 hover:bg-[#000] hover:text-white'>Purchase Now</button>
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
                    <button className=' border rounded-sm border-[#000] px-5 mt-4 py-2 hover:bg-[#000] hover:text-white'>Purchase Now</button>
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
                    <button className=' border rounded-sm border-[#000] px-5 mt-4 py-2 hover:bg-[#000] hover:text-white'>Purchase Now</button>
                </div>
            </div> */}

            </div>
        </>
    );
};

export default Parts;