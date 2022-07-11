import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Parts = () => {
    const navigate = useNavigate()
    const [parts, setParts] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [detailsId, setDetailsId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/products/latest')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const handleNavigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }


    // details
    const handleDetails = (id) => {
        setShowDetails(!showDetails)
        setDetailsId(id)
    }

    return (
        <>
            <div className='mt-20 w-11/12 mx-auto text-left text-2xl font-semibold flex items-center'>
                <div className='w-[6px] rounded h-[35px] bg-[#5B72EE] mr-4 mt-1'></div>
                <h2 className=''>Best Selling Products</h2>
            </div>
            {
                parts.length <= 0 ? <LoadingSpinner /> : ''}

            <div className='mb-20 mt-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10'>
                {
                    parts.map(part => <>
                        <div className='grid shadow-md grid-cols-1 gap-6 rounded-tl-md rounded-tr-md rounded-br-sm rounded-bl-sm'>
                            <div className=''>
                                <img style={{ height: '230px', width: '100%' }} className='rounded-tl-md rounded-tr-md' src={part.image} alt="" />
                            </div>
                            <div className='text-center py-2'>
                                <h6 className='w-2/5 mx-auto rounded-full mb-4 text-[11px] bg-blue-100 py-1 px-2 text-dark'>Best Selling</h6>


                                <div className='flex mx-1.5 justify-between'>
                                    <div className='text-left'>
                                        <h4 className='text-xl font-semibold'>{part.productName.split(' ')[0]}</h4>
                                        {/* <p>
                                    Description: {part.description}
                                </p> */}
                                        {/* <h6 className='text-md'>Min Order: {part.minOrder}</h6>
                                <h6 className='text-md'>Available Quantity: {part.quantity}</h6> */}

                                        <h5 className=' text-[15px]'>Price: </h5>
                                        <p>Ratings:</p>
                                    </div>

                                    <div className='text-right'>
                                        {/* Details Button */}
                                        <button
                                            onClick={() => handleDetails(part._id)}
                                            className=' border rounded-full px-4 py-1 bg-gray-200 text-[13px] text-gray-600 hover:bg-gray-700 hover:text-white' data-modal-toggle="defaultModal">Details</button>

                                        {/* <!-- Main modal --> */}
                                        <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${showDetails ? 'block' : 'hidden'} flex justify-center items-center bg-[rgba(237,246,253,.4)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}>
                                            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                                {/* <!-- Modal content --> */}
                                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                    {/* <!-- Modal header --> */}
                                                    <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                            Product Details
                                                        </h3>
                                                        <button
                                                            onClick={() => setShowDetails(!showDetails)}
                                                            type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </button>
                                                    </div>
                                                    {/* <!-- Modal body --> */}
                                                    <div class="p-6 space-y-6">
                                                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                                        </p>
                                                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                                        </p>
                                                    </div>
                                                    {/* <!-- Modal footer --> */}
                                                    <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                                        <button
                                                            onClick={() => handleNavigateToPurchase(detailsId)}
                                                            data-modal-toggle="defaultModal" type="button" class="rounded-full px-8 py-2 bg-green-400 text-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center">Buy Now</button>
                                                        <button
                                                            onClick={() => setShowDetails(!showDetails)}
                                                            data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-full border border-gray-200 text-sm font-medium px-8 py-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className='mr-2 font-semibold'>${part.price}</div>
                                        <div className='mr-2 flex justify-end'>
                                            <svg class="w-4 h-4 text-yellow-400 mt-[2px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <span class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='mx-auto text-center w-full flex justify-center gap-1 mt-4 mb-1'>
                                    <button
                                        onClick={() => {
                                            handleNavigateToPurchase(part._id)
                                        }}
                                        className='w-2/3 mx-auto rounded-full px-5 py-1 bg-green-400 text-white'>Buy Now</button>

                                </div>
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