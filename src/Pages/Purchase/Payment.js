import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3UM8Bz2Bj9ObfRnuJFUOwzC4icUuFiWDpKEni77bzv5tORC2bA4eepjCg0u5xcQskWbvAmzaVkQ13nUb6XeRnP00z0iLMb9t');

const Payment = () => {
    const { id } = useParams()
    console.log(id);
    const [product, setProduct] = useState('')
    console.log(id);
    // return
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    return (
        <div className='w-9/12 mx-auto my-12'>
            <div className='md:flex justify-center'>

                <div className='w-1/2 mx-12 p-5 text-left shadow'>
                    <div className='mb-3'>
                        <h3 className='font-semibold text-xl text-blue-600'>Payment Now</h3>
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Please pay for <span className='text-green-600'>{product.productName}</span></h5>
                        <h3 className='text-sm font-semibold mb-1'>Your credentials are safe. Feel free to provide.</h3>
                        <hr />
                    </div>
                    <div className='mt-8'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                product={product}
                            />
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;