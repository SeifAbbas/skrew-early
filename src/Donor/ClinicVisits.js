import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleMap from "../Utils/Maps";
import dummyData from "../dummyData.json";

const ClinicVisits = ({setAlertState}) => {
  const [inputFields, setInputFields] = useState(dummyData.donorRegFields);
  const navigate = useNavigate();

  // 5 is the index of field with name "Address" within dummyData.donorRegFields
  const handleAddressChange = (event) => {
    let newInputFields = [...inputFields];
    newInputFields[5].value = event.target.value;
    setInputFields([...newInputFields]);
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

      <input type="text" placeholder="Area"  style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }} />

      <input type="text" placeholder="Governorate"  style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }} />

      <input type="text" placeholder="Specialty"  style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="number" placeholder="Number of cases"  style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="date" placeholder="Date"  style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="time" placeholder=" Time"  style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <SimpleMap
        activeUser="Donor"
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <button onClick={() => navigate(-1)}>Back</button>

      <Link to="/Home/Dashboard" className="mb-5">
      <button onClick={() => setAlertState("Submitted Clinic Details successfully")}>Submit</button>
      </Link>

    </div>
  );
};

export default ClinicVisits;
