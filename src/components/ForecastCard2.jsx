import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const days = [
    "Tomorrow",
    "The Day After Tomorrow",
    "And the day after that...",
];

export default function ForecastCard2({ day, i }) {
    // console.log(day.mintemp_c);
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                {" "}
                <CardContent>
                    <Typography
                        // sx={{ fontSize: 14 }}
                        // color="text.secondary"
                        gutterBottom
                    >
                        {days[i]}
                    </Typography>
                    <Divider />

                    <Typography variant="body2">
                        High: {day.maxtemp_c} C
                    </Typography>
                    <Typography variant="body2">
                        Low: {day.mintemp_c} C
                    </Typography>
                    <Typography variant="body2">
                        {day.daily_chance_of_rain}% chance of rain
                    </Typography>
                    <img src={day.condition.icon} alt={day.condition.text} />
                </CardContent>
            </Card>
        </Box>
    );
}
