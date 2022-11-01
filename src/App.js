import { LongitudeLatitudeDisplay } from "./components/longtitude";
import { HemisphereDisplay } from "./components/hemisphere";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Geo Locator</h1>
        <LongitudeLatitudeDisplay />
        <HemisphereDisplay />
      </main>
    </div>
  );
}

export default App;
