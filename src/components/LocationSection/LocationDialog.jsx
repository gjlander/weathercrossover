import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Dialog, DialogTitle } from "@mui/material";

export default function LocationDialog({mapOpen, setMapOpen, lat, lon}) {


    function handleClose() {
        setMapOpen(false)
    }
    return (
        <Dialog onClose={handleClose} open={mapOpen}>
            <DialogTitle>Current Location</DialogTitle>
            <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false} id="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]} />
            </MapContainer>
        </Dialog>
    )
}
