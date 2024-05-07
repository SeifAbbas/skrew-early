import * as React from "react";
import {
  Box,
  Toolbar,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { LineChart, PieChart } from "@mui/x-charts";
import DonorDetailsSubTable from "./MyRequests/DonorDetailsSubTable";
import dummyData from "../dummyData.json";

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
              { id: 0, value: 10, label: "Food" },
              { id: 1, value: 20, label: "Medical Supplies" },
              { id: 2, value: 45, label: "Medication" },
              { id: 3, value: 25, label: "Clothes" },
            ],
          },
        ]}
        height={300}
      />
    </>
  );
};

const OrganizationDashboard = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="xl" sx={{ mb: 4 }}>
        <Grid container spacing={2} justifyContent={"center"}>
          {/** LINE CHART */}
          <Grid item lg={6} md={12} sx={{ p: 2 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: "25px",
              }}
            >
              <Chart />
            </Paper>
          </Grid>

          {/** PIE CHART */}
          <Grid item lg={5} md={12} sx={{ p: 2 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: "25px",
              }}
            >
              <CategoryChart />
            </Paper>
          </Grid>

          {/** TOP DONORS TABLE */}
          <Grid item lg={6} md={12} sx={{ p: 2 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                borderRadius: "25px",
              }}
            >
              <DonorDetailsSubTable
                row={dummyData.FulfilledRequests[4]}
                open={true}
                title={"Top Contributing Donors"}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrganizationDashboard;
