import { LowPriority } from "@mui/icons-material";
import axios from "axios";

export async function getForecastMeteo(latitude,longitude){

    //console.log("Call1DayInside", latitude, longitude)
    //const baseURL =  "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json";
    //const base =  "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json";

    try {
        const { data } = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=1&current=temperature_2m`
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export async function getForecastMeteoByName(locationName, days)
{
    try {
        const { data } = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=10&language=en&format=json`
        );
 
        if(data.results)
        {
            const location = data.results[0];
            if(days)
            {   
                //console.log("Call3Day", latitude, longitude,days)
                const weatherData = get3DayForecastMeteo(location.latitude,location.longitude,days)
                
                return weatherData;
            }
            else{
                //console.log("Call1Day", latitude, longitude)
                const weatherData = getForecastMeteo(location.latitude,location.longitude)
                return weatherData;
            }
        }
        else
        {
            throw new Error('No Location found');
        }

    } catch (error) {
        console.error(error);
    }

}

export async function get3DayForecastMeteo(latitude, longitude,days)
{

    //console.log("Call3DayInside", latitude, longitude,days)
    try {
        const { data } = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max&forecast_days=${days}`
        );
        return data;
    } catch (error) {
        console.error(error);
    }
}

