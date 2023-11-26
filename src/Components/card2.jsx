import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Card({ rider_id, rider_name, rider_phone, rider_email }) {
  const navigate = useNavigate();

  const handleClick = async (status) => {
    try {
      // Make an axios request to the specified endpoint with the status
      const response = await Axios.post('http://localhost:8000/login/Main_Dashboard/requests1', {
        rider_id,status
      });

      // Handle the response as needed
      
      console.log(rider_id);

      // You can navigate or perform other actions based on the response
    } catch (error) {
      console.error('Error handling request:', error);
    }
  };

  return (
    <li className="ride">
      <div>
        <ul>
          <li>Rider Name: <strong>{rider_name}</strong></li>
          <li>Rider Email: <strong>{rider_phone}</strong></li>
          <li>Rider Phone: <strong>{rider_email}</strong></li>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              type="submit"
              className="pill sije"
              onClick={() => handleClick('Accepted')}
            >
              Accept
            </button>
            <button
              type="submit"
              className="pill sije"
              onClick={() => handleClick('Rejected')}
            >
              Reject
            </button>
          </div>
        </ul>
      </div>
    </li>
  );
}

export default Card;
