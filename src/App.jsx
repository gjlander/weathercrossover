import { useState } from "react";
import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";
import TestDisplayMeteo from "./components/TestDisplayMeteo";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {
    const [searchValue, setSearchValue] = useState();

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Header />
                <LocationSection
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TestDisplay searchValue={searchValue} />
                <TestDisplayMeteo searchValue={searchValue} />
                <Weather />
            </ThemeProvider>
        </>
    );
}

export default App;
