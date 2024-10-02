import React from 'react';
import "../Map/Map.css";
import {GoogleMap , LoadScript, Marker} from "@react-google-maps/api";

const Map = () =>{
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

// Specify the initial position of the map (latitude and longitude)
    const center = {
        lat: 40.730610,  // Replace with your company's latitude
        lng: -73.935242  // Replace with your company's longitude
    };

    return (
        <LoadScript
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"  // Replace with your API key
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}  // Adjust the zoom level
            >
                {/* Marker to show the company's location */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}
export default Map;