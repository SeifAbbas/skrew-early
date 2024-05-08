import { Box, Toolbar, Container, Grid, Paper } from "@mui/material";

import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import dummyData from "../dummyData.json";
import DonorDetailsSubTable from "../Organization/MyRequests/DonorDetailsSubTable";
import StatisticsCard from "./StatisticsCard";
import { useState } from "react";

const AdminDashboard = () => {
  const [row, setRow] = useState(dummyData.FulfilledRequests[3]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "91vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="xl" sx={{ mb: 4 }}>
        <Grid container spacing={2} justifyContent={"center"}>
          {/** DONORS STATISTICS */}
          <Grid item lg={2} md={3} sx={{ p: 2 }}>
            <StatisticsCard
              diff={20}
              trend="up"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                borderRadius: "25px",
              }}
              value="105"
              text="Total Donors"
              icon={<GroupIcon sx={{ fontSize: "27px" }} />}
              backgroundColor="#2196F3"
            />
          </Grid>

          {/** ORGANIZATION STATISTICS */}
          <Grid item lg={3} md={4} sx={{ p: 2 }}>
            <StatisticsCard
              diff={10}
              trend="down"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                borderRadius: "25px",
              }}
              value="14"
              text="Total Organizations"
              icon={<BusinessIcon sx={{ fontSize: "24px" }} />}
              backgroundColor="#2196F3"
            />
          </Grid>

          {/** DONATIONS STATISTICS */}
          <Grid item lg={2} md={3} sx={{ p: 2 }}>
            <StatisticsCard
              diff={35}
              trend="up"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                borderRadius: "25px",
              }}
              value="404"
              text="Donations Made"
              icon={<VolunteerActivismIcon sx={{ fontSize: "24px" }} />}
              backgroundColor="#F44336"
            />
          </Grid>

          {/** DONORS SUBMISSIONS TABLE */}
          <Grid item lg={7} md={9} sm={12} sx={{ p: 2 }}>
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
                row={row}
                setRow={setRow}
                open={true}
                title={"Review Donor Submissions"}
                isAdmin={true}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
