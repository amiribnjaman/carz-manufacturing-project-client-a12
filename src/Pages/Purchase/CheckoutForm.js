import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PostalCodeElement,
} from "@stripe/react-stripe-js";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CheckoutForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [reload, setReload] = useState(false);
  const [user] = useAuthState(auth);
    const { _id, price } = product;

    useEffect(() => {
      console.log(price);
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
            console.log(data);
            if (data.clientSecret) {
              setClientSecret(data.clientSecret);
            }
          });
      }
      console.log(price);
    }, [price]);

  const handleSubmit = async (e) => {
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
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent.id);
      setReload(!reload);
      setSuccessMsg(
        <div className="mt-3 text-green-500 text-left text-sm font-semibold">
          <p>Your Payment Succeed.</p>
        </div>
      );

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
    
  const appearance = {
    theme: "stripe",
    variables: {
      borderRadius: "6px",
      // colorDanger: 'purple',
    },
    rules: {
      ".Input": {
        boxShadow: "inset 0 0 0 1px rgb(209, 213, 219)",
        border: "none",
        outline: "none",
        padding: "0.75em 1em",
        color: "#444",
      },
      ".Input:focus": {
        boxShadow: "inset 0 0 0 2px #2563eb",
      },
    },
  };

  // STRIPE STYLES
//   const appearance = {
//     theme: "stripe",
//     variables: {
//       colorPrimary: "#0570de",
//       colorBackground: "#ffffff",
//       colorText: "#30313d",
//       colorDanger: "#df1b41",
//       fontFamily: "Ideal Sans, system-ui, sans-serif",
//       spacingUnit: "2px",
//       borderRadius: "4px",
//       // See all possible variables below
//     },
//   };

  const options = {
    layout: {
      type: "tabs",
      defaultCollapsed: false,
    },
  };
  // const { elements: element } = stripe.elements({ appearance });
  // const paymentElement = element.create("payment", options);
  // paymentElement.mount("#payment-element");

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <CardElement className="border border-gray-100 p-3" />
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
