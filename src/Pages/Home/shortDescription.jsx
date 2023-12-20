import React from "react";

export default function ShortDescription() {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-[80%] gap-3 md:gap-0 mx-auto justify-between py-6">
        <div className="gap-2 mr-4 items-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <div>
            <div className="flex items-center">
              <h5 className="text-left text-[12px] font-normal">Call Us</h5>
            </div>
            <div className="">
              <span className="text-[13px] font-semibold">+88 013456789</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <div>
            <div className="flex gap-1 items-center">
              <h5 className="text-left text-[12px] font-normal">Mail Us</h5>
            </div>
            <div className="">
              <span className="text-[13px] font-semibold">carz@mail.com</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <div className="flex gap-1 items-center">
              <h5 className="text-left text-[12px] font-normal">
                Opening Hour
              </h5>
            </div>
            <div className="">
              <span className="text-[13px] font-semibold">
                At 10:00AM - 8:00PM
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            data-slot="icon"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <div>
            <div className="flex gap-1 items-center">
              <h5 className="text-left text-[12px] font-normal">
                Factory
              </h5>
            </div>
            <div className="">
              <span className="text-[13px] font-semibold">
                #Road-8, Bavaria, Germany
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
