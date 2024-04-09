import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { popularProducts } from "./assets";

function Products() {
  return (
    <>
      <div>
        <div className="flex ml-6 mr-20 mt-3 justify-between">
          <p className="text-xl font-semibold">Popular Products</p>
          <div className="flex ml-4">
            <p className=" text-base text-green-500  font-normal   ">
              View All
            </p>
            <FaArrowRight className=" text-green-500 pt-1 text-xl " />
          </div>
        </div>
        <div className="  grid grid-cols-5 cursor-pointer mr-8   ">
          {popularProducts.map((item, index) => {
            return (
              <div key={index}>
                <div className="">                
                  <img
                  src={item.image}
                  alt=""
                  className=" rounded-lg mt-2  hover:border-[1px] hover:border-green-400 "
                />
                <button className="">{item.sale}</button>
                </div>
               <div className=" shadow-md"> <p className=" text-sm font-medium ml-6  hover:text-green-500 ">
                  {item.name}
                </p>
                
                <div className="flex text-sm "><p className="text-sm font-medium ml-6 hover:text-green-500">{item.price}</p>
                <s className="pl-2 text-gray-500">{item.old}</s></div>

                <div className="flex justify-between"><img src={item.rating} alt="" className="ml-5 w-8 h-2 mt-4"/>
                <img src={item.cart} alt=""  />
                  </div>            
                </div> </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
