import React from 'react';

const LoadingSpinner = () => {
    return (
        <div class="flex h-72 w-full text-center items-center justify-center ">
            <div class="w-16 mx-auto h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;