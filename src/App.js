import "./App.css";
import EntryForm from "./components/EntryForm";
import { useState } from "react";

// Structure: WeatherDisplay, WeatherIcon, EntriesSection, Entries, EntryForm, GoodWeatherChechbox, Button

function App() {
  const [name, setName] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(false);

  return (
    <main className="app__main">
      <EntryForm />
    </main>
  );
}

export default App;
