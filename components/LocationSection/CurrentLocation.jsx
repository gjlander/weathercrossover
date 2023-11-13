import React, { useState } from 'react'

export default function CurrentLocation() {

    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")


    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
          });
    } else {
        console.log("Geo is not available")
    }


    return (
        <div>Your current location: LAT {lat}, LON {lon}</div>
    )
}
