import * as React from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import { LineChart, PieChart } from "@mui/x-charts";

const Chart = () => {
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
          height={325}
        />
      </div>
    </>
  );
};

const CategoryChart = () => {
  return (
    <>
    <Typography variant="h6" component="div" align="center">
    Donation Request Categories
    </Typography>  
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: 10, label: 'Food' },
          { id: 1, value: 20, label: 'Medical Supplies' },
          { id: 2, value: 45, label: 'Medication' },
          { id: 3, value: 25, label: 'Clothes' },
        ],
      },
    ]}
    height={300}
  />
  </>
)
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
          <Container maxWidth="xl" sx={{ mt: -8, mb: 4, mx: 15 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item lg={6} md={12}>
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
              <Grid item lg={5} md={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CategoryChart/>
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
