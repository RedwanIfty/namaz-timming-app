import React, { useState } from "react";
import PrayerTimes from "./components/PrayerTimes";
import CityInput from "./components/CityInput";
import { Container } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [city, setCity] = useState("Dhaka"); // Default city

  return (
    <Container>
      {/* City input field to change the city */}
      <CityInput city={city} setCity={setCity} />

      {/* PrayerTimes component fetching data based on city */}
      <PrayerTimes city={city} />
    </Container>
  );
}

export default App;
