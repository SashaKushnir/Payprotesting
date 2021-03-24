import React, { useState,  } from 'react';
import './App.css';

export const App = () => {
    const [lat, setLat] = useState(null as any);
    const [lng, setLng] = useState(null as any);
    const [status, setStatus] = useState(null as any);
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
    return <div className="App">
        <button onClick={getLocation}>Get Location</button>
        <h1>Coordinates</h1>
    <p>{status}</p>
    {
        lat && <p>Latitude: {lat}</p>
    }
    {
        lng && <p>Longitude: {lng}</p>
    }
</div>
}