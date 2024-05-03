import {
  Select,
  MenuItem,
  Typography,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Box,
  Toolbar,
  Paper,
  Button,
} from "@mui/material";
import { useState } from "react";

import dummyData from "../dummyData.json";

const NewRequest = () => {
  const [formFields, setFormFields] = useState(
    dummyData.organizationNewRequest
  );

  const [chosenCategory, setChosenCategory] = useState("clothes");

  const handleInputChange = (event, index) => {
    setFormFields((prevState) => {
      const newFormFields = { ...prevState };
      const categoryFields = newFormFields[chosenCategory];
      categoryFields[index].value = event.target.value;
      return newFormFields;
    });
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" style={{ marginBottom: "40px" }}>
        Donation Request
      </Typography>

      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={chosenCategory}
          onChange={(event) => setChosenCategory(event.target.value)}
        >
          <MenuItem value={"clothes"}>Clothes</MenuItem>
          <MenuItem value={"toys"}>Toys</MenuItem>
          <MenuItem value={"food"}>Food</MenuItem>
          <MenuItem value={"medicalSupplies"}>Medical Supplies</MenuItem>
          <MenuItem value={"schoolSupplies"}>School Supplies</MenuItem>
          <MenuItem value={"bloodDonations"}>Blood Donations</MenuItem>
        </Select>
      </FormControl>

      <Box
        component="form"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}
      >
        <Toolbar />
        <Paper
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {formFields[chosenCategory].map((field, index) => (
            <TextField
              required
              label={field.name}
              name={field.value}
              className="sm:w-[400px] w-[200px]"
              style={{ marginBottom: "20px" }}
              key={index}
              value={formFields[chosenCategory][index].value}
              onChange={(event) => handleInputChange(event, index)}
            />
          ))}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Post
          </Button>
        </Paper>
      </Box>
    </Grid>
  );
};

export default NewRequest;
