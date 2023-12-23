import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";

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
    <div className="w-full mb-20">
      {/*==========PURCHASE MENU============== */}
      <div className="bg-[#014E9C]">
        <div class="md:flex py-2 pb-4 md:pb-0 justify-between items-center md:mx-auto md:w-[90%] sm:items-center sm:justify-between">
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
      <div className="w-full text-left md:grid grid-cols-4 gap-6 mt-6 px-6">
        {/*==========PURCHASE SIDEBAR============== */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="shadow p-4 rounded ">
            <h4 className="text-[15px] font-semibold">
              Customer Order History
            </h4>
            <div className="flex gap-4 mt-3">
              <div></div>
              <div>
                <h5 className="">Returned Cutomer</h5>
                <ul className="text-[13px] font-semibold gap-1 flex flex-col">
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
                  <ul className="text-[13px] font-semibold gap-1 flex flex-col">
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
        <div className="col-span-3 grid grid-cols-3">
          {/*================PURCHASE PRODUCT TABEL============== */}
          <div className="col-span-2">
            <table class="w-full rounded-tl text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Product Id
                  </th> */}
                  <th class="font-medium ">Product</th>
                  {/* <th class="font-medium px-6 py-4">Order Id</th> */}
                  <th class="font-medium px-6 py-4">Price</th>
                  <th class="font-medium px-6 py-4">Quantity</th>
                  <th class="font-medium px-6 py-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {/* {myOrders.map((order, index) => (
                <MyOrdersSingleRow
                  index={index}
                  key={order._id}
                  order={order}
                />
              ))} */}
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium dark:text-white whitespace-nowrap"
                  >
                    afhej456282
                  </th>
                  {/* <th class="font-medium ">Marcediz m12</th> */}
                  <th class="font-medium px-6 py-4">afhej456282</th>
                  <th class="font-medium px-6 py-4">1299999999</th>
                  <th class="font-medium px-6 py-4">1</th>
                </tr>
              </tbody>
            </table>

            {/*================PURCHASE CALCULATION============== */}
            <div className="text-right mt-8">
              <div>
                <h3 className="font-semibold mb-1">Calculation:</h3>
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
                    <li className="font-semibold text-[14px]">1299999999</li>
                    <li className="font-semibold text-[14px]">1000</li>
                    <li className="font-semibold text-[14px]">1000</li>
                    <li className="font-semibold text-[14px]">450</li>
                  </ul>
                </div>
                {/* Total */}
                <div className="mt-8 flex gap-14 justify-end">
                  <h4 className="text-green-400 font-bold">Total</h4>
                  <h5 className="text-green-400 font-bold">
                    {" "}
                    <span className="text-black mr-2 text-[11px]">BDT</span>
                    18393739
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

{
  /* <div className="md:flex">
  <div className="md:w-1/2">
    <div class="p-3 mb-4 max-w-md text-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
      <h4 className="font-semibold text-md">Name: {user?.displayName}</h4>
      <h5 className="font-semibold text-sm">Email: {user?.email}</h5>
    </div>
    <div class="p-5 gap-4 max-w-md text-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
      <div className="flex gap-4">
        <div>
          <img width={200} src={product.image} alt="" />
        </div>
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.productName}
          </h5>
          <p>Description: {product.description}</p>
          <h6 className="text-md">Min Order: {product.minOrder}</h6>
          <h6 className="text-md">Available Quantity: {product.quantity}</h6>

          <h5 className="font-semibold">price: ${product.price}</h5>
          <p>Ratings: 5</p>
        </div>
      </div>
    </div>
  </div>

  <div className="md:w-1/2 mt-8 md:mt-0 md:mx-12">
    <form onSubmit={handleOrderForm} className="border p-3 rounded shadow">
      <div className="">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="pro_name"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 cursor-not-allowed bg-transparent border-0 border-b border-gray-300 appearance-none "
            placeholder="Product Name *"
            required=""
            value={product.productName}
            disabled
          />
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="pro_price"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none "
            value={product.price + " USD"}
            disabled
            placeholder="Product Unique code "
          />
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            onChange={(e) => handleQuantityOnChange(e.target.value)}
            type="text"
            name="pro_quantity"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none"
            placeholder="Min Product Order Quantity"
          />
          {quantityMsg && quantityMsg}
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none"
            placeholder="Your Address "
          />
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="phone_number"
            class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none"
            placeholder="Your Phone Number "
          />
        </div>
      </div>
      {errMsg && errMsg}
      <div className="flex gap-4">
        <button
          disabled={orderBtnDisable}
          type="submit"
          class={`${
            orderBtnDisable
              ? "cursor-not-allowed bg-gray-400 hover:bg-gray-400"
              : "cursor-pointer bg-yellow-400 hover:bg-yellow-500 "
          } mt-2 text-left text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5`}
        >
          Order Now
        </button>
      </div>
    </form>
  </div>
</div>; */
}
