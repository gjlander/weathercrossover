import { useEffect, useState } from "react";
import { getCurrentWeather } from "../lib/weatherApi";

function TestDisplay() {
    const [currentWeather, setCurrentWeather] = useState();
    useEffect(() => {
        getCurrentWeather("Hamburg")
            .then((data) => setCurrentWeather(data))
            .catch((error) => console.error(error));
    }, []);
    console.log(currentWeather);
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
        </>
    );
}

export default TestDisplay;
