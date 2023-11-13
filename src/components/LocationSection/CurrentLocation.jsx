import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../lib/weatherApi";

export default function CurrentLocation({ lat, setLat, lon, setLon }) {
    const [displayPlace, setDisplayPlace] = useState("");

    useEffect(() => {
        if (lat && lon) {
            getCurrentWeather(`${lat},${lon}`)
                .then((data) => setDisplayPlace(data.location.name))
                .catch((error) => console.error(error));
        }
    }, [lat, lon]);

    if (!lat) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
        } else {
            console.log("Geo is not available");
        }
    }

    return <div>Your current location: {displayPlace}</div>;
}
