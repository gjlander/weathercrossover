import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";

export default function Weather() {
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
      <div className="cardContainer">
        <Card sx={{ minWidth: 380 }}>
          <CardContent className="dataContainer">
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                textAlign={"center"}
              >
                Weather API
              </Typography>
              <Typography variant="h5" component="div">
                City
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Country
              </Typography>

              <Typography variant="body2">Data 1</Typography>
              <Typography variant="body2">Data 2</Typography>
              <Typography variant="body2">Data 3</Typography>
            </div>
            <div className="dataContainerImg">
              <img src="https://img.freepik.com/premium-photo/3d-cloudy-sun-rain-icon-know-weather-application-web_494516-2102.jpg" />
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
                textAlign={"center"}
              >
                Weather API
              </Typography>
              <Typography variant="h5" component="div">
                City
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Country
              </Typography>

              <Typography variant="body2">Data 1</Typography>
              <Typography variant="body2">Data 2</Typography>
              <Typography variant="body2">Data 3</Typography>
            </div>
            <div className="dataContainerImg">
              <img src="https://img.freepik.com/premium-photo/3d-cloudy-sun-rain-icon-know-weather-application-web_494516-2102.jpg" />
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
                Distinctio sequi dignissimos non, earum maxime nesciunt animi
                adipisci eos quisquam eum reiciendis ut quasi dolorum
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
                Distinctio sequi dignissimos non, earum maxime nesciunt animi
                adipisci eos quisquam eum reiciendis ut quasi dolorum
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
    </>
  );
}
