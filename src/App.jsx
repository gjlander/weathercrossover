import { useState } from "react";
import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";
import TestDisplayMeteo from "./components/TestDisplayMeteo";

function App() {
    const [searchValue, setSearchValue] = useState();
    return (
        <>
            <LocationSection
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TestDisplay searchValue={searchValue} />
            <TestDisplayMeteo searchValue={searchValue} />
            <Weather />
        </>
    );
}

export default App;
