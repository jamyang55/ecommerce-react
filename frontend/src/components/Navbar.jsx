import React from "react";
import { assets } from "./assets";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function Navbar() {
  return (
    <>
      {/* Navbar start from here */}
      <div class="flex items-center justify-between container mx-auto py-6 px-16">
        <div>
          <img src={assets.Logo} alt="ecobazar logo" />
        </div>
        <div class="flex items-center gap-2">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="btn btn-success text-sm">Search</button>
          <div></div>
          <div class=" p-1">
            <CiHeart class="w-9 h-9" />
          </div>
          <div class=" h-5 w-[1px] bg-zinc-300"></div>

          <div class="px-3 py-1  h-9 flex gap-2 items-center">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
            <div class="text-sm  flex flex-col items-start gap-1   ">
              <h1 class="align-top">Shopping Card:</h1>
              <h1 class="">$54</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar ends here */}
      {/* Header start from here */}
      <div class="bg-black  text-white  justify-between flex items-center mx-6   px-9 py-2">
        <div class="flex items-center  ">
          <ul className=" flex gap-4 items-center">
            <li className="flex gap-1 items-center">
              <a>Home</a>
              <IoIosArrowDown />
            </li>
            <li className="flex gap-1 items-center">
              <a>Shop</a>
              <IoIosArrowDown />
            </li>
            <li className="flex gap-1 items-center">
              <a>Page</a>
              <IoIosArrowDown />
            </li>
            <li className="flex gap-1 items-center">
              <a>Blog</a>
              <IoIosArrowDown />
            </li>
            <li className="flex gap-1 items-center">
              <a>About Us</a>
            </li>
            <li className="flex gap-1 items-center">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="flex gap-1 items-center">
          <ul>
            <li class="flex gap-3 items-center">
              <MdOutlinePhoneInTalk class="size-4" />
              <a>(211) 555-0114</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
