import React from 'react';
import { Carousel } from '3d-react-carousal';

const Reviews = () => {
    let slides = [
        <div className='bg-black w-full'>
            name: 
            email: 
            description: 
        </div>,
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        // <img src="https://picsum.photos/800/303/?random" alt="4" />,
        // <img src="https://picsum.photos/800/304/?random" alt="5" />
    ];

    const callback = function (index) {
        console.log("callback", index);
    }
    return (
        <div className='w-4/6 mx-auto mb-10'>
            <Carousel slides={slides} autoplay={true} interval={4000}  onSlideChange={callback} />
        </div>

    );
};

export default Reviews;