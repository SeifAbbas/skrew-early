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
    console.table(newInputFields);
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
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
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
          required
          fullWidth
          label={field.name}
          name={field.name}
          key={index}
          type={field.name === "Password" ? "password" : "text"}
          className="mb-2"
          error={!!formErrors[field.name]}
          helperText={formErrors[field.name]}
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
