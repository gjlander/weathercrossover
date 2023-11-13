import axios from "axios";

const getCurrentWeather = async (city) => {
    try {
        const { data } = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=74e79b429ed04b2f94190816231311&q=${city}`
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { getCurrentWeather };
