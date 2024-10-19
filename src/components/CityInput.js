import React from "react";
import { TextField, Grid } from "@mui/material";

const CityInput = ({ city, setCity }) => {
  const handleInputChange = (e) => {
    setCity(e.target.value); // Update the city state
  };

  return (
    <Grid container spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={12}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          value={city}
          onChange={handleInputChange} // Trigger city update on input change
        />
      </Grid>
    </Grid>
  );
};

export default CityInput;
