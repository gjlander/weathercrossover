import { useEffect, useState } from "react";
import { getCurrentWeatherMeteo,getCurrentWeatherMeteoByName} from "../lib/openMeteoApi";

export default function TestDisplayMeteo() {
    const [weather, setWeather] = useState();

    useEffect(() => {
        getCurrentWeatherMeteoByName("Berlin")
        //getCurrentWeatherMeteo(54.3091,13.0818)
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
    }, []);




    function output()
    {
        if(weather)
        {
            return <div>
            {weather.current.temperature_2m}
            <br></br>
            {weather.current.time}
            
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

