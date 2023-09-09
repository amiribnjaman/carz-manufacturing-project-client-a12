import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='my-12 mx-auto'>
            <div class="flex h-72 w-full text-center items-center justify-center ">
                <div class="w-16 mx-auto h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div> 
            <h3 className='text-blue-600 font-semibold block text-center'>Please wait a while. The site is loading for you.</h3>
        </div>
    );
};

export default LoadingSpinner;