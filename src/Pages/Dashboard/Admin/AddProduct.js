import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);


    const handleAddProductForm = e => {
        e.preventDefault()

        const userName = user?.displayName
        const email = user?.email
        const pro_name = e.target.pro_name.value
        const pro_code = e.target.pro_code.value
        const pro_quantity = e.target.pro_quantity.value
        const pro_price = e.target.pro_price.value
        const pro_min_order = e.target.pro_min_order.value
        const pro_image = e.target.pro_image.value
        const pro_desc = e.target.pro_desc.value

        const data = {
            user: userName,
            email: email,
            productName: pro_name,
            code: pro_code,
            quantity: pro_quantity,
            price: pro_price,
            minOrder: pro_min_order,
            image: pro_image,
            description: pro_desc,
        }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
            })

    }


    return (
        <div className='w-[90%] border flex justify-between h-[460px] text-left'>
            <div className='w-full p-4 overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-2'>Add A Product</h2>

                <form onSubmit={handleAddProductForm}>
                    <div className=''>
                        <div className='flex gap-8'>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_name" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Product Name " required="" />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_code" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Product Unique code " />
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="pro_quantity" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Product total quantity " />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_price" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Per unit price " />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_min_order" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Minimum Order " />
                            </div>
                        </div>

                        <div className='flex gap-8'>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="pro_image" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Product Image URL " />
                            </div>
                        </div>

                        <div>
                            <div class="relative z-0 w-full mb-6 group">
                                <textarea rows='3' name="pro_desc" class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none " placeholder="Description " ></textarea>
                            </div>
                        </div>

                    </div>
                    <button type="submit" class="mt-4 text-white bg-[#06998f] hover:bg-[#06998f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>

            </div >
        </div >
    );
};

export default AddProduct;