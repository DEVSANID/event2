import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/inter"; /* Defaults to weight 400 */
import HomePage from './Components/Pages/HomePage'; // Updated path
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Events from './Components/Pages/Events';
import CreateEvents from './Components/Pages/CreateEvents';
import College from './Components/Pages/College';
import Dashboard from './Components/Pages/Dashboard';
import AllEvents from './Components/Pages/AllEvents';
import CollegeEvents from './Components/Pages/CollegeEvents';
import Registration from './Components/Pages/Registration';
import PageNotFound from './Components/Pages/PageNotFound';
import reportWebVitals from './reportWebVitals';
import DashProfile from './Components/Pages/DashPofile';
import DashMessages from './Components/Pages/DashMessages';
import DashEvents from './Components/Pages/DashEvents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/CreateEvents" element={<CreateEvents />} />
        <Route path="/College" element={<College />} />
        <Route path="/AllEvents" element={<AllEvents />} />
        <Route path="/CollegeEvents" element={<CollegeEvents />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dash-messages" element={<DashMessages/>} />
        <Route path="/dash-profile" element={<DashProfile/>} />
        <Route path="/dash-events" element={<DashEvents/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();