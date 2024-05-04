import { Grid, TextField, InputLabel } from "@mui/material";
import Fields from "../Fields";

const SignUpFields = ({
  activeUser,
  inputFields,
  setInputFields,
  formErrors,
  setShowMap,
}) => {
  const val = () => {
    if (activeUser === "Donor") {
      return inputFields.find((field) => field.name === "Role").value;
    } else {
      return inputFields.find((field) => field.name === "Organization Type")
        .value;
    }
  };

  return (
    <Grid container spacing={2}>
      {Array.isArray(inputFields) &&
        inputFields.map((field, index) => (
          <Fields
            inputFields={inputFields}
            setInputFields={setInputFields}
            formErrors={formErrors}
            setShowMap={setShowMap}
            field={field}
            index={index}
          />
        ))}

      {val() !== "Regular Donor" && (
        <Grid item xs={12} sm={6} className="space-y-2">
          <InputLabel>
            {val() === "Doctor"
              ? "Upload copy of medical license"
              : val() === "Teacher"
              ? "Upload copy of school staff ID card"
              : "Upload proof of organization"}
          </InputLabel>
          <TextField name="Documents" type="file" fullWidth />
        </Grid>
      )}
    </Grid>
  );
};

export default SignUpFields;
