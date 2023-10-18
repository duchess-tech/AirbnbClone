import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';





function MyComponent() {
    const [lng, setLng] = useState(0);
    const [lat, setlat] = useState(0);
    const [showSetup, setShowSetup] = useState(false);

    const { isLoaded } = useJsApiLoader({ // id: "YG1Hw883jXfYzFouNfQPwPsRaKY",
        googleMapsApiKey: "AIzaSyCNv2kT7d3XjQRP7y6utZogK65jgwuHoHw"

    })
    const containerStyle = {
        width: "670px",
        height: "650px",
        borderRadius: "10px"
    }
    const center = useMemo(() => ({ lat, lng }), [lat, lng]);

    function showPosition(position) {
        setlat(position.coords.latitude);
        setLng(position.coords.longitude);
        return;
    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setlat("Geolocation is not supported by this browser.");
        }
    }
    useEffect(() => {
        getLocation();
    }, [lng, lat]);


    return isLoaded ? (
        <GoogleMap

            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}

        >
            <Marker position={{ lat: lat, lng: lng }} />

        </GoogleMap>
    ) : <></>


}

export default MyComponent