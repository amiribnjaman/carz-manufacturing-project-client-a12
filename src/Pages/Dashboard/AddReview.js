import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);

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

    return (
        <div className='w-full border h-96 '>
            <form className='w-3/5 ml-10 mt-2 text-left overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-2'>Add Review and send rating </h2>
                <hr />
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" class="block cursor-not-allowed py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Your Name " disabled value={user?.displayName} required="" />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" class="block cursor-not-allowed py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Email " disabled value={user?.email} required="" />
                </div>
                <div class="relative z-0 w-full mb-4 group">
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:border" placeholder="Your review ..."></textarea>
                </div>

                <ReactStars {...reviewStar} />

                <button type="submit" class="text-white mt-1 bg-yellow-500 hover:bg-yellow-600 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit Review</button>
            </form>

        </div>
    );
};

export default AddReview;