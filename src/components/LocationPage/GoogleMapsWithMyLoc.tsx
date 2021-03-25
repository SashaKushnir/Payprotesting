import React, { useEffect, useState } from 'react'
import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '1000px',
    height: '500px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent() {
    const [lat, setLat] = useState(null as any);
    const [lng, setLng] = useState(null as any);
    const [status, setStatus] = useState(null as any);
    useEffect(()=> {
        getLocation()
    },[])
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
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAxKQdgD97_LO8QP2kxxjTVglcRNXy2vKA"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // @ts-ignore
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        > <Marker position={{ lat: lat, lng: lng}}/>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)