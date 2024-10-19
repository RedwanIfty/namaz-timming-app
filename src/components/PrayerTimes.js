import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { convertTo12HourFormat } from "../utils";
// import { convertTo12HourFormat } from './utils'; // Import the helper function

const PrayerTimes = ({ city }) => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        const response = await axios.get(
          `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Bangladesh`
        );
        setPrayerTimes(response.data.data.timings);
      } catch (error) {
        console.error("Error fetching prayer times", error);
      }
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchPrayerTimes();
  }, [city]); // Refetch data every time 'city' changes

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>Prayer Times for {city}</Typography>
      <div className="row">
        {Object.keys(prayerTimes).map((key, index) => (
          <div className="col-md-4" key={index}>
            <Card style={{ marginBottom: "1rem" }}>
              <CardContent>
                <Typography variant="h6">{key}</Typography>
                {/* Use the imported helper function to format time */}
                <Typography>{convertTo12HourFormat(prayerTimes[key])}</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PrayerTimes;
