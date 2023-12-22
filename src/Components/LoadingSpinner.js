import React from 'react';
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
      <div className="">
        <div class="flex h-[100vh] w-full text-center items-center justify-center ">
          <InfinitySpin width="300" className='mx-auto' color="#014E9C" />
        </div>
      </div>
    );
};

export default LoadingSpinner;