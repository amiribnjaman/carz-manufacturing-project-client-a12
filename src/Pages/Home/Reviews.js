import React from 'react';
import { Carousel } from '3d-react-carousal';
import user1 from '../../Assets/Images/user/user1.jpg'

const Reviews = () => {
    let slides = [
        <div className='comment-container text-black bg-gray-200 w-full'>
            <div className='mt-4 px-8'>
                <p><span className='text-4xl font-semibold'>&ldquo;</span> This is market best company. This is market best company. This is market best company. This is market best company. This is market best company. This is market best company. <span className='text-4xl font-semibold -mb-2 inline-block'>&rdquo;</span></p>
                <div>

                    <div className='mt-4 w-14 h-14 text-center mx-auto '>
                        <img className='w-full h-full rounded-full' src={user1} alt="" />
                    </div>
                    <h6>Ratings: 5</h6>
                    <h5 className=' text-xl font-semibold'>Stephen Hertz</h5>
                </div>
            </div>
        </div>,
        <div className='comment-container text-black bg-gray-200 w-full'>
            <div className='mt-4 px-8'>
                <p><span className='text-4xl font-semibold'>&ldquo;</span> This is market best company. This is market best company. This is market best company. This is market best company. This is market best company. This is market best company. <span className='text-4xl font-semibold -mb-2 inline-block'>&rdquo;</span></p>
                <div>

                    <div className='mt-4 w-14 h-14 text-center mx-auto '>
                        <img className='w-full h-full rounded-full' src={user1} alt="" />
                    </div>
                    <h6>Ratings: 5</h6>
                    <h5 className=' text-xl font-semibold'>Stephen Hertz</h5>
                </div>
            </div>
        </div>,
        <div className='comment-container text-black bg-gray-200 w-full'>
            <div className='mt-4 px-8'>
                <p><span className='text-4xl font-semibold'>&ldquo;</span> This is market best company. This is market best company. This is market best company. This is market best company. This is market best company. This is market best company. <span className='text-4xl font-semibold -mb-2 inline-block'>&rdquo;</span></p>
                <div>

                    <div className='mt-4 w-14 h-14 text-center mx-auto '>
                        <img className='w-full h-full rounded-full' src={user1} alt="" />
                    </div>
                    <h6>Ratings: 5</h6>
                    <h5 className=' text-xl font-semibold'>Stephen Hertz</h5>
                </div>
            </div>
        </div>,
       
        
        

        // <img src="https://picsum.photos/800/300/?random" alt="1" />,
        // <img src="https://picsum.photos/800/301/?random" alt="2" />,
        // <img src="https://picsum.photos/800/302/?random" alt="3" />,
        // <img src="https://picsum.photos/800/303/?random" alt="4" />,
        // <img src="https://picsum.photos/800/304/?random" alt="5" />
    ];

    const callback = function (index) {
        console.log("callback", index);
    }
    return (
        <>
            <h2 className='text-2xl mb-10 font-semibold'>What Our Clients Says?</h2>
            <div className='w-4/6 mx-auto mb-10'>
                <Carousel slides={slides} interval={4000} onSlideChange={callback} />
            </div>
        </>


    );
};

export default Reviews;