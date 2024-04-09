import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "./assets";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { TfiEye } from "react-icons/tfi";

function Deals() {
  return (
    <>
      <div>
        <div className="flex ml-6 mr-20 mt-3 justify-between">
          <p className="text-xl font-semibold">Hot Deals</p>
          <div className="flex ml-4">
            <p className=" text-base text-green-500  font-normal   ">
              View All
            </p>
            <FaArrowRight className=" text-green-500 pt-1 text-xl " />
          </div>
        </div>
        <div className="w-[528px] h-[654px] hover:border-[1px] hover:border-green-600 ml-6 ">
          <button className=" bg-red-600 text-white font-semibold rounded-md mt-4 ml-2 p-2">
            Sale 50%
          </button>
          <button className=" bg-green-600 text-white font-semibold rounded-md mt-4 ml-2 p-2">
            Best Sale
          </button>

          <div
            style={{
              backgroundImage: `url(${assets.deals_1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "8px",
            }}
            className=" bg-gradient-to-tl  from-slate-500 to-black w-[525px] h-[446px]  pt-2"
          >
            <div className="flex mr-6 ml-6 ">
              <CiHeart className="text-4xl font-bold mt-96 mr-4" />
              <div className="flex items-center justify-center  bg-green-600 rounded-xl w-[371px] h-[35px] mt-96 gap-2">
                <p className=" text-sm text-white  p-1  ">
                  Add to Card
                </p>
                <IoBagOutline className=" text-white  font-bold  text-xl pt-1  " />
                
              </div>
              <TfiEye className=" text-4xl font-xl  mt-96 ml-4 " />
            </div>
            <p className=" text-center text-green-600 pt-2">Chinese cabbage</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-black font-semibold pt-2">$12.00</p>
              <s className=" text-gray-400 pt-2">$24.00</s>
            </div>
            <div className="flex items-center justify-center">
              <img src={(assets.Rating)} alt="" />
              <p className=" text-gray-400">(524 FeedBack)</p></div>
              <p className=" items-center ml-44 text-gray-400 pt-1">Hurry up! Offer ends In:</p>
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max pt-24 pl-40">
  <div className="flex flex-col">
    <span className="countdown font-mono text-sm">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-sm">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-sm">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-sm">
      <span style={{"--value":34}}></span>
    </span>
    sec
  </div>
</div>

          
        </div>
        
      </div>
    </>
  );
}

export default Deals;
