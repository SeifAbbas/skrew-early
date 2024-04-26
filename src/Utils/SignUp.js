import React, { useEffect } from "react";
import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import dummyData from "../dummyData.json";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignUp({
  activeUser,
  setActiveUser,
  inputFields,
  setInputFields,
}) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleSwitchForms = () => {
    if (activeUser === "Organization") {
      setInputFields(dummyData.donorRegFields);
      setActiveUser("Donor");
    } else {
      setInputFields(dummyData.organizationRegFields);
      setActiveUser("Organization");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Validate form fields
    const errors = {};
    for (let field of data.keys()) {
      if (!data.get(field)) {
        errors[field] = "This field is required";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    navigate("/");
  };

  useEffect(() => {
    setFormErrors({});
  }, [activeUser]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {activeUser === "Donor" ? <AiOutlineHeart /> : <BsBuilding />}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {inputFields.map((field, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  {field.name === "Gender" ? (
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  ) : (
                    <TextField
                      required
                      fullWidth
                      label={field.name}
                      name={field.name}
                      type={field.name === "password" ? "password" : "text"}
                      className="mb-2"
                      error={!!formErrors[field.name]}
                      helperText={formErrors[field.name]}
                    />
                  )}
                </Grid>
              ))}
              ;
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} sm={7}>
                <Button onClick={handleSwitchForms} variant="body2">
                  Are you
                  {activeUser === "Donor" ? " an organization " : " a donor "}?
                  Register here
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
