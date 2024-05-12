import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TeachingClasses = () => {
  const navigate = useNavigate();

  return (
    <div className="teaching-class">
      <input type="text" placeholder="Subject" />

      <input type="text" placeholder="Study Year" />

      <input type="number" placeholder="Minimum number of students to attend" />

      <input type="number" placeholder="Maximum number of students to attend" />

      <input type="number" placeholder="Class Duration" />

      <input type="date" placeholder="Date" />

      <input type="time" placeholder="Class Time" />

      <button onClick={() => navigate(-1)}>Back</button>

      <Link to="/Home/Dashboard">
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default TeachingClasses;
