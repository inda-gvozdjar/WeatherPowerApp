import * as React from "react";
import { generateWeatherData } from "../utils";
import WeatherBox from "./WeatherBox";

function App() {
  console.log(generateWeatherData());
  return (
    <div className="App">
      {generateWeatherData().map((w) => (
        <WeatherBox
          date={w.date}
          temperature={w.temperature}
          weatherType={w.weatherType}
          key={w.temperature}
        />
      ))}
    </div>
  );
}

export default App;
