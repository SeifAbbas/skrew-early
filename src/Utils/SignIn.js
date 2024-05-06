import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ICONS
import DashboardIcon from "@mui/icons-material/Dashboard";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RateReviewIcon from "@mui/icons-material/RateReview";

import dummyData from "../dummyData.json";

const defaultTheme = createTheme();

export default function SignIn({ setActiveUser, setNavbarContent }) {
  const donorSignInData = dummyData.DonorSignIn;
  const orgSignInData = dummyData.OrganizationSignIn;

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("email") === "a" && data.get("password") === "a") {
      setActiveUser("Admin");
      setNavbarContent([
        {
          text: "Dashboard",
          icon: <DashboardIcon />,
          route: "/Home/Dashboard",
        },
        {
          text: "Donors",
          icon: <VolunteerActivismIcon />,
          route: "/Home/Donors",
        },
        {
          text: "Organizations",
          icon: <BusinessIcon />,
          route: "/Home/Organizations",
        },
        {
          text: "Review Submissions",
          icon: <RateReviewIcon />,
          route: "/Home/ReviewSubmissions",
        },
        {
          text: "Account",
          icon: <AccountCircleIcon />,
          route: "/Home/Account",
        },
        { text: "Logout", icon: <LogoutIcon />, route: "/" },
      ]);
    } else if (
      data.get("email") === orgSignInData.Email &&
      data.get("password") === orgSignInData.Password
    ) {
      setActiveUser("Organization");
      setNavbarContent([
        {
          text: "Dashboard",
          icon: <DashboardIcon />,
          route: "/Home/Dashboard",
        },
        { text: "New Request", icon: <AddIcon />, route: "/Home/NewRequest" },
        {
          text: "My Requests",
          icon: <InventoryIcon />,
          route: "/Home/MyRequests",
        },
        {
          text: "Fulfilled Requests",
          icon: <DoneIcon />,
          route: "/Home/FulfilledRequests",
        },
        {
          text: "Account",
          icon: <AccountCircleIcon />,
          route: "/Home/Account",
        },
        { text: "Logout", icon: <LogoutIcon />, route: "/" },
      ]);
    } else if (
      data.get("email") === donorSignInData.email &&
      data.get("password") === donorSignInData.password
    ) {
      setActiveUser("Donor");
      setNavbarContent([
        {
          text: "Dashboard",
          icon: <DashboardIcon />,
          route: "/Home/Dashboard",
        },
        {
          text: "Search Requests",
          icon: <SearchIcon />,
          route: "/Home/Requests",
        },
        {
          text: "Volunteer Activities",
          icon: <VolunteerActivismIcon />,
          route: "/Home/VolunteerActivity",
        },
        {
          text: "Organizations",
          icon: <BusinessIcon />,
          route: "/Home/Organizations",
        },
        {
          text: "Account",
          icon: <AccountCircleIcon />,
          route: "/Home/Account",
        },
        { text: "Logout", icon: <LogoutIcon />, route: "/" },
      ]);
    } else {
      // Handle invalid credentials
      if (
        !["a", donorSignInData.email, donorSignInData.password].includes(
          data.get("email")
        )
      ) {
        setErrorMsg("Invalid Email");
      } else {
        setErrorMsg("Invalid Password");
      }
      return;
    }

    navigate("/Home/Dashboard");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Grid
          container
          spacing={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Grid item xs={12} sm={5}>
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="logo"
                style={{ width: "100px", height: "auto" }}
              />
              <Typography variant="h5" component="h2">
                Welcome to Fa3el 5eir
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
                We offer ease of communication between donors and organizations
                to facilitate the donation process and helping out those in need
                by fulfilling their requests either through clothes, food, toys,
                medications, and so on ...
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={errorMsg === "Invalid Email"}
                />
                {errorMsg === "Invalid Email" && (
                  <span className="text-red-500">{errorMsg}</span>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={errorMsg === "Invalid Password"}
                />
                {errorMsg === "Invalid Password" && (
                  <>
                    <span className="text-red-500">{errorMsg}</span>
                    <br />
                  </>
                )}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/Register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
