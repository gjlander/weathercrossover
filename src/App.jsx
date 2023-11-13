import { useState, useEffect } from "react";
import { getForecast } from "./lib/weatherApi";
// import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";
import TestDisplayMeteo from "./components/TestDisplayMeteo";

function App() {
    const [searchValue, setSearchValue] = useState();
    const [forecast, setForecast] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    useEffect(() => {
        if (!searchValue) return;
        // getCurrentWeather("Hamburg")
        //     .then((data) => setCurrentWeather(data))
        //     .catch((error) => console.error(error));
        getForecast(searchValue)
            .then((data) => setForecast(data))
            .catch((error) => console.error(error));
    }, [searchValue]);

    useEffect(() => {
        if (lat && lon) {
            getForecast(`${lat},${lon}`)
                .then((data) => setForecast(data))
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
    return (
        <div className="min-h-screen p-8">
            <LocationSection
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TestDisplay searchValue={searchValue} forecast={forecast} />
            {/* <TestDisplayMeteo searchValue={searchValue} /> */}
            {/* <Weather /> */}
        </div>
    );
}

export default App;
