import { useState, useEffect } from "react";
import { getForecast } from "./lib/weatherApi";
import {
    get3DayForecastMeteo,
    getCurrentWeatherMeteo,
    getCurrentWeatherMeteoByName,
} from "./lib/openMeteoApi";
// import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";
// import TestDisplayMeteo from "./components/TestDisplayMeteo";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const [searchValue, setSearchValue] = useState();
    const [forecast, setForecast] = useState();
    const [weather, setWeather] = useState();
    const [weather3day, setWeather3Day] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    useEffect(() => {
        if (!searchValue) return;
        getForecast(searchValue)
            .then((data) => setForecast(data))
            .catch((error) => console.error(error));
        getCurrentWeatherMeteoByName(searchValue)
            //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
        getCurrentWeatherMeteoByName(searchValue, 3)
            //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setWeather3Day(data))
            .catch((error) => console.error(error));
    }, [searchValue]);

    useEffect(() => {
        if (lat && lon) {
            console.log(lat, lon);
            getForecast(`${lat},${lon}`)
                .then((data) => setForecast(data))
                .catch((error) => console.error(error));
            getCurrentWeatherMeteo(lat, lon)
                .then((data) => setWeather(data))
                .catch((error) => console.error(error));
            get3DayForecastMeteo(lat, lon, 3)
                //getCurrentWeatherMeteo(54.3091,13.0818)
                .then((data) => setWeather3Day(data))
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
        <ThemeProvider theme={darkTheme}>
            <Header />
            <div className="min-h-screen p-8">
                <LocationSection
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TestDisplay
                    searchValue={searchValue}
                    forecast={forecast}
                    weather={weather}
                    weather3day={weather3day}
                />
                {/* <TestDisplayMeteo searchValue={searchValue} /> */}
                {/* <Weather /> */}
            </div>
        </ThemeProvider>
    );
}

export default App;
