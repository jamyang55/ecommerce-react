import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import http from "../utils/Http";
import { CiLogin } from "react-icons/ci";
import { Popular_Lists, popularProducts } from "../components/assets";
import axios from "axios";
function Popular() {

    console.log(popularProducts);
  return (
    <>
      <div>
        <div className="flex ml-6 mr-20 mt-3 justify-between">
          <p className="text-xl font-semibold">Popular Categories</p>
          <div className="flex ml-4">
            {" "}
            <p className=" text-base text-green-500  font-normal   ">
              View All
            </p>
            <FaArrowRight className=" text-green-500 pt-1 text-xl " />
          </div>
        </div>
        <div className="  grid grid-cols-6 cursor-pointer mr-6">
          {Popular_Lists.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.image}
                  alt=""
                  className=" shadow-md rounded-lg mt-2 hover:border-[1px] hover:border-green-400  "
                />
                <p className=" text-sm font-medium text-center  hover:text-green-500">
                  {item.name}
                </p>
                <p>
                    {item.sales}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;
