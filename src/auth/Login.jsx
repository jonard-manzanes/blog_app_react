/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-green-100 h-screen flex justify-center items-center">
      <form className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 pb-2">Share your thoughts now!</h1>
        <p className="text-gray-600 pb-4 text">
           No account?{" "}
          <Link to="/signup" className="text-green-900 hover:underline">
            Sign up!
          </Link>
          </p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">
              Email or Username
            </label>
            <input
              type="email"
              name="email"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
              placeholder="jhondoe@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
              placeholder="*******"
            />
          </div>

          <button className="bg-green-100 text-green-800 font-semibold rounded-lg p-2 mt-2 hover:bg-green-300 transition border-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
