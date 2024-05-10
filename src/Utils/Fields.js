import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
} from "@mui/material";

import { styled } from "@mui/system";

const PurpleRadio = styled(Radio)({
  color: "#c51aff",
  "&.Mui-checked": {
    color: "#c51aff",
  },
});

const Fields = ({
  inputFields,
  setInputFields,
  formErrors,
  setShowMap,
  field,
  index,
}) => {
  const handleInputChange = (event, index) => {
    let newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields([...newInputFields]);
  };

  return (
    <Grid item xs={12} sm={6}>
      {field.name === "Gender" ? (
        <FormControl fullWidth>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name={field.name}
            key={index}
            value={inputFields[index].value}
            onChange={(event) => handleInputChange(event, index)}
          >
            <FormControlLabel
              value="female"
              control={<PurpleRadio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<PurpleRadio />}
              label="Male"
            />
          </RadioGroup>
        </FormControl>
      ) : field.name === "Organization Type" ? (
        <FormControl fullWidth>
          <InputLabel>{field.name}</InputLabel>
          <Select
            name="Organization Type"
            key={index}
            value={inputFields[index].value}
            label={field.name}
            onChange={(event) => handleInputChange(event, index)}
          >
            <MenuItem value={"Charity"}>Charity</MenuItem>
            <MenuItem value={"Hospital"}>Hospital</MenuItem>
            <MenuItem value={"Mosque/Church"}>Mosque/Church</MenuItem>
            <MenuItem value={"Orphanage"}>Orphanage</MenuItem>
            <MenuItem value={"Public school"}>Public school</MenuItem>
          </Select>
        </FormControl>
      ) : field.name === "Role" ? (
        <FormControl fullWidth>
          <InputLabel>{field.name}</InputLabel>
          <Select
            name="Role"
            key={index}
            value={inputFields[index].value}
            label={field.name}
            onChange={(event) => handleInputChange(event, index)}
          >
            <MenuItem value={"Regular Donor"}>Regular Donor</MenuItem>
            <MenuItem value={"Doctor"}>Doctor</MenuItem>
            <MenuItem value={"Teacher"}>Teacher</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <TextField
          fullWidth
          label={field.name}
          name={field.name}
          key={index}
          type={field.name === "Password" ? "password" : "text"}
          className="mb-2"
          error={formErrors && !!formErrors[field.name]}
          helperText={formErrors && formErrors[field.name]}
          value={field.value || ""}
          onChange={(event) => handleInputChange(event, index)}
          onFocus={() =>
            setShowMap(
              field.name === "Address" || field.name === "Organization Address"
            )
          }
        />
      )}
    </Grid>
  );
};

export default Fields;
