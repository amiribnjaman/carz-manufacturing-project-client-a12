import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [msg, setMsg] = useState('')

    const reviewStar = {
        size: 18,
        count: 4.5,
        color: "#808080",
        activeColor: "#ffa534",
        value: 4.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
        halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
        filledIcon: <FontAwesomeIcon icon={faStar} />,
        onChange: newValue => {
            setReviewValue(newValue)
        }
    };
    const [reviewValue, setReviewValue] = useState(reviewStar.value)


    const handleReviewForm = e => {
        e.preventDefault()
        const data = {
            name: user?.displayName,
            email: user?.email,
            review: e.target.review_description.value,
            rating: reviewValue
        }

        if (data.name && data.email && data.review && data.rating) {
            setMsg('')
            fetch('https://salty-peak-12518.herokuapp.com/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Your review Accepted!')
                    e.target.reset()
                })
        } else {
            setMsg(<p className='text-sm text-red-700 text-left my-1 ml-2'>Please fill all required fields.</p>)
        }
    }

    return (
        <div className='w-full border h-[460px] '>
            <form
                onSubmit={handleReviewForm}
                className='w-3/5 ml-10 mt-2 text-left overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-2'>Add Review and send Rating </h2>
                {msg && msg}
                <hr />
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_name" class="block cursor-not-allowed py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Your Name " disabled value={user?.displayName} required="" />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" class="block cursor-not-allowed py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Your Email " disabled value={user?.email} required="" />
                </div>
                <div class="relative z-0 w-full mb-4 group">
                    <textarea id="message" name='review_description' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:border" placeholder="Your review ..."></textarea>
                </div>

                <ReactStars {...reviewStar} />

                <button type="submit" class="text-white mt-1 bg-yellow-500 hover:bg-yellow-600 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit Review</button>
            </form>

        </div>
    );
};

export default AddReview;