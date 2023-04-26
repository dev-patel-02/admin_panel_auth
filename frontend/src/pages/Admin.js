import React from "react";
import { BsBookmarkHeartFill, BsGraphUpArrow } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { IoLogoUsd } from "react-icons/io";
import { BsXDiamond } from "react-icons/bs";

function Admin() {
  return (
    <div className="px-2 md:px-28 py-10 bg-[#f2edf3]">
      <p className="">
        <span className="bg-gradient-to-r rounded from-pink-200 via-purple-500 to-[#B66DFF] p-3">
          <ImHome className=" mb-1  inline text-white" size={20} />
        </span>
        <span className="px-4 font-bold">Home</span>
      </p>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:gap-5">
        <div className=" my-4 md:my-8 rounded-md w-[300px] bg-gradient-to-r from-orange-300 to-red-400 py-4 px-8 text-white">
          <div className="flex justify-between">
            <p>Weekly Sales</p> <BsGraphUpArrow size={20} />
          </div>
          <p className="flex items-center">
            <IoLogoUsd className="" size={20} />
            <span className="text-2xl font-semibold px-3 py-6">15000</span>
          </p>
          <p>Increase By 60%</p>
        </div>
        <div className="my-4 md:my-8 rounded-md w-[300px] bg-gradient-to-r from-blue-200 to-blue-400 py-4 px-8 text-white">
          <div className="flex justify-between">
            <p>Weekly Orders</p> <BsBookmarkHeartFill size={20} />
          </div>
          <p className="flex items-center">
            <span className="text-2xl font-semibold px-3 py-6">55000</span>
          </p>
          <p>Decrease By 60%</p>
        </div>
        <div className="my-4 md:my-8 rounded-md w-[300px] bg-gradient-to-r from-green-200 to-green-500 py-4 px-8 text-white">
          <div className="flex justify-between">
            <p>Visitos Online</p> <BsXDiamond size={20} />
          </div>
          <p className="flex items-center">
            <span className="text-2xl font-semibold px-3 py-6">105000</span>
          </p>
          <p>Increase By 60%</p>
        </div>
      </div>
      <section className="antialiased text-gray-600 py-8 md:pr-12">
        <div className="flex flex-col justify-center">
          <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Spent</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Alex Shatov
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">alexshatov@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $2,890.66
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">??</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                              width="40"
                              height="40"
                              alt="Philip Harbach"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Philip Harbach
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">philip.h@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $2,767.04
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">??</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                              width="40"
                              height="40"
                              alt="Mirko Fisuk"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Mirko Fisuk
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">mirkofisuk@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $2,996.00
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">??</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                              width="40"
                              height="40"
                              alt="Olga Semklo"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Olga Semklo
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">olga.s@cool.design</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $1,220.66
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">??</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                              width="40"
                              height="40"
                              alt="Burak Long"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">longburak@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">??</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
