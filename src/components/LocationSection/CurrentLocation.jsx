import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../lib/weatherApi";
import { Backdrop, CircularProgress, Typography, IconButton } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import LocationDialog from "./LocationDialog";

export default function CurrentLocation({ lat, setLat, lon, setLon }) {
    const [displayPlace, setDisplayPlace] = useState("");
    const [open, setOpen] = useState(true);
    const [mapOpen, setMapOpen] = useState(false);

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

    function openMap(e) {
        e.preventDefault()
        setMapOpen(true)
    }

    return (
        <>
            <Typography variant="h4" component="h4" color="text.secondary">Your current location: {displayPlace} <IconButton aria-label="show location" onClick={openMap}><LocationOn fontSize="large" /></IconButton></Typography>
            <LocationDialog mapOpen={mapOpen} setMapOpen={setMapOpen} lat={lat} lon={lon}/>
        </>
    )
}
