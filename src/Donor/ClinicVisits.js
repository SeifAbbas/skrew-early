import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleMap from "../Utils/Maps";
import dummyData from "../dummyData.json";
import { TextField } from "@mui/material";

const ClinicVisits = ({ setAlertState }) => {
  const [inputFields, setInputFields] = useState(dummyData.donorRegFields);
  const navigate = useNavigate();
  const [area] = useState("");
  const [governorate] = useState("");
  const [cases] = useState("");
  const [specialty] = useState("");
  const [date] = useState("");
  const [visitDuration] = useState("");
  const [errors, setErrors] = useState({
    area: false,
    governorate: false,
    specialty: false,
    cases: false,
    date: false,
    visitDuration: false,
  });

  // 5 is the index of field with name "Address" within dummyData.donorRegFields
  const handleAddressChange = (event) => {
    let newInputFields = [...inputFields];
    newInputFields[5].value = event.target.value;
    setInputFields([...newInputFields]);
  };
  const handleClick = () => {
    const newErrors = {};

    // Validate each field
    if (!area.trim()) {
      newErrors.area = true;
    }
    if (!governorate.trim()) {
      newErrors.governorate = true;
    }

    if (!cases.trim() || cases <= 0) {
      newErrors.cases = true;
    }
    if (!specialty.trim()) {
      newErrors.specialty = true;
    }
    if (!date.trim() || isNaN(new Date(date))) {
      newErrors.date = true;
    }
    if (
      !visitDuration.trim() ||
      !/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(visitDuration)
    ) {
      newErrors.visitDuration = true;
    }

    // Set errors and display alert if any
    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
      setAlertState("Rejected");
    } else {
      // Submit form if no errors
      setAlertState("Submitted Clinic Details successfully");
      navigate("/Home/Dashboard");
    }
  };

  return (
    <div className="clinic-visits">
      <TextField
        name="Address"
        value={inputFields[5].value}
        label="Address"
        onChange={(event) => handleAddressChange(event)}
        style={{
          marginTop: "30px",
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />

      <TextField
        type="text"
        label="Area"
        error={errors.area}
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />
      {errors.area && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="text"
        label="Governorate"
        error={errors.governorate}
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />
      {errors.governorate && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="text"
        label="Specialty"
        error={errors.specialty}
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />
      {errors.specialty && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="number"
        label="Number of Cases"
        error={errors.cases}
        min={1}
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />
      {errors.cases && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <h5>Visit date</h5>
      <TextField
        type="date"
        error={errors.date}
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />
      {errors.date && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {isNaN(new Date(date)) ? "Invalid date format" : "Field is required"}
        </div>
      )}

      <h5>Visit time</h5>
      <TextField
        type="time"
        error={errors.visitDuration}
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          width: "30%",
        }}
        color="primary"
      />
      {errors.visitDuration && (
        <div
          style={{
            color: "red",
            fontSize: "12px",
            marginTop: "5px",
            marginBottom: "30px",
          }}
        >
          {!/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(visitDuration)
            ? "Invalid time format (HH:MM AM/PM)"
            : "Field is required"}
        </div>
      )}

      <SimpleMap
        activeUser="Donor"
        inputFields={inputFields}
        setInputFields={setInputFields}
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default ClinicVisits;
