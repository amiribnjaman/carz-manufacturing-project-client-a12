import React from 'react';
import { InfinitySpin } from "react-loader-spinner";
import './CSS/component.css'

const LoadingSpinner = () => {

    return (
      <div className="">
        <div class="loading-spiner flex h-[100vh] w-full text-center items-center justify-center ">
          <InfinitySpin width="310" color="#014E9C" />
        </div>
      </div>
    );
};

export default LoadingSpinner;