import React from 'react'
import SearchLocation from './SearchLocation'
import CurrentLocation from './CurrentLocation'

export default function LocationSection() {
    return (
        /*         <Stack direction="row" justifyContent="space-between" alignItems="center"> */
        <div>
            <CurrentLocation />
            <SearchLocation />
        </div>
        /*         </Stack> */

    )
}
