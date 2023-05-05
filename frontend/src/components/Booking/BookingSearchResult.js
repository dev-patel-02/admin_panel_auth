import React from "react";
import { BsBoxSeam, BsInfoCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line, RiPrinterFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function BookingSearchResult({ booking, handleEdit }) {
  // console.log(booking);
  return (
    <section className=" w-3/5 border-t-4 border-blue-400 bg-blueGray-50">
      <div className="flex-auto px-4 lg:px-5  py-4 pt-0 bg-white">
        <form className="">
          <div className="flex justify-between items-center">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-2 font-bold uppercase">
              Booking
            </h6>
            <p className="uppercase text-sm">Show All Booking</p>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search. . . ."
              className="px-3 py-2 border text-gray-500 outline-none rounded text-sm w-full"
            />
          </div>
          <span className="text-xs flex items-center mt-2">
            <BsInfoCircleFill className="inline text-gray-400 mr-2" size={14} />
            Only entires from the last 6 months will be displayed.
          </span>
          <hr className="mt-4 border-b-1 border-blueGray-300" />
        </form>
        {booking
          ?.slice()
          .reverse()
          ?.map((book) => (
            <div
              key={book.id}
              className="flex items-center border-b-2 mt-3 border-gray-300 pb-2 "
            >
              <div className="mr-4">
                <p className="text-white text-2xl w-10 text-center font-extrabold rounded-full h-10 bg-purple-400 py-1 px-2">
                  N
                </p>
              </div>
              <div className="w-3/5">
                <p className="uppercase text-sm">
                  <span className="text-purple-500 font-semibold">
                    {/* Exelenct Global endeavors llp */}
                    {book?.sender}
                  </span>
                  <span className="font-semibold">
                    {/* - Mr Manoj tripati Wokarad hospital (Mumbai) */}-{" "}
                    {book?.center}
                  </span>
                </p>
                <span className="uppercase text-sm">
                  <BsInfoCircleFill
                    className="inline text-gray-400 mr-2"
                    size={18}
                  />
                  |{" "}
                  <BsBoxSeam className="inline text-gray-400 mr-2" size={14} />
                  Parcel By {book?.carrier} | RS . {book?.grossAmt} |{" "}
                  {book?.weight}kg
                </span>
              </div>
              <div className="flex justify-center items-center pr-10">
                <p className="bg-gray-300 px-2">#{book?.id}</p>
              </div>
              <div
                onClick={() => handleEdit(book.id)}
                className="flex justify-center items-center px-3"
              >
                <TiEdit
                  className="inline cursor-pointer text-red-500   text-center"
                  size={20}
                />
              </div>
              <div className="flex  justify-center items-center px-1">
                <RiDeleteBin6Line
                  className="inline cursor-pointer text-blue-500 mr-2"
                  size={20}
                />
              </div>
              <div className="flex justify-center items-center">
                <RiPrinterFill
                  className="inline cursor-pointer text-green-400 mr-2"
                  size={20}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
