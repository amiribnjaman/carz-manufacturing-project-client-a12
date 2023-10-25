import React from 'react';
import NotFoundImg from '../../Assets/Images/404.jpg'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    // Handle go home button
    const handleGoHome = () => {
        navigate('/')
    }
    
    return (
        <div className='text-center mx-auto w-2/4 mt-10 mb-24 md:h-[55vh]'>
            <img className='my-6 mx-auto' src={NotFoundImg} alt="" />
            <button
                onClick={handleGoHome}
                type="button" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Go Home</button>
        </div>
    );
};

export default NotFound;