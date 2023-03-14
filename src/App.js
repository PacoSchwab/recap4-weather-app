import "./App.css";
import EntryForm from "./components/EntryForm";
import { useState } from "react";
import { uid } from "uid";
import EntriesSection from "./components/EntriesSection";

// Structure: WeatherDisplay, WeatherIcon, EntriesSection, Entries, EntryForm, GoodWeatherChechbox, Button

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivityEntry) {
    setActivities([...activities, { id: uid(), ...newActivityEntry }]);
  }

  return (
    <main className="app__main">
      <EntriesSection activities={activities} />
      <br />
      <EntryForm onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
