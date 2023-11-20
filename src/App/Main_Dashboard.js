import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../images/logo.png';
import axios from 'axios';

export default function Main_Dashboard() {
  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  const user_id = user.user_id;
  const [user_role, setUserRole] = useState('');
  const username = user.user_name;
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // Step 1: Create the role
    console.log(username);
    axios
      .post('http://localhost:8000/login/Main_Dashboard/createRole', { roleName: option })
      .then((response) => {
        const roleId = response.data.role_id; // Assuming the API returns the role ID

        // Step 2: Associate the user with the role
        return axios.post('http://localhost:8000/login/Main_Dashboard/assignRole', { user_id, roleId });
      })
      .then((response) => {
        // Role assigned successfully
        console.log('Role assigned:', response.data);

        // Update the user_role state
        setUserRole(option);

        // You can redirect the user to a specific page after role assignment
        navigate(`/login/Main_Dashboard/${option}`);
      })
      .catch((error) => {
        // Handle errors related to role creation or assignment
        console.error('Error:', error);
      });
  };

  return (
    <div id="container">
      <nav id="navbar">
        <a href="../"><img src={logo} alt="tournhub-logo" title="Tournhub" /></a>
        <input type="checkbox" id="burger-toggle" />
        <label id="burger" htmlFor="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" className="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/login/Main_Dashboard/Myrequest" className="shortcut">My-Requests</Link>
          </li>
          <li>
            <Link to="/" className="shortcut">Log out</Link>
          </li>
        </ul>
      </nav>
      <section className="spread">
        <h2>Dashboard for {username}</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            onClick={() => handleOptionClick('drivers')}
            style={{
              background: user_role === 'drivers' ? 'lightblue' : 'white',
              marginRight: '5px',
            }}
          >
            Create Ride
          </button>
          <button
            onClick={() => handleOptionClick('Avail_Rides')}
            style={{
              background: user_role === 'Avail_Rides' ? 'lightblue' : 'white',
              marginLeft: '5px',
            }}
          >
            Book Ride
          </button>
        </div>
      </section>
    </div>
  );
}
