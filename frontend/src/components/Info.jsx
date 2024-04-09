import React from "react";
import { assets } from "./assets";
import { FaArrowRight } from "react-icons/fa";

function Info() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 ml-2 mr-14">
        <div
          style={{
            backgroundImage: `url(${assets.rectangle_1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius: "8px",
          }}
          className="w-[400px] h-[536px] mt-6 ml-4 grid-row"
        >
          <p className=" text-center text-sm font-bold text-white pt-8 ">
            BEST DEALS
          </p>
          <p className=" text-center text-3xl font-bold text-white pt-2">
            SALES OF THE MONTH
          </p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
            <div className="flex flex-col pl-[95px] mt-3 text-white">
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col text-white">
              <span className="countdown font-mono mt-3 text-2xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col text-white">
              <span className="countdown font-mono mt-3 text-2xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col text-white">
              <span className="countdown font-mono mt-3 text-2xl">
                <span style={{ "--value": 23 }}></span>
              </span>
              sec
            </div>
          </div>
          <button class=" flex bg-white rounded-2xl items-center ml-[150px] mt-5 ">
            <p className=" text-green-600 text-sm p-1">Shop Now</p>
            <FaArrowRight className=" text-green-600" />
          </button>
        </div>

        <div
          style={{
            backgroundImage: `url(${assets.rectangle_2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius: "8px",
          }}
          className="w-[400px] h-[536px] mt-6 ml-4"
        >
          <p className=" text-center text-sm font-bold text-white pt-8 ">
            85% FAT FREE
          </p>
          <p className=" text-center text-3xl font-bold text-white pt-2">
            Low-Fat Meat
          </p>
          <p className=" text-center text-l font-normal text-white mt-3">
            Started at <span className=" text-amber-800">$79.99</span>
          </p>
          <button class=" flex bg-white rounded-2xl items-center ml-[150px] mt-5 ">
            <p className=" text-green-600 text-sm p-1">Shop Now</p>
            <FaArrowRight className=" text-green-600" />
          </button>
        </div>

        <div
          style={{
            backgroundImage: `url(${assets.rectangle_3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius: "8px",
          }}
          className="w-[400px] h-[536px] mt-6 ml-4"
        >
          <p className=" text-center text-sm font-bold text-white pt-8 ">
          Summer Sale
          </p>
          <p className=" text-center text-3xl font-bold text-white pt-2">
          100% Fresh Fruit
          </p>
          <p className=" text-center text-l font-sm text-white mt-3">
          Up to <button className=" text-yellow-400 bg-black font-bold text-xl rounded-2xl">64% OFF</button>
          </p>
          <button class=" flex bg-white rounded-2xl items-center ml-[150px] mt-5 ">
            <p className=" text-green-600 text-sm p-1">Shop Now</p>
            <FaArrowRight className=" text-green-600" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;
