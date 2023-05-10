import React from "react";
import { FiEye } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function AllParties({ handlePartyEdit, data, partyData }) {
  return (
    <div className="w-3/5">
      <div className="shadow-lg bg-white rounded border-t-4 border-blue-400 overflow-hidden ml-2">
        <h2 className="w-full py-3 border-b-2 shadow-md mb-6 font-bold text-xl px-4">
          All Parties
        </h2>
        <div className="flex justify-between pr-4">
          <div className="flex pl-2 mb-3 items-center">
            <p>Show</p>
            <select className="border-2 outline-none border-black px-2 mx-4 py-1 w-16 max-w-xs">
              <option disabled defaultValue>
                10
              </option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
            <p>Entries</p>
          </div>
          <div>
            <label htmlFor="">Search:</label>
            <input
              type=""
              name="search"
              className="ml-2 outline-none border border-black"
            />
          </div>
        </div>
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-3 text-left text-gray-600  font-semibold uppercase">
                Name
              </th>
              <th className="w-1/4 py-4 px-3 text-left text-gray-600  font-semibold uppercase">
                Contact
              </th>
              <th className="w-1/4 py-4 px-3 text-left text-gray-600  font-semibold uppercase">
                Email
              </th>
              <th className="w-1/4 py-4 px-3 text-left text-gray-600  font-semibold uppercase">
                Mobile
              </th>
              <th className="w-1/4 py-4 px-3 text-left text-gray-600  font-semibold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {partyData
              ?.slice()
              .reverse()
              .map((d) => (
                <tr key={d._id}>
                  <td className="py-4 px-3 border-b border-gray-200">
                    {d.name}
                  </td>
                  <td className="py-4 px-3 border-b border-gray-200 truncate">
                    {d.contactPerson}
                  </td>
                  <td className="py-4 px-3 border-b border-gray-200 truncate">
                    {d.email}
                  </td>
                  <td className="py-4 px-3 border-b border-gray-200">
                    {" "}
                    {d.mobile}
                  </td>
                  <td className="flex items-center py-5 px-2 border-b border-gray-200">
                    <FiEye
                      size={20}
                      className="mr-4 cursor-pointer text-green-500"
                    />
                    <FiEdit
                      onClick={() => handlePartyEdit(d._id)}
                      size={20}
                      className="mr-4 cursor-pointer text-red-500"
                    />
                    <RiDeleteBinLine
                      size={20}
                      className="mr-3 cursor-pointer text-blue-500"
                    />
                    {/* <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                Active
              </span> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllParties;
