import { Box, Toolbar, Container, Grid, Paper } from "@mui/material";

import dummyData from "../dummyData.json";
import DonorDetailsSubTable from "../Organization/MyRequests/DonorDetailsSubTable";

const AdminDashboard = () => {
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
          {/** DONORS SUBMISSIONS TABLE */}
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
                row={dummyData.FulfilledRequests[3]}
                open={true}
                title={"Review Donor Submissions"}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
