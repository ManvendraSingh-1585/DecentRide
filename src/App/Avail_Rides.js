import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import logo from './../images/logo.png';
import Axios from 'axios';
import Card from './../Components/card';

function createCard(ride) {
    return (
        <Card
            ride_id={ride.ride_id} // Assuming ride_id is a unique identifier
            driver_name={ride.driver_name}
            source_address={ride.source_address}
            destination_address={ride.destination_address}
        />
    );
}

function ShowRides() {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const res = await Axios.post('http://localhost:8000/login/Main_Dashboard/Avail_Rides');
                setRides(res.data.rides);
                console.log(res.data.rides);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };

        fetchRides();
    }, []);

    return (
        <div id="container">
            <nav id="navbar">
              <Link to="/"><img src={logo} alt="logo" title="DecentRIDE | Cool with CarPool" /></Link>
              <input type="checkbox" id="burger-toggle" />
              <label id="burger" htmlFor="burger-toggle">
                <div></div>
              </label>
              <ul>
                <li>
                  <Link to="/" className="shortcut">Home</Link>
                </li>
                <li>
                  <Link to="/signup" className="shortcut">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login" className="shortcut">Log In</Link>
                </li>
              </ul>
            </nav>
            <section className="spread">
                <h2>Available Ride(s)</h2>
                <ul>{rides.map(createCard)}</ul>
            </section>
        </div>
    );
}

export default ShowRides;
