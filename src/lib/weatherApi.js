import axios from "axios";

const getCurrentWeather = async (city) => {
    try {
        const { data } = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=74e79b429ed04b2f94190816231311&q=${city}`
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getForecast = async (city) => {
    try {
        const { data } = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=74e79b429ed04b2f94190816231311&q=${city}&days=3`
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { getCurrentWeather, getForecast };
