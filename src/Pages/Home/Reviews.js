import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import LoadingSpinner from '../../Components/LoadingSpinner';
import Carousel from 'react-elastic-carousel'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from "react-rating-stars-component";


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    // const { isLoading, error, data: reviews } = useQuery('user', () => fetch('https://carz-manufacturing-project-server-a12.vercel.app/review').then(res => res.json()))

    useEffect(() => {
        fetch('https://carz-manufacturing-project-server-a12.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    // if (isLoading) {
    //     return <LoadingSpinner />
    // } else {
    //     console.log(reviews);
    // }
    console.log(reviews)


    const reviewStar = {
        size: 15,
        count: 5,
        color: "#808080",
        activeColor: "#ffa534",
        value: null,
        isHalf: true,
        edit: false,
        emptyIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
        halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
        filledIcon: <FontAwesomeIcon icon={faStar} />
    };


    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-2xl md:text-3xl mb-10 mt-24 font-semibold'>What Our Clients Says?</h2>

            {/*Reviews showing in big devices */}
            <div className='hidden md:block'>
                <Carousel itemsToShow={2} enableAutoPlay={true} itemsToScroll={2} showArrows={false} autoPlaySpeed={5000}>
                    {reviews?.map(review => <div className=' shadow-lg gap-4 w-11/12 min-h-[250px] rounded-md p-6 mx-4 mb-8 mt-12 bg-gray-50'>
                        <div className='review-vector'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </div>
                        <h2 className='my-2 font-semibold'>{review?.name}</h2>
                        <div className='hidden'>
                            {reviewStar.value = review?.rating}
                        </div>
                        <div className='flex justify-center my-2'>
                            <ReactStars {...reviewStar} />

                        </div>

                        <div className=''> <span className='text-2xl'>&#8220;</span> {review?.review} <span className='text-xl'>&#8221;</span></div>

                    </div>)}
                </Carousel>
            </div>

            {/* Reviews showing in mobile devices */}
            <div className='block md:hidden'>
                <Carousel itemsToShow={1} enableAutoPlay={true} itemsToScroll={1} showArrows={false} autoPlaySpeed={5000}>
                    {reviews?.map(review => <div className=' shadow-lg gap-4 w-11/12 min-h-[250px] rounded-md p-6 mx-4 mb-8 mt-12 bg-gray-50'>
                        <div className='review-vector'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </div>
                        <h2 className='my-2 font-semibold'>{review?.name}</h2>
                        <div className='hidden'>
                            {reviewStar.value = review?.rating}
                        </div>
                        <div className='flex justify-center my-2'>
                            <ReactStars {...reviewStar} />

                        </div>

                        <div className=''> <span className='text-2xl'>&#8220;</span> {review?.review} <span className='text-xl'>&#8221;</span></div>

                    </div>)}
                </Carousel>
            </div>
        </div>

    );
};

export default Reviews;