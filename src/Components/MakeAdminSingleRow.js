import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MakeAdminSingleRow = ({ user, index }) => {
    const { _id, name, email, role } = user
    const [loginUser] = useAuthState(auth)

    const handleMakeAdmin = () => {
        console.log(email)
        if (loginUser) {
            fetch(`https://salty-peak-12518.herokuapp.com/makeAdmin/${loginUser?.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ id: _id, email: email, role: 'admin' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }


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
                {role != 'admin' ? <button
                    onClick={() => handleMakeAdmin()}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Make Admin</button>
                    : ''}
            </td>
        </tr>
    );
};

export default MakeAdminSingleRow;