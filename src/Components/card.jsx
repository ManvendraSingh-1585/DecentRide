import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';

function Card({ ride_id, driver_name, source_address, destination_address }) {
  const navigate = useNavigate();

  function handleClick(event) {
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const rider_id = user.user_id;
    console.log(`Clicked card with ID ${rider_id} with role_id : ${ride_id}`);
    navigate("/map");
  }
  function addrequest(event){
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const rider_id = user.user_id;
    console.log(ride_id);
    Axios.post('http://localhost:8000/login/Main_Dashboard/Avail_Rides/request',{
      ride_id:ride_id,rider_id:rider_id
    }).then((response)=>{
      if(response.data.status){
        alert("Request has been sent");
      }else{
      }
      console.log(response);
    });
  }

  return (
    <li className="ride">
      <div>
        <ul>
          <li>Driver Name: <strong>{driver_name}</strong></li>
          <li>Starting Location: <strong>{source_address}</strong></li>
          <li>Destination Location: <strong>{destination_address}</strong></li>
          
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Link
              to={{
                pathname: '/map',
                search: `?Driver=${driver_name}&start=${source_address}&end=${destination_address}`,
              }}
              >
            <button type="submit" className="pill sije " onClick={handleClick}>
              Route
            </button>
            </Link>
            <button type="submit" className="pill sije" onClick={addrequest}>
              Request
            </button>
          </div>
        </ul>
      </div>
    </li>
  );
}

export default Card;
