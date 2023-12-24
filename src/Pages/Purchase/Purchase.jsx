import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import VisaCard from "./../../../src/Assets/Images/cards/visa.png";
import MasterCard from "./../../../src/Assets/Images/cards/card.png";
import AmericanExpress from "./../../../src/Assets/Images/cards/american-express.png";

const Purchase = () => {
  const navigate = useNavigate();
  const [user, ,] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [quantityMsg, setQuantityMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [limit, setLimit] = useState(product?.quantity);
  const [orderBtnDisable, setOrderBtnDisable] = useState(true);
  const [paymentBtnDisable, setPaymentBtnDisable] = useState(true);

  useEffect(() => {
    fetch(
      `https://carz-manufacturing-project-server-a12.vercel.app/product/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setQuantity(+data.minOrder);
        setLimit(+data.quantity);
      });
  }, [id, product]);

  const handleQuantityOnChange = (value) => {
    if (value < quantity) {
      setQuantityMsg(
        <p className="text-sm text-red-800 ml-2 text-left my-1">
          Please Order at least{" "}
          <span className="font-semibold">{quantity}</span> pices of{" "}
          <span className="font-semibold">{product.productName}</span>.
        </p>
      );
      setOrderBtnDisable(true);
    } else if (value > limit) {
      setOrderBtnDisable(true);
      setQuantityMsg(
        <p className="text-sm text-red-800 ml-2 text-left my-1">
          Please Order less than{" "}
          <span className="font-semibold">{product.quantity}</span> pices of{" "}
          <span className="font-semibold">{product.productName}</span>.
        </p>
      );
    } else {
      setOrderBtnDisable(false);
      setNewQuantity(value);
      setQuantityMsg("");
    }
  };

  const handleOrderForm = (e) => {
    e.preventDefault();
    const orderProduct = product.productName;
    const price = product.price;
    const orderQuantity = newQuantity;
    const address = e.target.address.value;
    const phone_number = e.target.phone_number.value;

    const data = {
      email: user?.email,
      productId: id,
      productName: orderProduct,
      price,
      quantity: orderQuantity,
      address,
      phoneNumber: phone_number,
      payment_status: false,
    };
    if (orderProduct && price && orderQuantity && address && phone_number) {
      setErrMsg("");
      fetch("https://carz-manufacturing-project-server-a12.vercel.app/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          e.target.reset();
          if (data?.insertedId) {
            toast.success("Ordered Successfully!");
            setPaymentBtnDisable(false);
            setQuantity();
          } else {
            setPaymentBtnDisable(true);
            toast.error("Something wrong. Please try again.");
          }
        });
    } else {
      setErrMsg(
        <p className="text-red-800 font-semibold text-sm text-left my-1 ml-2">
          Please provide all valid information to Order.
        </p>
      );
    }
  };

  return (
    <div className="w-full mb-16">
      {/*==========PURCHASE MENU============== */}
      <div className="bg-[#014E9C]">
        <div class="md:flex py-2 pb-4 md:pb-0 justify-between items-center md:mx-auto md:w-full px-8 sm:items-center sm:justify-between">
          <div className="footer-logo py-2 self-start md:mb-0 md:mt-24px mb-2">
            <Link to="/" class="md:flex sm:mb-0">
              <span class="self-center text-white LOGO text-2xl font-semibold whitespace-nowrap dark:text-white">
                thecar<span className="text-green-400">Z</span>
              </span>
            </Link>
          </div>

          <div className="flex gap-1 md:gap-3 items-center">
            <ul className="text-white flex gap-8 text-sm">
              <li>Wishlist</li>
              <li>Cart</li>
              <li>All order</li>
            </ul>
          </div>
        </div>
      </div>

      {/*==========PURCHASE BODY============== */}
      <div className="w-full text-left md:grid grid-cols-9 gap-5 mt-10 px-6">
        {/*==========PURCHASE SIDEBAR============== */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="shadow p-4 rounded ">
            <h4 className="text-[15px] font-semibold">
              Customer Order History
            </h4>
            <div className="flex gap-4 mt-3">
              <div></div>
              <div>
                <h5 className="">Returned Cutomer</h5>
                <ul className="text-[13px] gap-1 flex flex-col">
                  <li>Orders total: 3462</li>
                  <li>Totally paid: 482914</li>
                  <li>Customer has refunds</li>
                  <li>Refunded orders: 2</li>
                  <li>Refunde rate: 9%</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow p-4 rounded ">
              <h4 className="text-[15px] font-semibold">
                Customer information
              </h4>
              <div className="flex gap-4 mt-3">
                <div></div>
                <div>
                  <h5 className="">New customer </h5>
                  <ul className="text-[13px] gap-1 flex flex-col">
                    <li>Name: Mr. X</li>
                    <li>Email: example@mail.com</li>
                    <li>Mobile: null</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*==========PURCHASE CONTENT============== */}
        <div className="col-span-7 grid grid-cols-6 gap-5">
          {/*================PURCHASE PRODUCT TABEL============== */}
          <div className="col-span-4">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-4 py-3 rounded-s-lg">
                      Product
                    </th>
                    <th scope="col" class="px-4 py-3">
                      Qty
                    </th>
                    <th scope="col" class="px-4 py-3 rounded-e-lg text-right">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-4 flex gap-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div>
                        <img
                          className="w-[80px] h-[50px]"
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="text-blue-600">{product.productName}</h4>
                        <h6>Code: {product._id}</h6>
                      </div>
                    </th>
                    <td class="px-4 py-4 text-center">1</td>
                    <td class="px-4 py-4 text-right">{product.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/*================PURCHASE CALCULATION============== */}
            <div className="text-right mt-8">
              <div>
                {/* <h3 className="font-medium mb-1">Calculation:</h3> */}
                <div className="flex justify-end gap-12">
                  <ul>
                    <li className="font-semibold text-[14px]">Subtotal:</li>
                    <li className="font-semibold text-[14px]">
                      Shipping Cost:
                    </li>
                    <li className="font-semibold text-[14px]">Discount:</li>
                    <li className="font-semibold text-[14px]">Taxes: </li>
                  </ul>
                  <ul>
                    <li className="font-semibold text-[14px]">
                      {product.price}
                    </li>
                    <li className="font-semibold text-[14px]">100</li>
                    <li className="font-semibold text-[14px]">00</li>
                    <li className="font-semibold text-[14px]">150</li>
                  </ul>
                </div>
                {/* Total */}
                <div className="mt-8 flex gap-14 justify-end">
                  <h4 className="text-green-400 font-bold">Total</h4>
                  <h5 className="text-green-400 font-bold">
                    {" "}
                    <span className="text-black mr-2 text-[11px]">BDT</span>
                    {+product.price + 100 + 0 + 150}
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/*================PURCHASE PAYMENT CARD============== */}
          <div className="col-span-2 shadow rounded py-6 px-4">
            <div className="flex justify-between text-left items-center">
              <h4 className="text-[14px]">Pay by credit/debit card</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center mt-2">
              <h4 className="text-[14px]">We accept:</h4>
              <div className="flex gap-0 mx-auto md:mx-0 items-center ">
                <img
                  src={VisaCard}
                  alt=""
                  className="w-[40px] p-1.5 h-[30px] rounded bg-[#fff]"
                />
                <img
                  src={MasterCard}
                  alt=""
                  className="w-[40px] p-1.5 h-[25px] rounded  bg-[#fff]"
                />
              </div>
            </div>

            <form action="" className="mt-4 flex flex-col gap-3">
              <div>
                <label htmlFor="card-name" className="text-[14px]">
                  Name of Card
                </label>
                <input
                  type="text"
                  id="card-name"
                  className="w-full border-gray-100"
                />
              </div>

              <div>
                <label htmlFor="card-num" className="text-[14px]">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-num"
                  className="w-full border-gray-100"
                />
              </div>

              <div className="flex gap-2">
                <div>
                  <label htmlFor="card-name" className="text-[13px]">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    placeholder="12"
                    className="w-full border-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    id="card-name"
                    placeholder="2024"
                    className="w-full border-gray-100 mt-6"
                  />
                </div>
                <div>
                  <label htmlFor="card-name" className="text-[12px]">
                    Security Code
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    placeholder="398"
                    className="w-full border-gray-100"
                  />
                </div>
              </div>

              <div>
                <button className="text-center w-full bg-[#014E9C] text-white py-3 mt-3 font-semibold text-[14px]">
                  Pay now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
