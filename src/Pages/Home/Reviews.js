import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Carousel from "react-elastic-carousel";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import vector1 from '../../Assets/Images/user/vector1.jpg'
import user1 from '../../Assets/Images/user/user1.jpg'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // const { isLoading, error, data: reviews } = useQuery('user', () => fetch('https://carz-manufacturing-project-server-a12.vercel.app/review').then(res => res.json()))

  useEffect(() => {
    fetch("https://carz-manufacturing-project-server-a12.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  // if (isLoading) {
  //     return <LoadingSpinner />
  // } else {
  //     console.log(reviews);
  // }

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
    filledIcon: <FontAwesomeIcon icon={faStar} />,
  };

  return (
    // <div className='w-10/12 mx-auto'>
    //     <h2 className='text-2xl md:text-3xl mb-10 mt-24 font-semibold'>What Our Clients Says?</h2>

    //     {/*Reviews showing in big devices */}
    //     <div className='hidden md:block'>
    //         <Carousel itemsToShow={2} enableAutoPlay={true} itemsToScroll={2} showArrows={false} autoPlaySpeed={5000}>
    //             {reviews?.map(review => <div className=' shadow-lg gap-4 w-11/12 min-h-[250px] rounded-md p-6 mx-4 mb-8 mt-12 bg-gray-50'>
    //                 <div className='review-vector'>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    //                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    //                     </svg>
    //                 </div>
    //                 <h2 className='my-2 font-semibold'>{review?.name}</h2>
    //                 <div className='hidden'>
    //                     {reviewStar.value = review?.rating}
    //                 </div>
    //                 <div className='flex justify-center my-2'>
    //                     <ReactStars {...reviewStar} />

    //                 </div>

    //                 <div className=''> <span className='text-2xl'>&#8220;</span> {review?.review} <span className='text-xl'>&#8221;</span></div>

    //             </div>)}
    //         </Carousel>
    //     </div>

    //     {/* Reviews showing in mobile devices */}
    //     <div className='block md:hidden'>
    //         <Carousel itemsToShow={1} enableAutoPlay={true} itemsToScroll={1} showArrows={false} autoPlaySpeed={5000}>
    //             {reviews?.map(review => <div className=' shadow-lg gap-4 w-11/12 min-h-[250px] rounded-md p-6 mx-4 mb-8 mt-12 bg-gray-50'>
    //                 <div className='review-vector'>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    //                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    //                     </svg>
    //                 </div>
    //                 <h2 className='my-2 font-semibold'>{review?.name}</h2>
    //                 <div className='hidden'>
    //                     {reviewStar.value = review?.rating}
    //                 </div>
    //                 <div className='flex justify-center my-2'>
    //                     <ReactStars {...reviewStar} />

    //                 </div>

    //                 <div className=''> <span className='text-2xl'>&#8220;</span> {review?.review} <span className='text-xl'>&#8221;</span></div>

    //             </div>)}
    //         </Carousel>
    //     </div>
    // </div>

    // <div className="md:mt-32 px-3 md:mb-12 md:w-[80%] mx-auto grid grid-cols-8 gap-4">
    //     {/*------------------REVIEW LEFT SECTION------------------- */}
    //   <div className="order-1 col-span-3 md:mr-6 gap-y-6">
    //     {/* Review single card */}
    //     <div className="mt-5">
    //       <div>
    //         {/* Review Top */}
    //         <div className="flex gap-4">
    //           <img
    //             src=""
    //             className="w-[40px] h-[40px] bg-[#ddd] rounded-full"
    //             alt=""
    //           />
    //           <div>
    //             <h3 className="text-left text-[14px] font-semibold">
    //               Andres H.
    //             </h3>
    //             <h5 className="text-[12px]">Houston, Germany</h5>
    //           </div>
    //         </div>
    //       </div>
    //       {/* Review body */}
    //       <div className="mt-3">
    //         <div className="text-left">
    //           <span className="text-[11px] font-semibold">review</span>.
    //           <span className="text-[11px] font-semibold">10 September</span>
    //         </div>
    //         <div>
    //           <p className="text-[12px] font-semibold text-left">
    //             We manufacturing and providing bounch of types products those we
    //             provide to our clites for a long time.
    //           </p>
    //         </div>
    //       </div>
    //           </div>
    //           {/* Review single card */}
    //     <div className="mt-5">
    //       <div>
    //         {/* Review Top */}
    //         <div className="flex gap-4">
    //           <img
    //             src=""
    //             className="w-[40px] h-[40px] bg-[#ddd] rounded-full"
    //             alt=""
    //           />
    //           <div>
    //             <h3 className="text-left text-[14px] font-semibold">
    //               Andres H.
    //             </h3>
    //             <h5 className="text-[12px]">Houston, Germany</h5>
    //           </div>
    //         </div>
    //       </div>
    //       {/* Review body */}
    //       <div className="mt-3">
    //         <div className="text-left">
    //           <span className="text-[11px] font-semibold">review</span>.
    //           <span className="text-[11px] font-semibold">10 September</span>
    //         </div>
    //         <div>
    //           <p className="text-[12px] font-semibold text-left">
    //             We manufacturing and providing bounch of types products those we
    //             provide to our clites for a long time.
    //           </p>
    //         </div>
    //       </div>
    //           </div>
    //           {/* Review single card */}
    //     <div className="mt-5">
    //       <div>
    //         {/* Review Top */}
    //         <div className="flex gap-4">
    //           <img
    //             src=""
    //             className="w-[40px] h-[40px] bg-[#ddd] rounded-full"
    //             alt=""
    //           />
    //           <div>
    //             <h3 className="text-left text-[14px] font-semibold">
    //               Andres H.
    //             </h3>
    //             <h5 className="text-[12px]">Houston, Germany</h5>
    //           </div>
    //         </div>
    //       </div>
    //       {/* Review body */}
    //       <div className="mt-3">
    //         <div className="text-left">
    //           <span className="text-[11px] font-semibold">review</span>.
    //           <span className="text-[11px] font-semibold">10 September</span>
    //         </div>
    //         <div>
    //           <p className="text-[12px] font-semibold text-left">
    //             We manufacturing and providing bounch of types products those we
    //             provide to our clites for a long time.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/*---------------------- Review right section-------------- */}
    //   <div className="order-3 col-span-3 md:ml-6 gap-y-6">
    //     {/* Review single card */}
    //     <div className="mt-5 ml-auto">
    //       <div>
    //         {/* Review Top */}
    //         <div className="flex gap-4 ml-auto">

    //           <div className="ml-auto">
    //             <h3 className="text-right text-[14px] font-semibold">
    //               Andres H.
    //             </h3>
    //             <h5 className="text-[12px]">Houston, Germany</h5>
    //                       </div>
    //                       <img
    //             src=""
    //             className="w-[40px] h-[40px] bg-[#ddd] rounded-full"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       {/* Review body */}
    //       <div className="mt-3">
    //         <div className="text-right">
    //           <span className="text-[11px] font-semibold">review</span>.
    //           <span className="text-[11px] font-semibold">10 September</span>
    //         </div>
    //         <div>
    //           <p className="text-[12px] font-semibold text-right">
    //             We manufacturing and providing bounch of types products those we
    //             provide to our clites for a long time.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Review single card */}
    //     <div className="mt-5 ml-auto">
    //       <div>
    //         {/* Review Top */}
    //         <div className="flex gap-4 ml-auto">

    //           <div className="ml-auto">
    //             <h3 className="text-right text-[14px] font-semibold">
    //               Andres H.
    //             </h3>
    //             <h5 className="text-[12px]">Houston, Germany</h5>
    //                       </div>
    //                       <img
    //             src=""
    //             className="w-[40px] h-[40px] bg-[#ddd] rounded-full"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       {/* Review body */}
    //       <div className="mt-3">
    //         <div className="text-right">
    //           <span className="text-[11px] font-semibold">review</span>.
    //           <span className="text-[11px] font-semibold">10 September</span>
    //         </div>
    //         <div>
    //           <p className="text-[12px] font-semibold text-right">
    //             We manufacturing and providing bounch of types products those we
    //             provide to our clites for a long time.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Review single card */}
    //     <div className="mt-5 ml-auto">
    //       <div>
    //         {/* Review Top */}
    //         <div className="flex gap-4 ml-auto">

    //           <div className="ml-auto">
    //             <h3 className="text-right text-[14px] font-semibold">
    //               Andres H.
    //             </h3>
    //             <h5 className="text-[12px]">Houston, Germany</h5>
    //                       </div>
    //                       <img
    //             src=""
    //             className="w-[40px] h-[40px] bg-[#ddd] rounded-full"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       {/* Review body */}
    //       <div className="mt-3">
    //         <div className="text-right">
    //           <span className="text-[11px] font-semibold">review</span>.
    //           <span className="text-[11px] font-semibold">10 September</span>
    //         </div>
    //         <div>
    //           <p className="text-[12px] font-semibold text-right">
    //             We manufacturing and providing bounch of types products those we
    //             provide to our clites for a long time.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/*---------------------------- Reveiw heading ----------------------------- */}
    //   <div className="order-2 col-span-2">
    //     <h2 className="text-[22px] font-[600]">Clients Testimonial</h2>
    //     {/* Divider */}
    //     <div className="flex justify-center">
    //       <div className="flex mx-auto jusify-between gap-2 mt-2 ">
    //         <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
    //         <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
    //         <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
    //         <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
    //         {/* <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span> */}
    //         <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
    //       </div>
    //     </div>
    //     <div className="text-justify w-[80%] mx-auto text-sm mt-10 ">
    //       <h4>
    //         We manufacturing and providing bounch of types products those we
    //         provide to our clites for a long time.
    //       </h4>
    //               <div className="text-center">
    //               <button className="text-center hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[25px] border border-[#014E9C]">
    //         See All Reviews
    //       </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div className="order-2 col-span-2">
    //     <h2 className="text-[22px] font-[600]">Products Categories</h2>
    //     {/* Divider *
    //     <div className="flex float-right jusify-between gap-2 ml-auto mt-2 ">
    //       <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
    //       <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
    //       <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
    //       <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
    //       <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
    //     </div>
    //     <div className="text-right text-sm mt-10 w-[80%] ml-auto">
    //       <h4>
    //         We manufacturing and providing bounch of types products those we
    //         provide to our clites for a long time.
    //       </h4>
    //       <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[15px] border border-[#014E9C]">
    //         See All Categories
    //       </button>
    //     </div>
    //   </div> */}
    // </div>
    <div className="md:mt-20 mt-16 px-3 md:mb-12 md:w-[80%] mx-auto grid md:grid-cols-8 gap-4">
      {/*------------------REVIEW LEFT SECTION------------------- */}
      <div className="md:order-1 order-2 md:col-span-6">
        <div className="gap-6 grid md:grid-cols-2 md:mr-6 gap-y-6">
          {/* Review single card */}
          <div className="mt-5">
            <div>
              {/* Review Top */}
              <div className="flex gap-4">
                <img
                  src={user1}
                  className="w-[45px] h-[45px] bg-[#dddddd] rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-left text-[14px] font-semibold">
                    Andres H.
                  </h3>
                  <h5 className="text-[12px]">Houston, Germany</h5>
                </div>
              </div>
            </div>
            {/* Review body */}
            <div className="mt-3">
              <div className="text-left flex gap-2 items-center">
                <div className="text-[11px] font-semibold flex gap-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-[14px] h-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-[12px]">5</span>
                </div>
                <span className="flex justify-self-center pt-[-3px]">.</span>
                <span className="text-[11px] font-semibold">10 September</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-left">
                  We manufacturing and providing bounch of types products those
                  we provide to our clites for a long time.
                </p>
              </div>
            </div>
          </div>
          {/* Review single card */}
          <div className="mt-5">
            <div>
              {/* Review Top */}
              <div className="flex gap-4">
                <img
                  src={user1}
                  className="w-[45px] h-[45px] bg-[#dddddd] rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-left text-[14px] font-semibold">
                    Andres H.
                  </h3>
                  <h5 className="text-[12px]">Houston, Germany</h5>
                </div>
              </div>
            </div>
            {/* Review body */}
            <div className="mt-3">
              <div className="text-left flex gap-2 items-center">
                <div className="text-[11px] font-semibold flex gap-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-[14px] h-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-[12px]">5</span>
                </div>
                <span className="flex justify-self-center pt-[-3px]">.</span>
                <span className="text-[11px] font-semibold">10 September</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-left">
                  We manufacturing and providing bounch of types products those
                  we provide to our clites for a long time.
                </p>
              </div>
            </div>
          </div>
          {/* Review single card */}
          <div className="mt-5">
            <div>
              {/* Review Top */}
              <div className="flex gap-4">
                <img
                  src={user1}
                  className="w-[45px] h-[45px] bg-[#dddddd] rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-left text-[14px] font-semibold">
                    Andres H.
                  </h3>
                  <h5 className="text-[12px]">Houston, Germany</h5>
                </div>
              </div>
            </div>
            {/* Review body */}
            <div className="mt-3">
              <div className="text-left flex gap-2 items-center">
                <div className="text-[11px] font-semibold flex gap-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-[14px] h-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-[12px]">4.8</span>
                </div>
                <span className="flex justify-self-center pt-[-3px]">.</span>
                <span className="text-[11px] font-semibold">10 September</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-left">
                  We manufacturing and providing bounch of types products those
                  we provide to our clites for a long time.
                </p>
              </div>
            </div>
          </div>
          {/* Review single card */}
          <div className="mt-5">
            <div>
              {/* Review Top */}
              <div className="flex gap-4">
                <img
                  src={user1}
                  className="w-[45px] h-[45px] bg-[#dddddd] rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-left text-[14px] font-semibold">
                    Andres H.
                  </h3>
                  <h5 className="text-[12px]">Houston, Germany</h5>
                </div>
              </div>
            </div>
            {/* Review body */}
            <div className="mt-3">
              <div className="text-left flex gap-2 items-center">
                <div className="text-[11px] font-semibold flex gap-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-[14px] h-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-[12px]">5</span>
                </div>
                <span className="flex justify-self-center pt-[-3px]">.</span>
                <span className="text-[11px] font-semibold">10 September</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-left">
                  We manufacturing and providing bounch of types products those
                  we provide to our clites for a long time.
                </p>
              </div>
            </div>
          </div>
          {/* Review single card */}
          <div className="mt-5">
            <div>
              {/* Review Top */}
              <div className="flex gap-4">
                <img
                  src={user1}
                  className="w-[45px] h-[45px] bg-[#dddddd] rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-left text-[14px] font-semibold">
                    Andres H.
                  </h3>
                  <h5 className="text-[12px]">Houston, Germany</h5>
                </div>
              </div>
            </div>
            {/* Review body */}
            <div className="mt-3">
              <div className="text-left flex gap-2 items-center">
                <div className="text-[11px] font-semibold flex gap-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-[14px] h-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-[12px]">5</span>
                </div>
                <span className="flex justify-self-center pt-[-3px]">.</span>
                <span className="text-[11px] font-semibold">10 September</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-left">
                  We manufacturing and providing bounch of types products those
                  we provide to our clites for a long time.
                </p>
              </div>
            </div>
          </div>
          {/* Review single card */}
          <div className="mt-5">
            <div>
              {/* Review Top */}
              <div className="flex gap-4">
                <img
                  src={user1}
                  className="w-[45px] h-[45px] bg-[#dddddd] rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="text-left text-[14px] font-semibold">
                    Andres H.
                  </h3>
                  <h5 className="text-[12px]">Houston, Germany</h5>
                </div>
              </div>
            </div>
            {/* Review body */}
            <div className="mt-3">
              <div className="text-left flex gap-2 items-center">
                <div className="text-[11px] font-semibold flex gap-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-[14px] h-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-[12px]">4.9</span>
                </div>
                <span className="flex justify-self-center pt-[-3px]">.</span>
                <span className="text-[11px] font-semibold">10 September</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-left">
                  We manufacturing and providing bounch of types products those
                  we provide to our clites for a long time.
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/*---------------------- Review right section-------------- */}
          {/* <div className="order-2 col-span-3 md:ml-6 gap-y-6"> */}
          {/* Review single card */}
        </div>

        {/* Expand Button */}
        {/* <div className="mt-8">
          <button>Expand</button>
        </div> */}
      </div>

      {/*---------------------------- Reveiw heading ----------------------------- */}
      <div className="md:order-2 order-1 md:col-span-2">
        <h2 className="text-[22px] text-left md:text-right font-[600]">
          Testimonial
        </h2>
        {/* Divider */}
        <div className="flex md:float-right jusify-between gap-2 ml-auto mt-2 ">
          <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
        </div>
        <div className="md:text-right text-left text-sm mt-4 md:mt-10 w-[80%] md:ml-auto">
          <h4>
            Our goal is to satisfy our client with our products and services.
            Here are some of our clients feedback.
          </h4>
          <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[20px] border border-[#014E9C]">
            See All Comments
          </button>
        </div>
      </div>
      {/* <div className="order-2 col-span-2">
        <h2 className="text-[22px] font-[600]">Products Categories</h2>
        {/* Divider *
        <div className="flex float-right jusify-between gap-2 ml-auto mt-2 ">
          <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
          <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
        </div>
        <div className="text-right text-sm mt-10 w-[80%] ml-auto">
          <h4>
            We manufacturing and providing bounch of types products those we
            provide to our clites for a long time.
          </h4>
          <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[15px] border border-[#014E9C]">
            See All Categories
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
