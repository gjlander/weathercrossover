import Weather from "./components/Data/Weather";
import "./styles.css";
import LocationSection from "./components/LocationSection/LocationSection";
import TestDisplay from "./components/TestDisplay";

function App() {
    return (
        <>
            <LocationSection />
            <div>Sanity check!</div>
            <TestDisplay />
            <Weather />
        </>
    );
}

export default App;
