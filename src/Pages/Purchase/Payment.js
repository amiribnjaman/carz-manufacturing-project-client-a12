import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const [product, setProduct] = useState('')
    // console.log(id);
    // return
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    return (
        <div className='w-9/12 mx-auto my-12'>
            <div className='md:flex'>
                <div className='w-1/2'>
                    <div class="p-5 gap-4 max-w-md text-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                        <div className='flex gap-4'>
                            <div>
                                <img width={150} src={product.image} alt='' />
                            </div>
                            <div>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
                                <p>
                                    Description: {product.description}
                                </p>
                                <h6 className='text-md'>Min Order: {product.minOrder}</h6>
                                <h6 className='text-md'>Available Quantity: {product.quantity}</h6>

                                <h5 className='font-semibold'>price: ${product.price}</h5>
                                <p>Ratings: 5</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 mx-12 text-left'>
                    <div className='mb-3'>
                        <h3 className='font-semibold text-xl text-blue-600'>Payment Now</h3>
                        <h3 className='text-sm font-semibold mb-1'>Your credentials are safe. Feel free to provide.</h3>
                        <hr />
                    </div>
                    <form
                        className='border p-3 rounded shadow'>
                        <div className=''>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_name" class="block py-2.5 px-3 w-full text-sm text-gray-900 cursor-not-allowed bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Product Name *" required="" value={product.productName} disabled />

                            </div>
                        </div>
                        <button
                            type="submit" class="mt-4 text-left text-white bg-[#06998f] hover:bg-[#06998f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 ">Payment</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Payment;