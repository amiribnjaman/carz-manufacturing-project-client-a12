import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="mt-32 mb-16 w-[80%] mx-auto flex justify-between gap-8">
      <div className="w-4/6 text-left">
        {/* CART HEADING*/}
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">My Cart</h3>
          <h4 className="text-xl"><span className="">1</span> Items</h4>
        </div>

        {/* CART */}
        <div className="flex gap-4 justify-between mt-5 bg-gray-100 p-4 rounded">
          <div className="w-1/4">
            <img
              className="bg-gray-100 h-[140px] rounded-md w-full"
              src=""
              alt=""
            />
          </div>
          <div className="w-2/4 py-2">
            <h2 className="text-2xl font-semibold">this is items Title</h2>
            <p>Details</p>
            <h4 className="text-xl font-semibold">280</h4>
            <div className="flex mt-2 border border-2 border-gray-200 justify-between items-center w-[45%] p-[4px] rounded-md">
              <span className="text-2xl cursor-pointer hover:bg-gray-200 px-2 rounded">
                -
              </span>
              <span className="text-2xl ">1</span>

              <span className="text-2xl cursor-pointer hover:bg-gray-200 px-2 rounded">
                +
              </span>
            </div>
          </div>
          <div className="w-1/4 text-right flex flex-col justify-between">
            <div className="flex ml-auto cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold">500</h5>
            </div>
          </div>
        </div>
      </div>

      {/* CHECKOUT */}
      <div className="w-2/6 text-left">
        <h3 className="text-2xl font-semibold">Order Summary</h3>
        <div className="mt-5 bg-gray-100 p-4 rounded">
          <div className="flex w-full justify-between mb-3">
            <h5 className="text-sm font-semibold">230 x 2</h5>
            <h5 className="text-sm font-semibold">(+) 500</h5>
          </div>
          <hr />
          {/* TOTAL BODY */}
          <div className="flex justify-between my-6">
            <h2 className="font-semibold text-3xl">Total</h2>
            <h3 className="font-semibold text-3xl">500</h3>
          </div>
          {/* CHECKOUT BUTTION */}
          <div className="">
            <button className="w-full bg-[#000] hover:bg-[#014E9C] text-center text-white py-3 rounded font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
