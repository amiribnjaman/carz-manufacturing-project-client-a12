import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Purchase = () => {
    const navigate = useNavigate()
    const [user, ,] = useAuthState(auth);
    const { id } = useParams()
    const [product, setProduct] = useState('')
    const [quantityMsg, setQuantityMsg] = useState('')
    const [quantity, setQuantity] = useState(product?.minOrder)
    const [limit, setLimit] = useState(product?.quantity)

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setQuantity(+data.minOrder)
                setLimit(+data.quantity)
            })
    }, [id, product])

console.log(product);
    const handleOrderForm = e => {
        e.preventDefault()
        const orderProduct = product.productName
        const price = product.price
        const orderQuantity = quantity
        
    }

    const handleQuantityOnChange = value => {
        if (value < quantity) {
            setQuantityMsg(<p className='text-sm text-red-800 ml-2 text-left my-1'>Please Order at least <span className='font-semibold'>{quantity}</span> pices of <span className='font-semibold'>{product.productName}</span>.</p>)
        } else if (value > limit){
            setQuantityMsg(<p className='text-sm text-red-800 ml-2 text-left my-1'>Please Order less than <span className='font-semibold'>{product.quantity}</span> pices of <span className='font-semibold'>{product.productName}</span>.</p>)
        } else {
            setQuantityMsg('')
            setQuantity(value)
        }
    }

    return (
        <div className='w-9/12 mx-auto my-12'>
            <div className='md:flex'>
                <div className='w-1/2'>
                    <div class="p-3 mb-4 max-w-md text-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                        <h4 className='font-semibold text-md'>Name: {user?.displayName}</h4>
                        <h5 className='font-semibold text-sm'>Email: {user?.email}</h5>
                    </div>
                    <div class="p-5 gap-4 max-w-md text-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                        <div className='flex gap-4'>
                            <div>
                                <img width={200} src={product.image} alt='' />
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

                <div className='w-1/2 mx-12'>
                    <form
                        onSubmit={handleOrderForm}
                        className='border p-3 rounded shadow'>
                        <div className=''>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_name" class="block py-2.5 px-3 w-full text-sm text-gray-900 cursor-not-allowed bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Product Name *" required="" value={product.productName} disabled />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_price" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " value={product.price + ' USD'} disabled placeholder="Product Unique code " />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input
                                    onChange={(e)=>handleQuantityOnChange(e.target.value)}
                                    type="text" name="pro_quantity" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none" placeholder="Min Product Order Quantity" />
                                {quantityMsg && quantityMsg}
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="address" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none" placeholder="Your Address " />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="phone_number" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none" placeholder="Your Phone Number " />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <button type="submit" class="mt-4 text-left text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 ">Order Now</button>
                            <button
                            onClick={() => navigate(`/payment/${product._id}`)}
                            type="button" class="mt-4 text-left text-white bg-[#06998f] hover:bg-[#06998f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 ">Payment</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;