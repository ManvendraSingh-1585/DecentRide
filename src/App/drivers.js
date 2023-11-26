import React, { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import logo from './../images/logo.png';
import axios from 'axios'

export default function DriverPage() {
  const navigate = useNavigate();
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [Driver, setDriver] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  const driver_id = user.user_id;
  const create_ride=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/login/Main_Dashboard/drivers',{
      start_address:start, end_address:end, ride_date:Date, ride_time:Time, Driver_id:driver_id
    }).then((response)=>{
      if(response.data.status){
        console.log('created ride')
        navigate("/login/Main_Dashboard")
      }
      else{
        alert("Incorrect username or password.");
      }
      console.log(response);
    });
  };
  return (
    <div id="container">
      <nav id="navbar">
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <input type="checkbox" id="burger-toggle"/>
            <label id="burger" htmlFor="burger-toggle">
            <div></div>
            </label>
            <ul>
            <li>
                <Link to="/" className="shortcut">Home</Link>
            </li>
            <li>
                <Link to="/login/Main_Dashboard" className="shortcut">Dashboard</Link>
            </li>
            </ul>
        </nav>
      <section className="spread">
        <h2>Create Ride</h2>
        <form>
          <input
            type="text"
            name="Driver"
            placeholder="Name"
            onChange={(e) => setDriver(e.target.value)}
            required
          />
          <input
            type="text"
            name="start"
            placeholder="Start-Point"
            onChange={(e) => setStart(e.target.value)}
            required
          />
          <input
            type="text"
            name="end"
            placeholder="Destination"
            onChange={(e) => setEnd(e.target.value)}
            required
          />
          <input
            type="data"
            name="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            name="time"
            placeholder="Ride_time"
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <Link
            to={{
              pathname: '/map',
              search: `?Driver=${Driver}&start=${start}&end=${end}`,
            }}
          >
            <button type="submit" className="pill" onClick={create_ride}>
              Enter
            </button>
          </Link>
        </form>
      </section>
    </div>
  );
}
