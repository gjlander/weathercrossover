import { LowPriority } from "@mui/icons-material";
import axios from "axios";

export async function getCurrentWeatherMeteo(latitude,longitude){

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

export async function getCurrentWeatherMeteoByName(locationName)
{
    try {
        const { data } = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=10&language=en&format=json`
        );

        const location = data.results[0];
        const weatherData = getCurrentWeatherMeteo(location.latitude,location.longitude)

        return data;
    } catch (error) {
        console.error(error);
    }

}

