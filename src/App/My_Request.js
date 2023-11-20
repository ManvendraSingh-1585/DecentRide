import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import logo from './../images/logo.png';
import Axios from 'axios';
import Card1 from './../Components/card1';

function createCard(ride) {
    return (
        <Card1
            ride_id={ride.ride_id}
            Rider_Name={ride.driver_name}
            source_address={ride.source_address}
            destination_address={ride.destination_address}
            ride_req = {ride.status}
        />
    );
}

function Request() {
    const [req, setReq] = useState([]);
    const [req1, setReq2] = useState([]);
    const [reqoption,handleOptionClick]=useState([]);

    useEffect(() => {
        const fetchreq = async () => {
            try {
                const res = await Axios.post('http://localhost:8000/login/Main_Dashboard/Request');
                setReq(res.data.rreq);
                console.log(res.data.rreq);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };
        fetchreq();
        const fetchreq2 = async () => {
            try {
                const res2 = await Axios.post('http://localhost:8000/login/Main_Dashboard/Request1');
                setReq2(res2.data.rreq1);
                console.log(res2.data.rreq1);
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };
        fetchreq();
        fetchreq2();
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
                <dev style={{ display: 'flex', flexDirection: 'row' }}>
                <button
                    onClick={() => handleOptionClick('ride_req')}
                    style={{
                    background: reqoption === 'pend_req' ? 'lightblue' : 'white',
                    marginRight: '5px',
                    }}
                >
                Ride Request
                </button>
                <button
                    onClick={() => handleOptionClick('accepted_req')}
                    style={{
                    background: reqoption === 'accepted_req' ? 'lightblue' : 'white',
                    marginLeft: '5px',
                    }}
                >
                Riders Request
                </button>
                
                </dev>
                <dev style={{ display: 'flex', flexDirection: 'row' }}>
                    <ul>{reqoption==="pend_req" && req.map(createCard)}</ul>
                    <ul>{reqoption==="accepted_req" && req1.map(createCard)}</ul>
                </dev>
            </section>
        </div>
    );
}

export default Request;
