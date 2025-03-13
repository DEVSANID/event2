import React from "react";
// import { FaRegCircle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const AllEvents = () => {
  return (
    <div className="w-full font-sans bg-white min-h-screen flex flex-col">
      {/* Container for constrained content */}
      <div className="max-w-[1200px] mx-auto flex-1 w-full">
        {/* --------------------------- HEADER / NAVBAR ----------------------------*/}
        <header className="w-full h-auto min-h-[49px] flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white mt-4 sm:mt-6">
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-sans font-bold mb-3 sm:mb-0 text-center sm:text-left">
            Event <span className="text-primary">Hive</span>
          </Link>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <button
              onClick={() => window.location.href = '/Login'}
              className="mr-2 sm:mr-4 text-sm sm:text-[16px] font-sans text-black px-3 sm:px-6 py-1 sm:py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200"
            >
              Login
            </button>
            <button
              onClick={() => window.location.href = '/signup'}
              className="bg-primary text-sm sm:text-[16px] font-sans text-white px-3 sm:px-6 py-1 sm:py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200"
            >
              Signup
            </button>
          </div>
        </header>

        {/* --------------------------- HERO SECTION ----------------------------*/}
        <section className="w-full flex flex-col pl-8 md:px-16 py-2 md:py-20 flex-grow px-0">
          {/* Image Section - Moved to Top */}
          <div className="w-full mb-6 md:mb-8 flex ">
            <div className="text-left">
              <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-lg lg:text-xl">Thriving Above Event Expectations.</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Event<span className="text-primary">Hive</span>-ing <br />
                The Best.Day.Ever.
              </h1>
              <div className="flex gap-3">
                <div className="bg-primary text-white text-left  sm:px-6  sm:py-3 rounded-lg   p-[20px] sm:w-auto">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold">2k+</p>
                  <p className="text-xs sm:text-sm lg:text-base">Total Events </p>

                  <p>   Hosted</p>
                </div>
                <div className="bg-primary text-white text-left  sm:px-6  sm:py-3 rounded-lg   p-[20px] sm:w-auto">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold">100+</p>
                  <p className="text-xs sm:text-sm lg:text-base">Total Events </p>

                  <p>Live</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/allevents.png"
                alt="Event Hero"
                className="w-full max-w-[800px] h-[250px] sm:h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>

          {/* Text and Stats Section */}
          {/* Upcoming Events Section */}
          <section className="w-full bg-white py-10 px-4 sm:px-6">
            {/* Section Title */}
            <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-inter font-bold">
                Upcoming <span className="text-primary">Events</span>
              </h2>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <select className="px-3 sm:px-4 py-2 bg-backgroundGrey rounded-md text-sm">
                  <option>Weekdays</option>
                </select>
                <select className="px-3 sm:px-4 py-2 bg-backgroundGrey rounded-md text-sm">
                  <option>Event type</option>
                </select>
                <select className="px-3 sm:px-4 py-2 bg-backgroundGrey rounded-md text-sm">
                  <option>Any category</option>
                </select>
              </div>
            </div>
            </section>
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden p-5">
      {/* Image Container */}
      <div className="relative w-full flex justify-center">
        <img
          src="/allevents.png"
          alt="Event"
          className="w-full h-[240px] object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-white text-primary text-xs font-semibold px-2 py-1 rounded">
          FREE
        </span>
      </div>

      {/* Event Content */}
      <div className="mt-4 text-left space-y-2">
        <h3 className="text-md font-semibold leading-tight text-black">
          Sample Event Name
        </h3>
        <p className="text-xs font-medium text-primary leading-[2.5]">
          Saturday, March 15, 5:30 PM
        </p>
        <p className="text-xs text-gray-600">
          Online Event • Attend Anywhere
        </p>
      </div>
    </div>
  ))}
</div>
</section>
      </div>

      {/* --------------------------- FOOTER ----------------------------*/}
      <Footer />
    </div>
  );
};

export default AllEvents;