import {
  Box,
  Toolbar,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import dummyData from "../dummyData.json";
import DonorDetailsSubTable from "../Organization/MyRequests/DonorDetailsSubTable";
import StatisticsCard from "./StatisticsCard";
import { useState } from "react";

const AdminDashboard = ({ setAlertState }) => {
  const [row, setRow] = useState(dummyData.FulfilledRequests[3]);
  const [orgRow, setOrgRow] = useState({
    Donor: Array(4).fill(dummyData.OrganizationSignIn),
  });
  const [donorRow, setDonorRow] = useState(dummyData.FulfilledRequests[3]);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePassword = (event) => {
    event.preventDefault();
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      alert("Please fill out all fields.");
      return;
    }

    setAlertState("Changed password successfully !");
  };

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
        <Grid container spacing={2} justifyContent="center">
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

          {/** DELETE DONOR */}
          <Grid item lg={7} md={5} sx={{ p: 2 }}>
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
                row={donorRow}
                setRow={setDonorRow}
                open={true}
                title={"View Donors"}
                isAdmin={true}
                isDeleteOnly={true}
                setAlertState={setAlertState}
              />
            </Paper>
          </Grid>

          {/** CHANGE PASSWORD */}
          <Grid item lg={4} md={4} sx={{ p: 2 }}>
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
              <Typography variant="h5" sx={{ marginBottom: "20px" }}>
                Change Password
              </Typography>
              <TextField
                required
                fullWidth
                label="Old Password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                required
                fullWidth
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                required
                fullWidth
                label="Confirm New Password"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                sx={{ marginBottom: "20px" }}
              />
              <Button
                type="submit"
                onClick={handleChangePassword}
                variant="contained"
              >
                Change
              </Button>
            </Paper>
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
                setAlertState={setAlertState}
              />
            </Paper>
          </Grid>

          {/** ORGANIZATION SUBMISSIONS TABLE */}
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
                row={orgRow}
                setRow={setOrgRow}
                open={true}
                title={"Review Organization Submissions"}
                isAdmin={true}
                setAlertState={setAlertState}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
