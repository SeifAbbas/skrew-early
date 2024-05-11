import { useState } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

import dummyData from "../dummyData.json";
import Fields from "../Utils/Fields";
import SimpleMap from "../Utils/Maps";

const Account = ({ setAlertState }) => {
  const [showMap, setShowMap] = useState(false);

  // fill all fields with User's current information
  const [accountDetails, setAccountDetails] = useState(
    dummyData.donorRegFields.map((field) => {
      if (
        field.name === "Contact Number" &&
        dummyData.DonorAccount.hasOwnProperty("Mobile")
      ) {
        return { ...field, value: dummyData.DonorAccount["Mobile"] };
      } 
      else if (dummyData.DonorAccount.hasOwnProperty(field.name)) {
        return { ...field, value: dummyData.DonorAccount[field.name] };
      }
      return field;
    })
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setAlertState("Updated Profile Info");
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" style={{ marginBottom: "40px" }}>
          Account Details
        </Typography>
        <Paper
          sx={{
            p: 4,
            width: "900px",
          }}
        >
          <Grid container spacing={2}>
            {accountDetails.map((field, index) => (
              <Fields
                inputFields={accountDetails}
                setInputFields={setAccountDetails}
                setShowMap={setShowMap}
                field={field}
                index={index}
              />
            ))}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: "10px" }}
            >
              Update
            </Button>
          </Grid>
        </Paper>

        <div className="mt-10">
          {showMap && (
            <SimpleMap
              activeUser={"Donor"}
              inputFields={accountDetails}
              setInputFields={setAccountDetails}
            />
          )}
        </div>
      </Box>
    </>
  );
};

export default Account;
