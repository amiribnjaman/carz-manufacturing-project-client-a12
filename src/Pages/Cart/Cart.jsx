import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="mt-32 mb-16 w-[80%] mx-auto">
      <div className="mt-3 mb-5 flex justify-between gap-4 items-center">
        <h3 className="text-xl">My Cart</h3>
        {/* <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            data-slot="icon"
            class="w-[24px] h-[24px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </span> */}
        <Link to='/wishlist' className="flex items-center gap-3 cursor-pointer border border-[#014E9C] rounded-full py-[4px] px-4 hover:bg-[#014E9C] hover:text-white">
          <span>My WishList</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              data-slot="icon"
              class="w-[24px] h-[24px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
        </Link>
      </div>
      {/*================PURCHASE PRODUCT TABEL============== */}
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-4 py-3 rounded-s-lg">
                Product
              </th>
              <th scope="col" class="px-4 py-3 text-right">
                Unit Price
              </th>
              <th scope="col" class="px-4 py-3 rounded-e-lg text-right">
                Stock Status
              </th>
              <th scope="col" class="px-4 py-3 rounded-e-lg text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 flex gap-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div>
                  <img className="w-[80px] h-[50px]" src="" alt="" />
                </div>
                <div>
                  <h4 className="text-blue-600"></h4>
                  <h6>Code:</h6>
                </div>
              </th>
              <td class="px-4 py-4 text-right">500</td>
              <td class="px-4 py-4 text-right">In stock</td>
              <td class="px-4 py-4 text-right">
                <h5 className="mb-[3px]">Added to December 26, 23</h5>
                <button className="bg-[#014E9C] w-[100px] h-[50px] text-white rounded-full w-[130px] h-[33px] py-[3px]">
                  Add to Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
