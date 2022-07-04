import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query'
import LoadingSpinner from '../../Components/LoadingSpinner';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    // const { isLoading, error, data: reviews } = useQuery('user', () => fetch().then(res => res.json()))

    useEffect(()=> {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    // if (isLoading) {
    //     return <LoadingSpinner />
    // } else {
    //     console.log(reviews);
    // }


    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-3xl mb-10 mt-24 font-semibold'>What Our Clients Says?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 text-center'>
                {
                    reviews.map(review => <div class="block p-6 mb-2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <q> {review.review} </q>
                        <h3 className='font-semibold text-sm mt-6'>{review.name}</h3>
                        <p className='text-[13px]'>Ratings: {review.rating}</p>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Reviews;