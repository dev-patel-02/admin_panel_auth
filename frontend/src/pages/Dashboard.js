import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { GoReport } from "react-icons/go";
import { MdOutlineAddchart } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { AuthContext } from "./../context/AuthContext";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <div className="flex md:hidden bg-purple-400">
        <div className="dropdown">
          <label tabIndex={0} className="inline-block pt-3 px-4 lg:hidden">
            <BsMenuButtonWideFill size={24} className="text-white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded w-52"
          >
            <li>
              <NavLink className="my-2 mr-1" to="/dashboard">
                <ImHome className="mr-2 mb-1 inline" size={20} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2" to="/dashboard/booking">
                <MdOutlineAddchart className="mr-2 mb-1 inline" size={20} />
                Booking
              </NavLink>
            </li>

            <li>
              <NavLink className="py-2" to="/dashboard/account">
                <BsCurrencyRupee className="mr-2 mb-1 inline" size={20} />{" "}
                Account
              </NavLink>
            </li>

            <li>
              <NavLink className="py-2" to="/dashboard/form">
                <FaWpforms className="mr-2 mb-1 inline" size={20} /> Form
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2" to="/dashboard/report">
                <GoReport className="mr-2 mb-1 inline" size={20} /> Report
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2" to="/dashboard/menu">
                <CiMenuKebab className="mr-2 mb-1 inline" size={20} /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2" to="/dashboard/profile">
                <CgProfile className="mr-2 mb-1 inline" size={20} /> Profile
              </NavLink>
            </li>
            <li>
              <button className="py-2" onClick={logout}>
                <BiLogOutCircle className="mb-1 inline" size={20} /> Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="flex justify-center items-center py-4 bg-[#B66DFF] text-white ">
          <li>
            <NavLink className="py-2 px-10 mr-1" to="/dashboard">
              <ImHome className="mr-2 mb-1 inline" size={20} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 px-10" to="/dashboard/booking">
              <MdOutlineAddchart className="mr-2 mb-1 inline" size={20} />
              Booking
            </NavLink>
          </li>

          <li>
            <NavLink className="py-2 px-10" to="/dashboard/account">
              <BsCurrencyRupee className="mr-2 mb-1 inline" size={20} /> Account
            </NavLink>
          </li>

          <li>
            <NavLink className="py-2 px-10" to="/dashboard/form">
              <FaWpforms className="mr-2 mb-1 inline" size={20} /> Form
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 px-10" to="/dashboard/report">
              <GoReport className="mr-2 mb-1 inline" size={20} /> Report
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 px-10" to="/dashboard/menu">
              <CiMenuKebab className="mr-2 mb-1 inline" size={20} /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 px-10" to="/dashboard/profile">
              <CgProfile className="mr-2 mb-1 inline" size={20} /> Profile
            </NavLink>
          </li>
          <li>
            <button className="py-2 px-10" onClick={logout}>
              <BiLogOutCircle className="mr-2 mb-1 inline" size={20} /> Log Out
            </button>
          </li>
        </ul>
      </div>

      <div className="drawer drawer-mobile bg-[#F9FAFB]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-black flex flex-col">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
