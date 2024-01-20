export default function Wishlist() {
  return (
    <div className="mt-32 mb-16 w-[80%] mx-auto">
      <div className="mt-3 mb-5 flex justify-between gap-4 items-center">
        <h3 className="text-xl">My Wishlist</h3>
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
        <button className="flex items-center gap-3 cursor-pointer border border-[#014E9C] rounded-full py-[4px] px-4 hover:bg-[#014E9C] hover:text-white">
          <span>My Cart</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>
        </button>
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
