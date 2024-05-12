import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleMap from "../Utils/Maps";
import dummyData from "../dummyData.json";

const ClinicVisits = () => {
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
        style={{ marginBottom: "10px" }}
      />

      <input type="text" placeholder="Area" />

      <input type="text" placeholder="Governorate" />

      <input type="text" placeholder="Specialty" />

      <input type="number" placeholder="Number of cases" />

      <input type="date" placeholder="Date" />

      <input type="time" placeholder=" Time" />

      <button onClick={() => navigate(-1)}>Back</button>

      <Link to="/Home/Dashboard" className="mb-5">
        <button>Submit</button>
      </Link>

      <SimpleMap
        activeUser="Donor"
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
    </div>
  );
};

export default ClinicVisits;
