import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(res.data.message);
      navigate("/Login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-[1440px] min-h-[900px] w-full flex flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        <div
          className="relative flex items-center justify-center w-full lg:w-1/3 min-h-[500px] lg:min-h-[900px] bg-cover bg-center order-1 lg:order-none"
          style={{ backgroundImage: "url('/signupp.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-white text-center px-6 sm:px-10">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="mt-2">To keep connected with us, provide your information</p>
            <Link to="/signin">
              <button className="mt-4 bg-white opacity-40 text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full lg:w-2/3 px-6 sm:px-12 lg:px-20 bg-white order-2 lg:order-none">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold text-center mb-6">
              <Link to="/" className="text-black">
                Event <span className="text-primary">Hive</span>
              </Link>
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-6">Sign Up to Event Hive</h3>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-[16px]">YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded mt-1"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-[16px]">YOUR EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded mt-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-[16px] text-gray-700">PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded mt-1"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-[16px] text-gray-700">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded mt-1"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-purple-600 transition">
                Sign Up
              </button>
            </form>

            <div className="text-center my-4 text-gray-500">Or</div>

            <button className="w-full flex items-center justify-center border p-2 rounded hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>

            <div className="text-center mt-4">
              <span>Already have an account? </span>
              <Link to="/signin" className="text-purple-600 font-semibold">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
