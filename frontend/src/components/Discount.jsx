import React from "react";
import { assets } from "./assets";
import { FaArrowRight } from "react-icons/fa";

function Discount() {
  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `url(${assets.discount_1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius: "8px",
          }}
          className=" bg-gradient-to-tl  from-slate-500 to-black w-[1215px] h-[358px]  rounded-md mt-4 ml-6 mr-6"
        >
          <p className=" text-white font-medium text-sm text-end pr-80 pt-20">
            SUMMER SALE
          </p>
          <p className=" font-bold text-4xl text-white text-end pr-72 pt-50">
            <span className=" text-amber-500">37%</span>OFF
          </p>
          <p className=" text-white pl-[790px] pt-4">
            Free on all your order, Free Shipping and 30 days
            <br /> money-back guarantee
          </p>
          <button class=" flex bg-green-600 rounded-2xl items-center ml-[790px]  mt-4 ">
            <p className=" text-white text-sm">Shop Now</p>
            <FaArrowRight className=" text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Discount;
