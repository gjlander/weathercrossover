import { useEffect, useState } from "react";
import { getForecast } from "../lib/weatherApi";

function TestDisplay({ searchValue }) {
    // const [currentWeather, setCurrentWeather] = useState();
    const [forecast, setForecast] = useState();
    useEffect(() => {
        // getCurrentWeather("Hamburg")
        //     .then((data) => setCurrentWeather(data))
        //     .catch((error) => console.error(error));
        getForecast(searchValue)
            .then((data) => setForecast(data))
            .catch((error) => console.error(error));
    }, [searchValue]);
    // console.log(currentWeather);
    console.log(forecast);
    return (
        <>
            {/* {currentWeather && (
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
            )} */}
            {forecast && (
                <div>
                    <p>{forecast.location.name}</p>
                    <p>{forecast.current.temp_c} C</p>
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
