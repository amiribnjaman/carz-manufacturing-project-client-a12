import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComponentLoading from "../../Components/componentLoading";
import SectionDivider from "../Shared/SectionDivider";

const BestSelling = () => {
  const navigate = useNavigate();
  const [parts, setParts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsId, setDetailsId] = useState(0);
    const [getProductDetails, setGetProductDetails] = useState(null);
    

  useEffect(() => {
    fetch(
      "https://carz-manufacturing-project-server-a12.vercel.app/products/latest"
    )
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [parts]);

  const handleNavigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  // details
  const handleDetails = (id) => {
    setShowDetails(!showDetails);
    setDetailsId(id);
    fetch(
      `https://carz-manufacturing-project-server-a12.vercel.app/product/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGetProductDetails(data);
      });
  };

  return (
      <>
          {/* SECTION DIVIDER */}
          {/* <SectionDivider /> */}
      <div className="md:mt-16 mt-16 md:w-[80%] mx-auto gap-5 px-3">
        {/* Best selling Heading */}
        <div className="flex justify-between text-left">
          <div>
            <h2 className="text-[22px] font-[600] text-left">Best Selling Products</h2>
            {/* Divider */}
            <div className="flex float-left mt-1 block jusify-between gap-2  mb-4">
              <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
            </div>
            {/* <div className="text-left text-sm mt-6 w-[50%] mr-auto">
            <h4>
              We manufacturing and providing bounch of types products those we
              provide to our clites for a long time.
            </h4>
          </div> */}
          </div>
          <div>
            <button className=" underline hover:text-[#014E9C] hover:underline-[#014E9C] mt-4 py-[6px] text-[14px] px-[15px] font-semibold">
              See More
            </button>
          </div>
        </div>
        {parts.length <= 0 ? <ComponentLoading /> : ""}

        {/*----------------------- BEST SELLING PRODUCT BODY-------------------  */}
        <div className="mb-20 col-span-9 mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10">
          {parts.map((part) => (
            <>
              <div className="grid grid-cols-1 gap-1 rounded-tl-md rounded-tr-md rounded-br-sm rounded-bl-sm">
                <div className="">
                  <img
                    style={{ height: "210px", width: "100%" }}
                    className="rounded-[15px]"
                    src={part.image}
                    alt=""
                  />
                </div>
                <div className="text-center py-2">
                  {/* <h6 className="w-2/5 mx-auto rounded-full mb-4 text-[11px] bg-blue-100 py-1 px-2 text-dark">
                  Best Selling
                </h6> */}

                  <div className="flex mx-1.5 justify-between">
                    <div className="text-left w-full md:pr-0 pr-2">
                      {/* -----------Product name and rating */}
                      <div className="flex justify-between">
                        <h4 className="text-[15px] font-semibold">
                          {part.productName.split(" ")[0]}
                        </h4>
                        {/*-------------- Rating---------- */}
                        <h6 className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000"
                            viewBox="0 0 24 24"
                            stroke-width="1"
                            stroke="currentColor"
                            class="w-[15px] h-[15px]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                          <span className="font-normal text-[14px]">4.9</span>
                        </h6>
                      </div>
                      {/* <p>
                                    Description: {part.description}
                                </p> */}
                      {/* <h6 className='text-md'>Min Order: {part.minOrder}</h6>
                                <h6 className='text-md'>Available Quantity: {part.quantity}</h6> */}

                      {/* <h5 className=" text-[15px]">Price: </h5>
                    <p>Ratings:</p> */}
                      <p className="text-[11px] text-[#717171] font-semibold m-0">
                        Lorem ipsum dolor, sit amet consectetur
                      </p>
                      <button className="text-[12px] font-semibold underline text-[#717171] undeline-[#717171]">
                        Details
                      </button>

                      {/*-------------- Price and buy button------- */}
                      <div className="flex justify-between">
                        <h5 className="text-[12px] font-semibold text-[#717171]">
                          ${part.price}
                        </h5>
                        <div className="text-left gap-1 -mt-2 mb-1">
                          <button
                            onClick={() => {
                              handleNavigateToPurchase(part._id);
                            }}
                            className="bg-gradient-to-r from-[#e2effb] to-[#fafffd] text-[12px] px-2 py-1 rounded-full border border-[#014E9C] border-gradient-to-r from-[#e2effb] to-[#fafffd] text-[#014E9C] mt-1 font-semibold text-left text-black"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Main modal --> */}
                    <div
                      id="defaultModal"
                      tabindex="-1"
                      aria-hidden="true"
                      class={`${
                        showDetails ? "block" : "hidden"
                      } flex justify-center items-center bg-[rgba(237,246,253,.4)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full `}
                    >
                      <div class="relative p-4 w-full max-w-2xl h-full">
                        {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          {/* <!-- Modal header --> */}
                          <div class="flex justify-between items-start px-4 pt-3 pb-1 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              {getProductDetails?.productName}
                            </h3>
                            <button
                              onClick={() => setShowDetails(!showDetails)}
                              type="button"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-toggle="defaultModal"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          {/* <!-- Modal body --> */}
                          <div class="p-4 space-y-4">
                            <div>
                              <img
                                style={{ width: "100%", height: "250px" }}
                                src={getProductDetails?.image}
                                alt=""
                              />
                            </div>
                            <p class="text-[14px] text-center text-gray-500 dark:text-gray-400">
                              {getProductDetails?.description}
                            </p>
                            <div className="text-left mx-2">
                              <h3 className="text-xl font-semibold">
                                {getProductDetails?.productName}{" "}
                                <span className="text-[12px] font-normal">
                                  ({getProductDetails?.code})
                                </span>
                              </h3>
                              <h4 className="flex justify-between font-semibold">
                                <span>Price: </span>
                                <span>$ {getProductDetails?.price}</span>
                              </h4>
                              <h4 className="flex justify-between text-[15px]">
                                <span>Minimum Order: </span>
                                <span>{getProductDetails?.minOrder} pics</span>
                              </h4>

                              <h4 className="flex justify-between text-[15px]">
                                <span>Available Products: </span>
                                <span>{getProductDetails?.quantity} pics</span>
                              </h4>
                            </div>
                          </div>

                          {/* <!-- Modal footer --> */}
                          <div class="flex items-center justify-center px-6 py-3 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button
                              onClick={() =>
                                handleNavigateToPurchase(detailsId)
                              }
                              data-modal-toggle="defaultModal"
                              type="button"
                              class="rounded-full text-black hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center"
                            >
                              Buy Now
                            </button>
                            <button
                              onClick={() => setShowDetails(!showDetails)}
                              data-modal-toggle="defaultModal"
                              type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-full border border-gray-200 text-sm font-medium px-8 py-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="mr-2 font-semibold">${part.price}</div>
                    <div className="mr-2 flex justify-end">
                      <svg
                        class="w-4 h-4 text-yellow-400 mt-[2px]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                        4.95
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
