import { useEffect, useState } from "react";
import { getForecast } from "../lib/weatherApi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import { getCurrentWeatherMeteo,getCurrentWeatherMeteoByName} from "../lib/openMeteoApi";

function TestDisplay({ searchValue }) {
  // const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    // getCurrentWeather("Hamburg")
    //     .then((data) => setCurrentWeather(data))
    //     .catch((error) => console.error(error));
    getForecast(searchValue)
      .then((data) => setForecast(data))
      .catch((error) => console.error(error));

      getCurrentWeatherMeteoByName(searchValue)
      //getCurrentWeatherMeteo(54.3091,13.0818)
          .then((data) => setWeather(data))
          .catch((error) => console.error(error));
  }, [searchValue]);
  // console.log(currentWeather);
  console.log(forecast);
  console.log(weather);

  
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

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
      {forecast && weather && (
        <div>
          <div className="cardContainer">
            <Card sx={{ minWidth: 380 }}>
              <CardContent className="dataContainer">
                <div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Data from: Weather API
                  </Typography>
                  <Typography variant="h5" component="div">
                    {forecast.location.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {forecast.location.country}
                  </Typography>
                  <Typography variant="body2">
                    {forecast.forecast.forecastday[0].date}
                  </Typography>
                  <Typography variant="body2">
                    Temperature: {forecast.current.temp_c} {weather.current_units.temperature_2m}
                  </Typography>
                  <Typography variant="body2">
                  Condition: {forecast.current.condition.text}
                  </Typography>
                </div>
                <div className="dataContainerImg">
                  <img src={forecast.current.condition.icon} />
                </div>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 380 }}>
              <CardContent className="dataContainer">
                <div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary" 
                    gutterBottom
                  >
                  Data from: Open Meteo API
                  </Typography>
                  <Typography variant="h5" component="div">
                  {forecast.location.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {forecast.location.country}
                  </Typography>
                  <Typography variant="body2">
                    On: {forecast.current.last_updated}
                  </Typography>
                  <Typography variant="body2">  Temperature: {weather.current.temperature_2m} {weather.current_units.temperature_2m}</Typography>
                  <Typography variant="body2">Condition: {forecast.current.condition.text}</Typography>
                </div>
                <div className="dataContainerImg">
                  <img src={forecast.current.condition.icon} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="graphContainer">
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Graph
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio sequi dignissimos non, earum maxime nesciunt
                    animi adipisci eos quisquam eum reiciendis ut quasi dolorum
                    doloremque, amet veritatis. Temporibus, aut voluptatem!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  View More
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Graph
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio sequi dignissimos non, earum maxime nesciunt
                    animi adipisci eos quisquam eum reiciendis ut quasi dolorum
                    doloremque, amet veritatis. Temporibus, aut voluptatem!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  View More
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default TestDisplay;
