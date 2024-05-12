import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TeachingClasses = () => {
  const navigate = useNavigate();

  return (
    <div className="teaching-class">
      <input type="text" placeholder="Subject" style={{ marginTop: "30px",marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="text" placeholder="Study Year" style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="number" placeholder="Minimum number of students to attend" style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="number" placeholder="Maximum number of students to attend" style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="number" placeholder="Class Duration" style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="date" placeholder="Date" style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <input type="time" placeholder="Class Time" style={{ marginBottom: "10px", padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          boxSizing: "border-box", }}/>

      <button onClick={() => navigate(-1)}>Back</button>

      <Link to="/Home/Dashboard">
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default TeachingClasses;
