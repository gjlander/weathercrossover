import React, { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../lib/weatherApi';

export default function CurrentLocation() {

    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
    const [placename, setPlacename] = useState("")

    useEffect(() => {
        if (lat && lon) {
            getCurrentWeather(`${lat},${lon}`)
            .then((data) => setPlacename(data.location.name))
            .catch((error) => console.error(error));
        }
    }, [lat, lon]);


    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    } else {
        console.log("Geo is not available")
    }


    return (
        <div>Your current location: {placename}</div>
    )
}
