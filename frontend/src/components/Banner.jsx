import React from "react";
import { assets } from "./assets";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <>
      <div className="hero_section mt-4 pl-6  ">
        <div className=" container mx-auto justify-between w-full gap-52 grid grid-cols-2">
          <div
            style={{
              backgroundImage: `url(${assets.Banner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "8px",
            }}
            className=" bg-gradient-to-tl  from-slate-500 to-black w-[700px] h-[530px]  pt-2">
            <p class="mt-20 font-black text-4xl pl-4 text-white">
              Fresh & Healthy <br />
              Organic Food
            </p>

            <div className=" flex  items-center mt-9 ml-5">
              <div class="w-[3px] h-[50px] bg-zinc-300  "></div>

              <div className="freeshippingg flex flex-col gap-2 items-start">
                <div class="flex ml-3  items-top   ">
                  <p class=" text-white text-xl ml-3  ">Sales upto</p>
                  <button class=" bg-yellow-400 radius-rounded text-xl rounded-lg text-black px-2 ml-3  ">
                    30% Off
                  </button>
                </div>
                <div class=" text-white text-l  px-6 ">
                  <p>Free Shipping on all your order.</p>
                </div>
              </div>
            </div>
            <div className="mt-3  px-11">
              <button class="flex bg-white rounded-3xl items-center ">
                <p className=" text-green-600 text-2xl">Shop Now</p>
                <FaArrowRight className=" text-green-600" />
              </button>
            </div>
          </div>

          <div className="second grid  w-[90%] h-[150px] gap-4 ">
            <div className="top-banner ">
              <div
                style={{
                  backgroundImage: `url(${assets.Left})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                }}
                className=" bg-gradient-to-tl w-full h-[250px] from-slate-500 to-black first  mt-4  "
              >
                <div className=" font-medium  flex flex-col items-start ml-8 pt-4  text-gray-900 ">
                  <p>SUMMER SALE</p>
                  <p className=" font-extrabold text-3xl">75% OFF</p>
                  <p className="font-normal text-gray-600">
                    only fruits & vegetables
                  </p>
                </div>
                <div className="flex">
                  <p className=" font-semibold text-green-600 mt-8 ml-8">
                    SHOP NOW
                  </p>
                  <FaArrowRight className=" text-green-600 mt-9 ml-2" />
                </div>
              </div>
            </div>
            <div className="bottom-banner ">
              <div
                style={{
                  backgroundImage: `url(${assets.Side})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                }}
                className=" bg-gradient-to-tl w-full h-[226px] from-slate-500 to-black first   "
              >
                <div className="flex flex-col text-white items-center pt-12">
                  <p className="text-sm font-bold">BEST DEAL</p>
                  <p className=" text-lg font-extrabold">
                    Special Products<br></br> Deal of the Month
                  </p>
                  <div className="flex mt-4 text-green-300 font-bold">
                    <p>Shop Now</p>
                    <FaArrowRight className=" text-green-300 pt-1 text-xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
