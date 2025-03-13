import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="font-sans px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="w-full max-w-[1200px] h-auto min-h-[49px] mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white mt-4 sm:mt-6">

        <Link to="/" className="text-2xl sm:text-[40px] font-sans font-bold mb-3 sm:mb-0">
          Event <span className="text-primary">Hive</span>
        </Link>

        <div>
          <button onClick={() => window.location.href = '/Login'} className="mr-2 sm:text-[16px] sm:mr-4 font-sans text-black px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Login </button>
          <button onClick={() => window.location.href = '/signup'} className="bg-primary sm:text-[16px] font-sans text-white px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Signup</button>
        </div>
      </header>
      <div className="flex flex-col items-center justify-start mt-10 flex-grow p-2">
        <div className="w-full max-w-[816px] bg-white p-16 ">
          <h2 className="text-4xl font-bold text-center mb-10">Registration</h2>
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-3 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-3 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
