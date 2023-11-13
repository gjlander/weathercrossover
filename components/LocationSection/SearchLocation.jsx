import React, { useState } from 'react'

export default function SearchLocation() {

    const [placename, setPlacename] = useState("")

    function handleChange (e) {
        setPlacename(e.target.value)
    }

    function submitPlace (e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitPlace}>
            <label htmlFor="searchPlace">Search</label>
            <input type="text" id="searchPlace" placeholder="Type in place" value={placename} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    )
}
