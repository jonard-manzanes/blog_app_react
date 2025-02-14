// eslint-disable-next-line no-unused-vars
import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [fname, setFirstname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {session} = UserAuth();
  console.log(session);

  return (
    <div className="bg-green-100 h-screen flex justify-center items-center">
      <form className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 pb-2">
          Join now!
        </h1>
        <p className="text-gray-600 pb-4 text">
          Already a user?{" "}
          <Link to="/login" className="text-green-900 hover:underline">
             Login instead!
          </Link>
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
            placeholder="jhon29"
            id="username"
            />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="fname" className="font-medium text-gray-700">First name</label>
            <input
              type="text"
              name="fname"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
              placeholder="Jhon"
              id="fname"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lname" className="font-medium text-gray-700">Last name</label>
          <input
            type="text"
            name="lname"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
            placeholder="Doe"
            id="lname"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
            placeholder="jhondoe@gmail.com"
            id="email"
            />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-medium text-gray-700">Password</label>
          <input
            type="text"
            name="password"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-100"
            placeholder="********"
            id="password"
            />
        </div>

        <button className="w-full bg-green-100 text-green-800 font-semibold rounded-lg p-2 mt-2 hover:bg-green-300 transition border-2">
          Create Account
        </button>
      </form>
    </div>
  );

};

export default Signup;
