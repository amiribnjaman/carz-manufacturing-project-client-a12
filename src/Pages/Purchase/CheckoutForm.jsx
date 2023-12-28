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
  const [loading, setloading] = useState(false)

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
    setloading(!loading)
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
      setloading(!loading);
      setCardError(
        <p className="mt-3 text-red-500 text-left text-sm font-semibold">
          {intentError?.message}
        </p>
      );
    } else {
      setloading(!loading);
      setCardError("");
      setTransactionId(paymentIntent.id);
      setReload(!reload);
      // toast.success("Your Payment has Succeed.");

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
       navigate("/purchase/message");
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
          className={`${
            loading ? "bg-[#5d86af]" : "bg-[#014E9C]"
          } text-center w-full flex justify-center text-white py-3 mt-3 font-semibold text-[14px]`}
          type="submit"
          disabled={!stripe}
        >
          {loading ? (
            <svg
              aria-hidden="true"
              class="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            "Pay Now"
          )}
        </button>
      </form>
      {cardError && cardError}
      {successMsg && successMsg}
    </>
  );
};

export default CheckoutForm;
