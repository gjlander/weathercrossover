import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ForecastCard from "./ForecastCard";

export default function ForecastList({ forecastDays }) {
    console.log(forecastDays);
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <List>
                {forecastDays &&
                    forecastDays.map((day, i) => {
                        return (
                            <ListItem key={crypto.randomUUID()}>
                                <ForecastCard {...day} i={i} />
                            </ListItem>
                        );
                    })}
            </List>
        </Box>
    );
}
