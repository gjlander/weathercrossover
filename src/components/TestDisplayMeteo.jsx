import { useEffect, useState } from "react";
import { getCurrentWeatherMeteo,getCurrentWeatherMeteoByName} from "../lib/openMeteoApi";

export default function TestDisplayMeteo({searchValue,forecast}) {
    const [weather, setWeather] = useState();

    useEffect(() => {
        getCurrentWeatherMeteoByName(searchValue)
        //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
    }, [searchValue]);




    function output()
    {
        if(forecast)
        {
            return <div>
            {forecast.current.temperature_2m}
            <br></br>
            {forecast.current.time}
            
            </div>

        }
        else
        {
            return <div>Nothing</div>
        }

    }
    console.log(weather);
    return (
        <>
            <div>
                "MeteoData"
                 {output()}

            </div>
        </>
    );
}

