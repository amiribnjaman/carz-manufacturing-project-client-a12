import React, { useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
// import LoadingSpinner from '../../../Components/LoadingSpinner';
import ManageProductsSingleRow from '../../../Components/ManageProductsSingleRow';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    // const { data, isLoading, error } = useQuery('products', () => {
    //     fetch('http://localhost:5000/product').then(res => res.json())
    // })

    // if (data) {
    //     console.log(data);
    // }

    // if (isLoading) {
    //     return <LoadingSpinner />
    // }

    useEffect(() => {
        fetch('http://localhost:5000/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    return (
        <div className='w-full border flex justify-between h-[460px] text-left'>
            <div className='w-full overflow-y-auto'>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                SL
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Minimum Order
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <ManageProductsSingleRow
                                key={product._id}
                                index={index}
                                product={product}
                            />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;