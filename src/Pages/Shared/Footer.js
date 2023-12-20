import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import "./CSS/Footer.css";
import VisaCard from "./../../../src/Assets/Images/cards/visa.png";
import MasterCard from "./../../../src/Assets/Images/cards/card.png";
import AmericanExpress from "./../../../src/Assets/Images/cards/american-express.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer class="text-center text-black dark:bg-gray-800">
      {/*------------------- FOOTER TOPPER SECTION---------------- */}
      <div className="bg-[#014E9C] ">
        <div class="md:flex py-2 pb-4 md:pb-0 justify-between items-start md:mx-auto md:w-[80%] sm:items-center sm:justify-between">
          <div className="footer-logo md:pt-7 md:pb-4 self-start md:mb-0 md:mt-24px mb-2">
            <Link to="/" class="md:flex sm:mb-0">
              <span class="self-center text-white LOGO text-2xl font-semibold whitespace-nowrap dark:text-white">
                thecar<span className="text-green-400">Z</span>
              </span>
            </Link>
            <p className="text-[11px] text-white">The product you dream for!</p>
          </div>

          <div className="flex w-[95%] mx-auto md:mx-0 md:w-[400px] gap-1 md:gap-3 items-center">
            <input
              placeholder="Place your email for update"
              className=" py-[8px] focus:outline-none focus:border-1 focus:border-[#014E9C] w-[90%] md:w-[310px] rounded text-[15px] px-4"
            />
            <button className="rounded ml-[2px] md:ml-0 bg-[#0e62b7] text-white py-[8px] px-1 md:px-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/*-------------------FOOTER BOTTOM SECTION-------------------- */}
      <div>
        <div class="md:w-[80%] px-5 md:px-0 mx-auto mt-4 grid grid-cols-1 gap-8 py-8 text-left md:grid-cols-4">
          {/*------------------- COMPANY ---------------- */}
          <div>
            <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">
              Company
            </h2>
            <ul class="text-gray-800">
              <li class="mb-2">
                <Link to="/" class="text-[13px] hover:underline">
                  About
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="text-[13px] hover:underline">
                  Career
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="text-[13px] hover:underline">
                  Blog
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="text-[13px] hover:underline">
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          {/*------------------- HELP CENTER ---------------- */}
          <div>
            <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">
              Help center
            </h2>
            <ul class="text-gray-800">
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  X <span className="text-[11px]">(twiter)</span>
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Linkedin
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Facebook
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/*------------------- LEGAL ---------------- */}
          <div>
            <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">
              Legal
            </h2>
            <ul class="text-gray-800">
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Licensing
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  User manual
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Free cost Services
                </Link>
              </li>
            </ul>
          </div>

          {/*------------------- OUTLETS ---------------- */}
          <div>
            <h2 className="md:mb-6 mb-2 text-[13px] font-bold text-gray-800 uppercase">
              Outlets
            </h2>
            <ul class="text-gray-800">
              <div>
                <li class="mb-1">
                  <Link
                    to="#"
                    class="hover:underline text-[13px] font-semibold"
                  >
                    Dhaka, Bandladesh
                  </Link>
                </li>
                <div className="text-[12px]">
                  <p>Gulshan-8, #sector-x, Dhaka</p>
                  <p>Contact: +880 1314151161</p>
                </div>
              </div>

              <div className="mt-3">
                <li class="mb-1">
                  <Link
                    to="#"
                    class="hover:underline text-[13px] font-semibold"
                  >
                    Dubai, UAE
                  </Link>
                </li>
                <div className="text-[12px]">
                  <p>Road-x, #shop-y, Dubai</p>
                  <p>Contact: +971 13141511621</p>
                </div>
              </div>

              <div className="mt-3">
                <li class="mb-1">
                  <Link
                    to="#"
                    class="hover:underline text-[13px] font-semibold"
                  >
                    Berlin, Germany
                  </Link>
                </li>
                <div className="text-[12px]">
                  <p>City-x, #area-y, Berlin</p>
                  <p>Contact: +49 987777707</p>
                </div>
              </div>
              {/* <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Licensing
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Licensing
                </Link>
              </li>
              <li class="mb-2">
                <Link to="/" class="hover:underline text-[13px]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li class="mb-2">
                <Link
                  to="/"
                  class="mt-3 hover:underline text-[13px] flex gap-2"
                >
                  {/* <span className='text-[11px]'>Powered by: </span> */}
              {/* CARDS *
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="md:w-[80%] -mt-3 pb-6 mx-auto flex md:flex-row flex-col md:justify-between">
          <p class="md:mt-6 mt-3 block text-[12px] font-semibold text-gray-800 sm:text-center dark:text-gray-400">
            &copy; {year}
            <Link to="/" class="hover:underline">
              the carZ
            </Link>
            . All Rights Reserved.
          </p>
          <div className="flex gap-2 mx-auto md:mx-0 items-center ">
            <p className="text-[11px] font-semibold">Payment Partner: </p>
            <img
              src={VisaCard}
              alt=""
              className="w-[50px] p-[2px] h-[30px] rounded bg-[#fff]"
            />
            <img
              src={MasterCard}
              alt=""
              className="w-[50px] p-1.5 h-[30px] rounded  bg-[#fff]"
            />
            <img
              src={AmericanExpress}
              alt=""
              className="w-[50px] p-[2px] rounded h-[30px] bg-[#fff]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
