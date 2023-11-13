import React, {useState} from 'react'
import { getCurrentWeather } from '../../lib/weatherApi';

export default function SearchLocation({setLat, setLon}) {

    const [inputPlace, setInputPlace] = useState("")

    function handleChange (e) {
        setInputPlace(e.target.value)
    }

    function submitPlace (e) {
        e.preventDefault();
        if (inputPlace) {
            getCurrentWeather(inputPlace)
            .then((data) => {
                setLat(data.location.lat)
                setLon(data.location.lon)
            })
            .catch((error) => console.error(error));
        } else {
            alert("Please type in a placename into the input field")
        }
  }

    return (
        <form onSubmit={submitPlace}>
            <label htmlFor="searchPlace">Search</label>
            <input type="text" id="searchPlace" placeholder="Type in place" value={inputPlace} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    )
}
