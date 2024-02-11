import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="mt-32 mb-16 w-[80%] mx-auto">
      <div className="w-3/5 text-left">
        {/* CART HEADING*/}
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">My Cart</h3>
          <h4 className="text-xl">Items</h4>
        </div>

        {/* CART */}
        <div className="flex gap-4 justify-between mt-3 bg-gray-100 px-2 py-2 rounded">
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
            <div className="flex mt-2 border border-2 border-gray-200 justify-between items-center w-1/3 p-[2px] rounded-md">
              <span className="text-xl cursor-pointer hover:bg-gray-200 px-2 rounded">
                +
              </span>
              <span className="text-xl ">1</span>
              <span className="text-xl cursor-pointer hover:bg-gray-200 px-2 rounded">
                -
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
    </div>
  );
}
