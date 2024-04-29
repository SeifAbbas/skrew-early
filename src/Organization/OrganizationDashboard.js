import * as React from "react";
import {
  useTheme,
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { LineChart } from "@mui/x-charts";

const Chart = () => {
  const theme = useTheme();
  const xAxis = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const totalDonationRequests = Array.from(
    { length: 12 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const fulfilledDonationRequests = totalDonationRequests.map((num) =>
    Math.floor(Math.random() * num)
  );

  return (
    <>
      <div>
        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: xAxis,
            },
          ]}
          series={[
            {
              label: "Total Donation Requests",
              data: totalDonationRequests,
              valueFormatter: (value) =>
                value == null ? "?" : value.toString(),
            },
            {
              label: "Fulfilled Donation Requests",
              data: fulfilledDonationRequests,
              valueFormatter: (value) =>
                value == null ? "NaN" : value.toString(),
            },
          ]}
          height={300}
        />
      </div>
    </>
  );
};

const OrganizationDashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: -8, mb: 4, mx: 8 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item lg={7}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default OrganizationDashboard;
