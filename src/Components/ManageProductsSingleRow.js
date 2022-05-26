import React, { useState } from 'react';

const ManageProductsSingleRow = ({ product, index }) => {
    const { _id, productName, price, description, image, minOrder, quantity } = product
    const [togglePopup, setTogglePopUp] = useState(false)
    const [selectedId, setSelectedId] = useState('')


    // handle delete popup
    // handle delete popup
    const handleDeleteItemPopup = (id) => {
        setSelectedId(id)
        setTogglePopUp(!togglePopup)

    }
    const handleDeleteItem = () => {
        const id = selectedId
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setTogglePopUp(!togglePopup)
            })
    }

    return (
        <tr class="border-b items-center dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {index + 1}
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
                <td className="px-6 py-4 text-left">
                    <button
                        onClick={() => handleDeleteItemPopup(_id)}
                        className="text-[16px] text-red-500 lg:pl-3 pl-1 inline-block">
                            Delete
                    </button>

                    {/* Confirmation popup */}
                    <div id="popup-modal" tabindex="-1" className={`${togglePopup ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center`} aria-hidden="true">
                        <div className="relative p-4 w-full max-w-md h-full mx-auto mt-10 md:h-auto">
                            <div className="relative bg-white rounded-lg shadow">
                                <button
                                    onClick={handleDeleteItemPopup}
                                    type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                <div className="p-6 text-center">
                                    <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this item?</h3>
                                    <button
                                        onClick={handleDeleteItem}
                                        data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                        Yes, I'm sure
                                    </button>
                                    <button
                                        onClick={handleDeleteItemPopup}
                                        data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
        </tr >

    );
};

export default ManageProductsSingleRow;