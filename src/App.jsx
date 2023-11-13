import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";
import TestDisplayMeteo from "./components/TestDisplayMeteo";

function App() {
    return (
        <>
            <LocationSection />
            <div>Sanity check!</div>
            <TestDisplay />
            <TestDisplayMeteo />
            <Weather />
        </>
    );
}

export default App;
