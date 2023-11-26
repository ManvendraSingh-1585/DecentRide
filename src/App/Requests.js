import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import logo from './../images/logo.png';
import Axios from 'axios';
import Card2 from './../Components/card2';

function createCard(ride) {
    return (
        <Card2
            rider_id={ride.rider_id}
            rider_name={ride.rider_name}
            rider_email={ride.rider_email}
            rider_phone ={ride.rider_phone}
        />
    );
}

function Request() {
    const [req, setReq] = useState([]);
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const user_Id = user.user_id;

    useEffect(() => {
        const fetchreq = async () => {
            try {
                const res = await Axios.post('http://localhost:8000/login/Main_Dashboard/Requests',{
                    driver_id:user_Id
                });
                setReq(res.data.info);
                console.log(res.data.info);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };
        fetchreq();
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
                  <Link to="/login/Main_Dashboard" className="shortcut">Dashboard</Link>
                </li>
              </ul>
            </nav>
            <section className="spread">
                <h2>Available Ride(s)</h2>
                <dev style={{ display: 'flex', flexDirection: 'row' }}>
                    <ul>{req.map(createCard)}</ul>
                </dev>
            </section>
        </div>
    );
}

export default Request;
