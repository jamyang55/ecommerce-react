import React from 'react';
import { HiOutlineTruck } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsBagCheck } from "react-icons/bs";
import { GiCardboardBox } from "react-icons/gi";

function second() {
  return (
    <>
    <div className=" flex gap-14 ml-6 mr-8 shadow-md " >
        <div className="flex bg-white  hover:border-[1px] hover:border-green-400 "><HiOutlineTruck className=" text-green-600 text-4xl" />
        <div><p className="px-2 text-black text-sm font-semibold  ">Free Shipping</p>
        <p className=" flex-col text-gray-400 text-sm font-extralight px-2">Free Shiping on all your order</p></div></div>

        <div className="flex bg-white hover:border-[1px] hover:border-green-400 "><TfiHeadphoneAlt  className=" text-green-600 text-4xl" />
        <div><p className="px-2 text-black text-sm font-semibold  ">Customer Support 24/7</p>
        <p className=" flex-col text-gray-400 text-sm font-extralight px-2">Instant access to Support</p></div></div>

        <div className="flex bg-white hover:border-[1px] hover:border-green-400  "><BsBagCheck  className=" text-green-600 text-4xl" />
        <div><p className="px-2 text-black text-sm font-semibold  ">100% Secure Payment</p>
        <p className=" flex-col text-gray-400 text-sm font-extralight px-2">We ensure your money is save</p></div></div>

        <div className="flex bg-white hover:border-[1px] hover:border-green-400  "> <GiCardboardBox className=" text-green-600 text-4xl" />
        <div ><p className="px-2 text-black text-sm font-semibold  ">Money-Back Guarantee</p>
        <p className=" flex-col text-gray-400 text-sm font-extralight px-2">30 Days Money-Back Guarantee</p></div></div>
    </div>
    </>
  )
}

export default second