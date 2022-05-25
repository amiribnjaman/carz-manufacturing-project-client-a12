import React from 'react';

const MyOrdersSingleRow = ({ order, index }) => {
    const { productName, price, quantity, payment_status, productId } = order

    return (
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {index + 1}
            </th>
            <td class="px-6 py-4">
            {productName}
            </td>
            <td class="px-6 py-4">
                {productId}
            </td>
            <td class="px-6 py-4">
                ${price}
            </td>
            <td class="px-6 py-4">
                {quantity}
            </td>
            <td class="px-6 py-4 text-right">
                {
                    payment_status != false ? <button class="font-medium text-green-500 hover:underline">paid</button>
                    : <button href="#" class="font-medium text-red-600 hover:underline">Cancel Order</button>
                }
            </td>
        </tr>
    );
};

export default MyOrdersSingleRow;