import React from 'react'
import SearchLocation from './SearchLocation'
import CurrentLocation from './CurrentLocation'
import Stack from '@mui/material/Stack';

export default function LocationSection() {
    return (
        <Stack direction="row" justifyContent="space-around" alignItems="center">
                <CurrentLocation />
                <SearchLocation />
        </Stack>

    )
}
