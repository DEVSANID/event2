import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    venue: "",
    startTime: "",
    endTime: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
        },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Event created successfully!");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <header className="w-full max-w-[1200px] h-auto min-h-[49px] mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white mt-4 sm:mt-6">
        <Link to="/" className="text-2xl sm:text-[40px] font-sans font-bold mb-3 sm:mb-0">
          Event <span className="text-primary">Hive</span>
        </Link>

        <div>
          <button onClick={() => window.location.href = '/Login'} className="mr-2 sm:text-[16px] sm:mr-4 font-sans text-black px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Login</button>
          <button onClick={() => window.location.href = '/signup'} className="bg-primary sm:text-[16px] font-sans text-white px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Signup</button>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Event</h2>

        <div className="space-y-4">
          <label className="block font-semibold">Event Title</label>
          <input type="text" name="title" value={eventData.title} onChange={handleChange} placeholder="Enter event title" className="w-full p-3 border rounded-md" />

          <label className="block font-semibold">Event Venue</label>
          <input type="text" name="venue" value={eventData.venue} onChange={handleChange} placeholder="Enter event venue" className="w-full p-3 border rounded-md" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Start Time</label>
              <input type="text" name="startTime" value={eventData.startTime} onChange={handleChange} placeholder="Enter start time" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block font-semibold">End Time</label>
              <input type="text" name="endTime" value={eventData.endTime} onChange={handleChange} placeholder="Enter end time" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block font-semibold">Start Date</label>
              <input type="text" name="startDate" value={eventData.startDate} onChange={handleChange} placeholder="Enter start date" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block font-semibold">End Date</label>
              <input type="text" name="endDate" value={eventData.endDate} onChange={handleChange} placeholder="Enter end date" className="w-full p-3 border rounded-md" />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4 text-center">Event Description</h2>
        <div className="space-y-4">
          <label className="block font-semibold">Event Description</label>
          <textarea name="description" value={eventData.description} onChange={handleChange} placeholder="Type here..." className="w-full p-3 border rounded-md h-24"></textarea>
        </div>

        <button type="submit" className="w-full mt-6 p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Create event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
