import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { AiOutlineHeart } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

import dummyData from "../../dummyData.json";
import SignUpFields from "./SignUpFields";
import SimpleMap from "../Maps";

const defaultTheme = createTheme();

export default function SignUp({
  activeUser,
  setActiveUser,
  inputFields,
  setInputFields,
}) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [showMap, setShowMap] = useState(false);

  const handleSwitchForms = () => {
    setShowMap(false);
    setFormErrors({});

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="flex items-center flex-col space-x-0 xl:flex-row xl:space-x-[-430px]">
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
              <SignUpFields
                activeUser={activeUser}
                inputFields={inputFields}
                setInputFields={setInputFields}
                formErrors={formErrors}
                setShowMap={setShowMap}
              />

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
                    {activeUser === "Donor" ? " an organization " : " a donor "}
                    ? Register here
                  </Button>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Link to="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        {showMap && (
          <SimpleMap
            activeUser={activeUser}
            inputFields={inputFields}
            setInputFields={setInputFields}
          />
        )}
      </div>
    </ThemeProvider>
  );
}
