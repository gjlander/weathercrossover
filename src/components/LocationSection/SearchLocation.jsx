import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { getCurrentWeather } from "../../lib/weatherApi";

export default function SearchLocation({ setLat, setLon, setSearchValue }) {
    const [localValue, setLocalValue] = useState("");

    function handleChange(e) {
        setLocalValue(e.target.value);
    }

    function submitPlace(e) {
        e.preventDefault();
        setSearchValue(localValue);
        if (localValue) {
            getCurrentWeather(localValue)
                .then((data) => {
                    setLat(data.location.lat);
                    setLon(data.location.lon);
                })
                .catch((error) => console.error(error));
        } else {
            alert("Please type in a placename into the input field");
        }
        setLocalValue("");
    }

    return (
        <form className="flex" onSubmit={submitPlace}>
            {/* <label htmlFor="searchPlace">Search</label> */}
            <TextField
                type="search"
                id="searchPlace"
                placeholder="City..."
                label="Search"
                value={localValue}
                onChange={handleChange}
                sx={{ bgcolor: 'secondary', color:"text.primary", px:1 }}
            />
            <Button variant="contained" size="large" type="submit">
                Search
            </Button>
        </form>
    );
}
