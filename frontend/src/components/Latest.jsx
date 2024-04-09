import React from "react";
import { assets } from "./assets";
import { GoTag } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function Latest() {
  return (
    <>
      <div>
        <div className=" text-center mt-4 ">
          <p className="text-xl font-semibold">Latest News</p>
        </div>
        <div className="grid grid-cols-3 gap-1"><div className="w-[400px] h-[454px] shadow-md mt-4   hover:border-[1px] hover:border-green-500 hover:rounded-lg ">
          <div
            style={{
              backgroundImage: `url(${assets.latest_1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "8px",
            }}
            className=" bg-gradient-to-tl  from-slate-500 to-black w-[400px] h-[324px]"
          >
            <button className=" font-mono text-xs bg-white rounded-sm mt-64 ml-6">
                <p className=" text-sm font-semibold pl-2 pr-2">18</p>
                <p className=" text-sm font-semibold pl-2 pr-2">NOV</p>
            </button>
            <div className="flex justify-items-start"><div className="flex  mt-10 font-medium">
            <GoTag className=" text-xl pt-1" />
            <p>FOOD</p>
            </div>
            <div className="flex ml-12 mt-10 font-medium ">
            <CgProfile className=" text-xl pt-1"  />            
            <p>BY ADMIN</p>
            </div>
            <div className="flex ml-12 mt-10 font-medium">
            <FaRegMessage className=" text-xl pt-1"  />
            <p>65 COMMENTS</p>
            </div></div>
          </div>
          <div className=" font-medium text-green-600 mt-10">
            <p>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
          </div>
          <div className="flex text-green-600 gap-1 font-semibold mt-3">
            <p>Read More</p>
            <FaArrowRight className="pt-1 text-xl" />
          </div>
        </div>
        <div className="w-[400px] h-[454px] shadow-md mt-4 hover:border-[1px] hover:border-green-500 hover:rounded-lg">
          <div
            style={{
              backgroundImage: `url(${assets.latest_2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "8px",
            }}
            className=" bg-gradient-to-tl  from-slate-500 to-black w-[400px] h-[324px]"
          >
            <button className=" font-mono text-xs bg-white rounded-sm mt-64 ml-6">
                <p className=" text-sm font-semibold pl-2 pr-2">18</p>
                <p className=" text-sm font-semibold pl-2 pr-2">NOV</p>
            </button>
            <div className="flex justify-items-start"><div className="flex  mt-10 font-medium">
            <GoTag className=" text-xl pt-1" />
            <p>FOOD</p>
            </div>
            <div className="flex ml-12 mt-10 font-medium ">
            <CgProfile className=" text-xl pt-1"  />            
            <p>BY ADMIN</p>
            </div>
            <div className="flex ml-12 mt-10 font-medium">
            <FaRegMessage className=" text-xl pt-1"  />
            <p>65 COMMENTS</p>
            </div></div>
          </div>
          <div className=" font-medium text-green-600 mt-10">
            <p>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
          </div>
          <div className="flex text-green-600 gap-1 font-semibold mt-3">
            <p>Read More</p>
            <FaArrowRight className="pt-1 text-xl" />
          </div>
        </div>
        <div className="w-[400px] h-[454px] shadow-md mt-4  hover:border-[1px] hover:border-green-500 hover:rounded-lg">
          <div
            style={{
              backgroundImage: `url(${assets.latest_3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "8px",
            }}
            className=" bg-gradient-to-tl  from-slate-500 to-black w-[400px] h-[324px]"
          >
            <button className=" font-mono text-xs bg-white rounded-sm mt-64 ml-6">
                <p className=" text-sm font-semibold pl-2 pr-2">18</p>
                <p className=" text-sm font-semibold pl-2 pr-2">NOV</p>
            </button>
            <div className="flex justify-items-start"><div className="flex  mt-10 font-medium">
            <GoTag className=" text-xl pt-1" />
            <p>FOOD</p>
            </div>
            <div className="flex ml-12 mt-10 font-medium ">
            <CgProfile className=" text-xl pt-1"  />            
            <p>BY ADMIN</p>
            </div>
            <div className="flex ml-12 mt-10 font-medium">
            <FaRegMessage className=" text-xl pt-1"  />
            <p>65 COMMENTS</p>
            </div></div>
          </div>
          <div className=" font-medium text-green-600 mt-10">
            <p>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
          </div>
          <div className="flex text-green-600 gap-1 font-semibold mt-3">
            <p>Read More</p>
            <FaArrowRight className="pt-1 text-xl" />
          </div>
        </div></div>
      </div>
    </>
  );
}

export default Latest;
