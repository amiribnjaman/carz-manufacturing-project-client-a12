import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import LoadingSpinner from '../../../Components/LoadingSpinner';
import MakeAdminSingleRow from '../../../Components/MakeAdminSingleRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // const { isLoading, error, data: users } = useQuery('users', () => {
    //     fetch('http://localhost:5000/user').then(res => res.json())
    // })
    // if (isLoading) {
    //     return <LoadingSpinner />
    // } else {
    //     console.log(users);
    // }
    return (
        <div className='w-[90%] border flex justify-between h-[460px] text-left'>
            <div className='w-full overflow-y-auto'>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <MakeAdminSingleRow
                                key={user._id}
                                user={user}
                                index={index}
                            />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;