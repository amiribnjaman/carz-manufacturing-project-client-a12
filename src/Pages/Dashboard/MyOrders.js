import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MyOrdersSingleRow from "../../Components/MyOrdersSingleRow";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://carz-manufacturing-project-server-a12.vercel.app/order/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);

  return (
    <div class="w-full relative overflow-x-auto shadow-md sm:rounded-lg">    
          {/*======================MY ORDER TABLE================= */}
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              SL
            </th>
            <th class="font-semibold ">Product Name</th>
            <th class="px-6 py-4">Order Id</th>
            <th class="px-6 py-4">Price</th>
            <th class="px-6 py-4">Quantity</th>
            <th class="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => (
            <MyOrdersSingleRow index={index} key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
