import React from 'react';

const MakeAdminSingleRow = ({ user, index }) => {
    const { name, email, role } = user
    console.log(user);
    return (
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {name ? name : 'Not set Yet!'}
            </th>
            <td class="px-6 py-4">
                {email}
            </td>
            <td class="px-6 py-4">
                {role}
            </td>
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
};

export default MakeAdminSingleRow;