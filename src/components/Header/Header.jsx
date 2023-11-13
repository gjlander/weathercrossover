import React from 'react'
import { Stack, Typography } from '@mui/material'

export default function Header() {
    return (
        <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                p: 6,
                background: `radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6), rgba(255, 0, 150, 0)) , url(https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2022-07/clouds_sun-rays_aspot_AdobeStock.jpg?h=d1cb525d&itok=J7Cona2S)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100%`
            }}>
            <Typography variant="h1" component="h2" color="primary">Weather Wisdom</Typography>
        </Stack>
    )
}
