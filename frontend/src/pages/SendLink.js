import React, { useState } from "react";
import { RxInfoCircled } from "react-icons/rx";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SendLink() {
  const [email, setEmail] = useState("");
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (email) {
      const res = await fetch(`http://localhost:8800/api/auth/reset`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.status === 1) {
        toast.success(`${data.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
      }
    }
  };
  return (
    <div className=" flex items-center justify-center pt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-200 py-6 px-6 rounded">
        <div>
          <p className="text-center flex justify-center normal-case text-3xl  text-[#B66DFF] Righteous">
            <RxInfoCircled size={60} />
          </p>
          <h2 className="mt-3 text-center text-2xl text-md font-semibold text-gray-900">
            Forgot Password
          </h2>
          <p className="text-center text-gray-500 pt-2 px-10">
            Enter your email And we'll send you a link to reset your password
          </p>
        </div>
        <form onSubmit={handleResetPassword} className="mt-2 space-y-2">
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
                required
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              className="group font-semibold relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md text-white bg-[#B66DFF]  outline-none "
              value="Submit"
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

export default SendLink;
