import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1Ijoibm9vYmNvZGVyNjkiLCJhIjoiY2xnaHc4MXpnMDI5ejNobHZ4enE0cnZtMiJ9.KDG3W-eg9e8G41WojH5qpw';

const RideSharingApp = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.985664, 40.748817],
      zoom: 12,
    });
    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
    });
    map.current.addControl(directions.current, 'top-left');
  }, []);

  useEffect(() => {
    if (!route) return;
    const routeDistance = route.reduce(
      (acc, curr) => acc + curr.distance,
      0
    );
    setDistance(routeDistance.toFixed(2));
    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: route.map((point) => point.coordinates),
          },
        },
      ],
    };
    if (map.current.getLayer('route')) {
      map.current.getSource('route').setData(geojson);
    } else {
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson,
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75,
        },
      });
    }
  }, [route]);

  const handleSubmit = (e) => {
    e.preventDefault();
    directions.current.setOrigin(pickup);
    directions.current.setDestination(dropoff);
    directions.current.on('route', (event) => {
      setRoute(event.route);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pickup:
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </label>
        <label>
          Dropoff:
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </label>
        <button type="submit">Calculate Route</button>
      </form>
      {distance && <p>Distance: {distance} m</p>}
      <div ref={mapContainer} style={{ height: '400px' }} />
    </div>
  );
};

export default RideSharingApp;