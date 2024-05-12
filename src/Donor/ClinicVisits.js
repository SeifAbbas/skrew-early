import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleMap from "../Utils/Maps";
import dummyData from "../dummyData.json";

const ClinicVisits = ({setAlertState}) => {
  const [inputFields, setInputFields] = useState(dummyData.donorRegFields);
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [cases, setCases] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState("");
  const [visitDuration, setVisitDuration] = useState("");
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
    if (!visitDuration.trim()|| !/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(visitDuration)) {
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
      <input
        name="Address"
        value={inputFields[5].value}
        type="text"
        placeholder="Address"
        onChange={(event) => handleAddressChange(event)}
        style={{ marginTop: "30px",
          marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}
      />

      <input type="text" placeholder="Area"         
      style={{ marginBottom: "10px", padding: "8px", border: errors.area ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
 />
      {errors.area && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input type="text" placeholder="Governorate"  style={{ marginBottom: "10px", padding: "8px",  border: errors.governorate ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }} />
      {errors.governorate && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input type="text" placeholder="Specialty"  style={{ marginBottom: "10px", padding: "8px",
          border: errors.specialty ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>
      {errors.specialty && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input type="number" placeholder="Number of Cases" min={1} style={{ marginBottom: "10px", padding: "8px",
          border: errors.cases ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>
      {errors.cases && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input type="date" placeholder="Date"  style={{ marginBottom: "10px", padding: "8px",
          border: errors.date ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>
      {errors.date && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{isNaN(new Date(date)) ? "Invalid date format" : "Field is required"}</div>}

      <input type="time" placeholder="Visit Duration"  style={{ marginBottom: "10px", padding: "8px",
          border: errors.visitDuration ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>
      {errors.visitDuration && <div style={{ color: "red", fontSize: "12px", marginTop: "5px", marginBottom: "30px" }}>{!/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(visitDuration) ? "Invalid time format (HH:MM AM/PM)" : "Field is required"}</div>}

      <SimpleMap
        activeUser="Donor"
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <button onClick={() => navigate(-1)}>Back</button>

      <button onClick={handleClick}>Submit</button>

    </div>
  );
};

export default ClinicVisits;
