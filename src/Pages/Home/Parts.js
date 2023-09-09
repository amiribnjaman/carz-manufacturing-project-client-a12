import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentLoading from '../../Components/componentLoading';

const Parts = () => {
    const navigate = useNavigate()
    const [parts, setParts] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [detailsId, setDetailsId] = useState(0)
    const [getProductDetails, setGetProductDetails] = useState(null)

    useEffect(() => {
        fetch('https://carz-manufacturing-project-server-a12.vercel.app/products/latest')
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
        fetch(`https://carz-manufacturing-project-server-a12.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setGetProductDetails(data)
            })

    }

    return (
        <>
            <div className='mt-20 w-11/12 mx-auto text-left text-2xl font-semibold flex items-center'>
                <div className='w-[6px] rounded h-[35px] bg-[#5B72EE] mr-4 mt-1'></div>
                <h2 className='text-2xl md:text-3xl'>Best Selling Products</h2>
            </div>
            { parts.length <= 0 ? <ComponentLoading /> : ''}

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
                                            onClick={
                                                () => handleDetails(part._id)
                                            }
                                            className=' border rounded-full px-4 py-1 bg-gray-200 text-[13px] text-gray-600 hover:bg-gray-700 hover:text-white' data-modal-toggle="defaultModal">Details</button>

                                        {/* <!-- Main modal --> */}
                                        <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${showDetails ? 'block' : 'hidden'} flex justify-center items-center bg-[rgba(237,246,253,.4)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full `}>
                                            <div class="relative p-4 w-full max-w-2xl h-full">
                                                {/* <!-- Modal content --> */}
                                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                    {/* <!-- Modal header --> */}
                                                    <div class="flex justify-between items-start px-4 pt-3 pb-1 rounded-t border-b dark:border-gray-600">
                                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                            {getProductDetails?.productName}
                                                        </h3>
                                                        <button
                                                            onClick={() => setShowDetails(!showDetails)}
                                                            type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </button>
                                                    </div>
                                                    {/* <!-- Modal body --> */}
                                                    <div class="p-4 space-y-4">
                                                        <div>
                                                            <img style={{ width: '100%', height: '250px' }} src={getProductDetails?.image} alt="" />
                                                        </div>
                                                        <p class="text-[14px] text-center text-gray-500 dark:text-gray-400">
                                                            {getProductDetails?.description}
                                                        </p>
                                                        <div className='text-left mx-2'>
                                                            <h3 className='text-xl font-semibold'>{getProductDetails?.productName} <span className='text-[12px] font-normal'>({getProductDetails?.code})</span></h3>
                                                            <h4 className='flex justify-between font-semibold'>
                                                                <span>Price: </span>
                                                                <span>$ {getProductDetails?.price}</span>
                                                            </h4>
                                                            <h4 className='flex justify-between text-[15px]'>
                                                                <span>Minimum Order: </span>
                                                                <span>{getProductDetails?.minOrder} pics</span>
                                                            </h4>

                                                            <h4 className='flex justify-between text-[15px]'>
                                                                <span>Available Products: </span>
                                                                <span>{getProductDetails?.quantity} pics</span>
                                                            </h4>

                                                            <h4 className='flex justify-between text-[15px]'>
                                                                <span>Ratings: </span>
                                                                <span>
                                                                    <div class="flex items-center mb-5">
                                                                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                        <p class="ml-2 text-[13px] font-bold text-gray-900 dark:text-white">(4.95)</p>
                                                                    </div>
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Modal footer --> */}
                                                    <div class="flex items-center justify-center px-6 py-3 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                                        <button
                                                            onClick={() => handleNavigateToPurchase(detailsId)}
                                                            data-modal-toggle="defaultModal" type="button" class="rounded-full px-8 py-2 bg-green-400 text-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center">Buy Now</button>
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

            </div>
        </>
    );
};

export default Parts;