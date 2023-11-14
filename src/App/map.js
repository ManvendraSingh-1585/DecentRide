import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { useLocation } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1Ijoibm9vYmNvZGVyNjkiLCJhIjoiY2xnaHc4MXpnMDI5ejNobHZ4enE0cnZtMiJ9.KDG3W-eg9e8G41WojH5qpw'; // Replace with your Mapbox API token

const MAP = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);
  const location = useLocation(); // Access the current location, including the query parameters

  const params = new URLSearchParams(location.search);
  const Driver = params.get('Driver');
  const start = params.get('start');
  const end = params.get('end');
  useEffect(() => {

    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [83.011901, 25.321684], // Varanasi, India
      zoom: 5, // Adjust the zoom level as needed
    });

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      controls: {
        instructions: false, // Hide step-by-step instructions
        profileSwitcher: false, // Hide profile switcher (e.g., walking, cycling)
      },
    });

    map.current.addControl(directions.current, 'top-left');
    directions.current.setOrigin(start);
    directions.current.setDestination(end);
    
  }, [location.search]);

  return (
    <div>
      <div style={{}}>
        <h2 style = {{backgroundColor:'#e1ccff'}}>Route Of the Driver ({Driver})</h2>
      </div>
      <div ref={mapContainer} style={ {height: '400px'} }/>
    </div>
  );
};

export default MAP;
