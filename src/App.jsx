import { useState, useEffect } from "react";
import { getForecast } from "./lib/weatherApi";
import { getForecastMeteoByName ,getForecastMeteo, get3DayForecastMeteo } from "./lib/openMeteoApi";
// import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";
import TestDisplayMeteo from "./components/TestDisplayMeteo";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const [searchValue, setSearchValue] = useState();
    const [forecast, setForecast] = useState();
    const [forecastMeteo, setForecastMeteo] = useState();
    const [forecast3DayMeteo, setForecast3DayMeteo] = useState();
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
        getForecastMeteoByName(searchValue)
            //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setForecastMeteo(data))
            .catch((error) => console.error(error));
        getForecastMeteoByName(searchValue,3)
            //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setForecast3DayMeteo(data))
            .catch((error) => console.error(error));
    }, [searchValue]);

    useEffect(() => {
        if (lat && lon) {
            getForecast(`${lat},${lon}`)
                .then((data) => setForecast(data))
                .catch((error) => console.error(error));
            getForecastMeteo(lat,lon)
                .then((data) => setForecastMeteo(data))
                .catch((error) => console.error(error));
            get3DayForecastMeteo(lat,lon,3)
                .then((data) => setForecast3DayMeteo(data))
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
            <TestDisplayMeteo searchValue={searchValue} forecast={forecastMeteo} forecast3Day={forecast3DayMeteo} />
            {/* <Weather /> */}
        </div>
    );
}

export default App;