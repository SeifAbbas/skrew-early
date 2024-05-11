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
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

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
          text: "Organizations",
          icon: <BusinessIcon />,
          route: "/Home/Organizations",
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
        ![
          "a",
          orgSignInData.Email,
          donorSignInData.email,
          donorSignInData.password,
        ].includes(data.get("email"))
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
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container
          style={{
            background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", // Gradient background
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#000", // Added black color
          }}
        >
          <style>
            {`body { 
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
            margin: 0;
            height: 100%;
            overflow: hidden;
            a:hover {
              text-decoration: underline;
            }
          }`}
          </style>
          <CssBaseline />
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            object-fit="contain"
            style={{
              width: "150px",
              height: "120px",
              marginBottom: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            style={{
              marginBottom: "15px",
              color: "#333",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "40px",
              lineHeight: "1.6",
              fontFamily: "Funny Munkey, cursive",
            }}
          >
            Welcome to Fa3el 5eir
          </Typography>
          <Typography
            style={{
              margin: "0 20px",
              fontSize: "20px",
              lineHeight: "1.6",
              textAlign: "center",
              color: "#333",
              fontFamily: "Funny Munkey, cursive",
            }}
          >
            We offer ease of communication between donors and organizations to
            facilitate the donation process and helping out those in need by
            fulfilling their requests either through clothes, food, toys,
            medications, and so on ...
          </Typography>

          <Paper
            style={{
              padding: "20px",
              margin: "20px auto 30px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              maxWidth: "400px", // Reduced max-width for the sign-in section
              backgroundColor: "#f4f4f4",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ textAlign: "center" }}
            >
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
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#c51aff",
                  color: "#fff",
                }} // Changed button color & text color
                onMouseOver={(e) => (
                  (e.target.style.opacity = "0.8"),
                  (e.target.style.backgroundColor = "#4CAB50")
                )} // Added hover effect
                onMouseOut={(e) => (
                  (e.target.style.opacity = "1"),
                  (e.target.style.backgroundColor = "#c51aff")
                )} // Reset hover effect
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    <span style={{ color: "blue" }}>Forgot password?</span>
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ display: "inline" }}>
                    Don't have an account?{" "}
                  </Typography>
                  <Link
                    to="/Register"
                    variant="body2"
                    underline="none"
                    style={{
                      display: "inline",
                      color: "blue",
                    }}
                  >
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}
