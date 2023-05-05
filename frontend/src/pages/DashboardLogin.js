import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { isValidEmail } from "../utils/auth";

function DashboardLogin() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [inputs]);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    server_error: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let errorObj = {};

  const { login, setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // front end validation
    let check = false;
    if (!isValidEmail(inputs.email)) {
      check = true;
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    }
    if (inputs.password.length < 6) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long",
      }));
    }

    if (check) return false;

    setLoading(true);

    try {
      const data = await login(inputs);

      setLoading(false);
      // if got some validation errors then return display errors
      if (data.errors?.length > 0) {
        data.errors.map((error) => {
          setErrors((prev) => ({ ...prev, [error.param]: error.msg }));
        });
      }

      if (data.status) {
        navigate("/dashboard");

        window.location.reload();
        setCurrentUser(data.data);
      } else {
        setErrors((prev) => ({ ...prev, ["email"]: data.message }));
      }

      // If success message then display success message
    } catch (error) {
      setErrors((prev) => ({ ...prev, ["server_error"]: error.message }));
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
      ["server_error"]: "",
    }));
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className=" flex items-center justify-center pt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-200 py-6 px-6 rounded">
        <div>
          <p className="text-center normal-case text-3xl  text-[#B66DFF] Righteous">
            WhatsBulk
          </p>
          <h2 className="mt-3 text-center text-md font-semibold text-gray-900">
            Sign in to start your session
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-2 space-y-2">
          {errors.server_error && (
            <p className="bg-red-700 text-white text-center px-5 py-2 mb-2">
              {errors.server_error}
            </p>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                onChange={handleChange}
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <p className="text-red-500">{errors.password}</p>
            </div>
          </div>

          <div className="flex items-center py-2">
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <input
              type="submit"
              className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#B66DFF] outline-none"
              value="Sign in"
            />
          </div>
          <div className="flex pt-2">
            <p>New to here?</p>
            <Link to="/registration" className="underline text-indigo-600">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardLogin;
