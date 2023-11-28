import React from 'react';
import './App.css';
import Home from './App/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './App/Login';
import Signup from './App/Signup';
import RidePage from './App/Avail_Rides';
import DriverPage from './App/drivers';
import Map from './App/map';
import Main_Dashboard from './App/Main_Dashboard';
import Requests from './App/Requests';
import MRequests from './App/My_Request';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login/Main_Dashboard" element={<Main_Dashboard />} />
          <Route exact path="/login/Main_Dashboard/drivers" element={<DriverPage />} />
          <Route exact path="/login/Main_Dashboard/Avail_Rides" element={<RidePage />} />
          <Route exact path="/login/Main_Dashboard/Requests" element={<Requests />} />
          <Route exact path="/login/Main_Dashboard/My_Request" element={<MRequests />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
