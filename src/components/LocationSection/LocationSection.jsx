import React from 'react'
import SearchLocation from './SearchLocation'
import CurrentLocation from './CurrentLocation'
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function LocationSection() {

    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")

    return (
        <Stack direction="row" justifyContent="space-around" alignItems="center">
                <CurrentLocation lat={lat} setLat={setLat} lon={lon} setLon={setLon} />
                <SearchLocation setLat={setLat} setLon={setLon}/>
        </Stack>

    )
}
