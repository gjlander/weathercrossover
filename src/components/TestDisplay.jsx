import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../lib/weatherApi";

function TestDisplay() {
    const [currentWeather, setCurrentWeather] = useState();
    const [forecast, setForecast] = useState();
    useEffect(() => {
        getCurrentWeather("Hamburg")
            .then((data) => setCurrentWeather(data))
            .catch((error) => console.error(error));
        getForecast("Hamburg")
            .then((data) => setForecast(data))
            .catch((error) => console.error(error));
    }, []);
    console.log(currentWeather);
    console.log(forecast);
    return (
        <>
            {currentWeather && (
                <div>
                    <p>{currentWeather.location.name}</p>
                    <p>{currentWeather.current.temp_c}</p>
                    <p>{currentWeather.current.condition.text}</p>
                    <img
                        alt="weather icon"
                        src={currentWeather.current.condition.icon}
                    />
                    <p></p>
                </div>
            )}
            {forecast && (
                <div>
                    <p>{forecast.location.name}</p>
                    <p>{forecast.current.temp_c}</p>
                    <p>{forecast.current.condition.text}</p>
                    <img
                        alt="weather icon"
                        src={forecast.current.condition.icon}
                    />
                    <p></p>
                </div>
            )}
        </>
    );
}

export default TestDisplay;
