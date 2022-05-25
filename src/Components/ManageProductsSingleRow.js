import React from 'react';

const ManageProductsSingleRow = ({ product, index }) => {
    const { productName, price, description, image, minOrder, quantity } = product

    return (
        <tr class="border-b items-center dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                { index + 1}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {productName}
            </th>
            <td class="px-6 py-4">
                ${price}
            </td>
            <td class="px-6 py-4">
                {description}
            </td>
            <td class="px-6 py-4">
                <img width={35} src={image} alt="" />
            </td>
            <td class="px-6 py-4">
                {quantity}
            </td>
            <td class="px-6 py-4">
                {minOrder}
            </td>
            <td class="px-6 py-4 text-right">
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
        </tr>

    );
};

export default ManageProductsSingleRow;