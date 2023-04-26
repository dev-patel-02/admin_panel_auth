import React from "react";
import { FcCellPhone } from "react-icons/fc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";
function Happy() {
  return (
    <div className="flex py-24">
      <div className="flex items-center">
        <h1 className=" text-white text-4xl font-extrabold px-10">
          Always happy <br /> to
          <span className="text-[#44CB65] px-4 underline decoration-white">
            Help
          </span>
        </h1>
      </div>
      <div className="w-2/3 pl-20">
        <div className="flex justify-center items-center">
          <div className="bg-[#F3F4F6] rounded-md">
            <h2 className="flex justify-center items-center font-bold text-2xl  py-4 px-8">
              <FcCellPhone className="mr-4" size={60} /> Call Support
            </h2>
          </div>
          <div className="bg-[#F3F4F6] rounded-md ml-12">
            <h2 className="flex justify-center items-center font-bold text-2xl  py-4 px-8">
              <MdOutlineMarkEmailRead className="mr-4" size={60} /> Mail Support
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <div className="bg-[#F3F4F6] rounded-md">
            <h2 className="flex justify-center items-center font-bold text-2xl  py-4 px-8">
              <HiChatAlt2 className="mr-4" size={60} /> Chat Support
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Happy;
