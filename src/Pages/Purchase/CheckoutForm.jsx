import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PostalCodeElement,
} from "@stripe/react-stripe-js";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ total, product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [reload, setReload] = useState(false);
  const [user] = useAuthState(auth);
  const { _id, price } = product;
  const navigate = useNavigate()

  useEffect(() => {
    if (price) {
      fetch(
        "https://carz-manufacturing-project-server-a12.vercel.app/create-payment-intent",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ price }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);

  /**
   * HANDLE PAYMENT SUBMIT FUNCTION
   * @param {*} e FOR HANDEL EVENT
   *
   */
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!stripe) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(
        <p className="mt-3 text-red-500 text-left text-sm font-semibold">
          {error.message}
        </p>
      );
    } else {
      setCardError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (intentError) {
      setCardError(
        <p className="mt-3 text-red-500 text-left text-sm font-semibold">
          {intentError?.message}
        </p>
      );
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setReload(!reload);
      toast.success("Your Payment has Succeed.");
      navigate('/purchase/message')

      // data
      const data = {
        orderId: _id,
        transactionId: paymentIntent.id,
      };

      fetch(
        `https://carz-manufacturing-project-server-a12.vercel.app/order/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            orderId: _id,
            transactionId: paymentIntent.id,
          }),
        }
      );
    }
  };



  return (
    <>
      <form onSubmit={handlePaymentSubmit}>
        <div className="my-2">
          <label className="text-sm" htmlFor="phone">
            Your phone number
          </label>
          <input
            type="text"
            className="w-full border border-gray-200 py-2"
            id="phone"
          />
        </div>
        <div className="my-2">
          <label className="text-sm" htmlFor="zip">
            Zip Code
          </label>
          <input
            type="text"
            className="w-full border border-gray-200 py-2"
            id="zip"
          />
        </div>
        <label className="text-sm mt-4">
          Card details
          <CardElement className="border border-gray-100 p-3 " />
        </label>

        <button
          className="text-center w-full bg-[#014E9C] text-white py-3 mt-3 font-semibold text-[14px]"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
      {cardError && cardError}
      {successMsg && successMsg}
    </>
  );
};

export default CheckoutForm;
