import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapWithDirections = () => {
  const mbitaHighSchool = { lat: -0.43957, lng: 34.20588 }; // Coordinates for Mbita High School
  const destinations = [
    "Homa Bay Town, Kenya", // Add more towns as needed
    "Mbita Town, Kenya",
    "Suba Town, Kenya",
  ];
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  const fetchDirections = () => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded yet.");
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: mbitaHighSchool,
        destination: destinations[currentDestinationIndex],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  };

  useEffect(() => {
    if (mapLoaded) {
      fetchDirections();
    }
  }, [mapLoaded, currentDestinationIndex]);

  if (!API_KEY) {
    // If API_KEY is not available, show a loading message or error
    return <div>Google Maps API key is missing. Please try again later.</div>;
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "200px" }}
        center={mbitaHighSchool}
        zoom={12}
        onLoad={() => setMapLoaded(true)}
      >
        {/* Pin at Mbita High School */}
        <Marker position={mbitaHighSchool} label="Mbita High School" />

        {/* Render Directions */}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              suppressMarkers: true, 
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithDirections;
