import React from 'react';

const ManageOrdersSingleRow = ({ index, order }) => {
    const { _id, email, productName, price } = order

    return (
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 text-md font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                {index + 1}
            </th>
            <th scope="row" class="font-semibold ">
                {productName}
            </th>
            <td class="px-6 py-4">
            {_id}
            </td>
            <td class="px-6 py-4">
                {email}
            </td>
            <td class="px-6 py-4">
                ${price}
            </td>
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
};

export default ManageOrdersSingleRow;