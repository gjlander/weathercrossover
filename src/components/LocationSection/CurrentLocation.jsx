/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../lib/weatherApi";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

export default function CurrentLocation({ lat, setLat, lon, setLon }) {
    const [displayPlace, setDisplayPlace] = useState("");
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (lat && lon) {
            getCurrentWeather(`${lat},${lon}`)
                .then((data) => {
                    setOpen(false)
                    setDisplayPlace(data.location.name)
                })
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

    while (open) {
        return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )
    }

    return <Typography variant="h4" component="h4" color="text.secondary">Your current location: {displayPlace}</Typography>;
}
