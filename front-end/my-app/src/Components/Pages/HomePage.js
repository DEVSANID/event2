import React, { useState, useEffect } from "react";
import { FaSearch,  } from "react-icons/fa";
import { FaEllipsisH, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer"; // Updated import name

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setEvents([
      { id: 1, title: "Tech Conference 2025", image: "/conf.jpg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 2, title: "Music Festival", image: "/music.jpg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 3, title: "Startup Meetup", image: "/start.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 4, title: "Art Exhibition", image: "/art.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 5, title: "Business Summit", image: "/summit.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 6, title: "Gaming Convention", image: "/gaming.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
    ]);

    setBlogs([
      { id: 1, title: "BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow", image: "/book.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 2, title: "BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow", image: "/book2.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" },
      { id: 3, title: "BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow", image: "/book3.jpeg", date: "Saturday, March 18, 9:30PM", location: "ONLINE EVENT - Attend anywhere" }
    ]);
  }, []);

  const colleges = [
    { id: 1, name: "Harvard University", image: "/harvard.jpeg", location: "Cambridge, Massachusetts, UK", rating: 4.8 },
    { id: 2, name: "Stanford University", image: "/stanford.jpeg", location: "Stanford, California", rating: 4.8 },
    { id: 3, name: "Nanyang University", image: "/nanyang.jpeg", location: "Nanyang Ave, Singapura", rating: 4.8 }
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="w-full max-w-[1200px] h-auto min-h-[49px] mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white mt-4 sm:mt-6">
        <Link to="/" className="text-2xl sm:text-[40px] font-sans font-bold mb-3 sm:mb-0">
          Event <span className="text-primary">Hive</span>
        </Link>
        <div>
          <button onClick={() => window.location.href = '/Login'} className="mr-2 sm:text-[16px] sm:mr-4 font-sans text-black px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Login </button>
          <button onClick={() => window.location.href = '/signup'} className="bg-primary sm:text-[16px] font-sans text-white px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Signup</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto bg-cover bg-center flex items-center justify-center text-white rounded-lg md:rounded-2xl mt-4 md:mt-6 h-[300px] md:h-[400px] lg:h-[596px]"
        style={{ backgroundImage: "url('/Banner.png')" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-[64px] font-sans font-bold text-white text-center leading-tight md:leading-[60px] px-4">
          MADE FOR THOSE <br />WHO DO
        </h1>
      </section>

      {/* Event Search Bar */}
      <div className="w-full flex justify-center px-4">
        <div className="bg-navyBlue w-full max-w-[1200px] h-auto py-6 px-4 sm:px-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 rounded-2xl relative -top-8 sm:-top-12 md:-top-16 mx-auto shadow-lg text-white">
          <div className="flex flex-col w-full sm:w-[290px]">
            <label className="mb-2 text-sm font-medium">Looking for</label>
            <select className="p-2 rounded-md bg-backgroundGrey text-black w-full h-[40px]">
              <option>Choose event type</option>
            </select>
          </div>
          <div className="flex flex-col w-full sm:w-[290px]">
            <label className="mb-2 text-sm font-medium">Location</label>
            <select className="p-2 rounded-md bg-backgroundGrey text-black w-full h-[40px]">
              <option>Choose location</option>
            </select>
          </div>
          <div className="flex flex-col w-full sm:w-[290px]">
            <label className="mb-2 text-sm font-medium">When</label>
            <select className="p-2 rounded-md bg-backgroundGrey text-black w-full h-[40px]">
              <option>Choose date and time</option>
            </select>
          </div>
          <div className="w-full flex justify-center sm:w-auto">
            <button className="bg-primary p-4 rounded-lg text-white flex items-center justify-center w-[70px] h-[70px] mt-4 sm:mt-3 mx-6">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="w-full bg-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold">
            Upcoming <span className="text-primary">Events</span>
          </h2>
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {events.map((event) => (
    <div
      key={event.id}
      className="bg-white shadow-lg rounded-xl overflow-hidden p-5" // Updated padding and added overflow-hidden
    >
      {/* Image Container */}
      <div className="relative w-full flex justify-center">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[240px] object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-white text-primary text-xs font-semibold px-2 py-1 rounded">
          FREE
        </span>
      </div>

      {/* Event Content */}
      <div className="mt-4 text-left space-y-2"> {/* Added spacing and text alignment */}
        <h3 className="text-md font-semibold leading-tight text-black"> {/* Updated text styling */}
          {event.title}
        </h3>
        <p className="text-xs font-medium text-primary leading-[2.5]"> {/* Updated date styling */}
          {event.date}
        </p>
        <p className="text-xs text-gray-600"> {/* Updated location styling */}
          {event.location}
        </p>
      </div>
    </div>
  ))}
</div>

        <div className="max-w-6xl mx-auto mt-8 flex justify-center">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-md">
            Load more...
          </button>
        </div>
      </section>

      {/* Create Your Event Section */}
      <div className="relative bg-navyBlue text-white p-6 sm:p-7 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between my-8 mx-4 sm:mx-auto max-w-6xl">
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start relative">
          <img
            src="/Logo.png"
            alt="Event Illustration"
            className="w-[180px] xs:w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-auto sm:absolute sm:-top-[130px] sm:left-10"
          />
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-left sm:pl-10 mt-4 sm:mt-0">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-sans font-bold -mx-[60px]">Make your own Event</h2>
          <p className="mt-2 text-sm xs:text-base sm:text-lg text-gray-300 -mx-[60px]">
            Create and manage your own events easily
          </p>
          <button
            onClick={() => window.location.href = '/CreateEvents'}
            className="mt-4 bg-primary hover:bg-primary text-white font-semibold py-2 px-4 xs:px-5 sm:px-6 rounded-lg -mx-[60px]"
          >
            Create Events
          </button>
        </div>
      </div>

      {/* Brand Logos Section */}
      <section className="p-6 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-[36px] font-bold">
          Join these <span className="text-primary">brands</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-lg">
          <img src="/Google.png" alt="Google" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Spotify.png" alt="Spotify" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Microsoft.png" alt="Microsoft" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Uber.png" alt="Uber" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Zoom.png" alt="Zoom" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Stripe.png" alt="Stripe" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
        </div>
      </section>

      {/* Trending Colleges Section */}
      <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-[36px] font-sans font-bold">
            Trending <span className="text-purple-500">colleges</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img src={college.image} alt={college.name} className="w-full h-48 sm:h-56 object-cover rounded-xl" />
                <span className="absolute top-2 left-2 flex items-center bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                  <FaStar className="text-yellow-500 mr-1" /> {college.rating}
                </span>
                <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md">
                  EXCLUSIVE
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{college.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{college.location}</p>
                <div className="mt-3 flex justify-end">
                  <FaEllipsisH className="text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8 flex justify-center">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-md">
            Load more...
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-[36px] font-sans font-bold">
            Our <span className="text-primary">Blogs</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogs.map((blog) => (
    <div key={blog.id} className="bg-white shadow-lg rounded-xl overflow-hidden p-5">
      {/* Image Container */}
      <div className="relative w-full flex justify-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[240px] object-cover rounded-lg" // Standardized height to 240px
        />
        <span className="absolute top-2 left-2 bg-white text-primary text-xs font-semibold px-2 py-1 rounded">
          FREE
        </span>
      </div>

      {/* Blog Content */}
      <div className="mt-4 text-left space-y-2">
        <h3 className="text-md font-semibold leading-tight text-black">
          {blog.title}
        </h3>
        <p className="text-xs font-medium text-primary leading-[2.5]">
          {blog.date}
        </p>
        <p className="text-xs text-gray-600">
          {blog.location}
        </p>
      </div>
    </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;