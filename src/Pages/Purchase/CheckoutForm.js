import React, { useState, useEffect } from 'react';
import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckoutForm = ({ product }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [reload, setReload] = useState(false)
    const [user] = useAuthState(auth)
    const { _id, price } = product

    useEffect(() => {
        if (price) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }
    }, [price, clientSecret, reload])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(<p className='mt-3 text-red-500 text-left text-sm font-semibold'>{error.message}</p>);
        } else {
            setCardError('')
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(<p className='mt-3 text-red-500 text-left text-sm font-semibold'>{intentError?.message}</p>)
        } else {
            setCardError('')
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent.id)
            setReload(!reload)
            setSuccessMsg(<div className='mt-3 text-green-500 text-left text-sm font-semibold'>
                <p>Your Payment Succeed.</p>
                
            </div>)

            // data 
            const data = {
                orderId: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({orderId: _id,transactionId: paymentIntent.id})
            })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='bg-green-500 text-white px-6 rounded font-semibold py-1 mt-4 ' type="submit" disabled={!stripe}>
                    Pay
                </button>

            </form>
            {
                cardError && cardError
            }
            {
                successMsg && successMsg
            }
        </>

    );
};

export default CheckoutForm;