import React, { useContext, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils/auth";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function DashboardRegistration() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    server_error: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
      ["server_error"]: "",
    }));
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear error state
    setErrors((prev) => ({}));

    // front end validation
    let check = false;
    if (inputs.username.length < 5) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["username"]: "Username must be at least 5 characters long",
      }));
    }

    if (!isValidEmail(inputs.email)) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["email"]: "Invalid email address",
      }));
    }
    if (inputs.password.length < 8) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["password"]: "Password must be at least 8 characters long",
      }));
    }

    if (check) return false;

    setLoading(true);

    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      // console.log(baseUrl)
      const res = await fetch(`http://localhost:8800/api/auth/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setLoading(false);
      // if got some validation errors then return display errors
      if (data.errors?.length > 0) {
        data.errors.map((error) => {
          setErrors((prev) => ({ ...prev, [error.param]: error.msg }));
        });
      }

      if (data.status) {
        setCurrentUser(data.data);
        navigate("/");
        toast.success("Register Successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setErrors((prev) => ({ ...prev, ["username"]: data.message }));
      }

      // If success message then display success message
    } catch (error) {
      setErrors((prev) => ({ ...prev, ["server_error"]: error.message }));
      setLoading(false);
    }
  };
  return (
    <div className=" flex items-center justify-center pt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-200 py-6 px-6 rounded">
        <div>
          <p className="text-center normal-case text-3xl  text-[#B66DFF] Righteous">
            WhatsBulk
          </p>
          <h2 className="mt-3 text-center text-md font-semibold text-gray-900">
            Register to start your session
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-2 space-y-2">
          {errors.server_error && (
            <p className="bg-red-700 text-white px-5 py-2 mb-2">
              {errors.server_error}
            </p>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-1">
              <label htmlFor="username" className="sr-only">
                Full Name
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.username}</p>
            </div>
            <div className="py-3">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                className="appearance-none   relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              <p className="text-red-500">{errors.email}</p>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleChange}
                placeholder="Password"
              />
              <p className="text-red-500">{errors.password}</p>
            </div>
          </div>

          <div>
            <input
              type="submit"
              className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#B66DFF] outline-none"
              value="Sign up"
            />
          </div>
          <div className="flex justify-center pt-4">
            <Link to="/login" className=" flex items-center ">
              <AiOutlineLeft className="mr-2 mt-1" size={20} /> Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardRegistration;
