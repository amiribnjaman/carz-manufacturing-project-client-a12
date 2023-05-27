import React, { useEffect, useState } from 'react';
import ManageOrdersSingleRow from '../../../Components/ManageOrdersSingleRow';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://carz-manufacturing-project-server-a12.vercel.app/order')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    return (
        <div className='w-full border flex justify-between h-[460px] text-left'>
            <div className='w-full mt-4 overflow-y-auto'>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                SL
                            </th>
                            <th class="font-semibold ">
                                Product Name
                            </th>
                            <th class="px-6 py-4">
                                Order Id
                            </th>
                            <th class="px-6 py-4">
                                Customer Email
                            </th>
                            <th class="px-6 py-4">
                                Price
                            </th>
                            <th class="px-6 py-4 text-right">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrdersSingleRow
                                key={order._id}
                                order={order}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;