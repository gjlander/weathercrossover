import { useEffect, useState } from "react";
import { getForecastMeteo,getForecastMeteoByName} from "../lib/openMeteoApi";

export default function TestDisplayMeteo({searchValue,forecast,forecast3Day}) {
    const [weather, setWeather] = useState();

    /*useEffect(() => {
        getForecastMeteoByName(searchValue)
        //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
    }, [searchValue]);*/




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


    console.log("3Day:", forecast3Day)
    console.log("Forecast:", forecast);
    return (
        <>
            <div>
                "MeteoData"
                 {output()}

            </div>
        </>
    );
}

