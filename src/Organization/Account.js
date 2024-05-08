import { useState } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

import dummyData from "../dummyData.json";
import Fields from "../Utils/Fields";
import SimpleMap from "../Utils/Maps";

const Account = ({ setAlertState }) => {
  const [formErrors, setFormErrors] = useState({});
  const [showMap, setShowMap] = useState(false);

  // fill all fields with User's current information
  const [accountDetails, setAccountDetails] = useState(
    dummyData.organizationRegFields.map((field) => {
      if (dummyData.OrganizationSignIn.hasOwnProperty(field.name)) {
        return { ...field, value: dummyData.OrganizationSignIn[field.name] };
      }
      return field;
    })
  );

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

    setAlertState("Updated Profile Info");
  };

  return (
    <>
      <Box
        component="form"
        onClick={handleSubmit}
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
                formErrors={formErrors}
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
              activeUser={"Organization"}
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
