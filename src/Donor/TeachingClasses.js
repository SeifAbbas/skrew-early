import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeachingClasses = ({ setAlertState }) => {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [minStudents, setMinStudents] = useState("");
  const [maxStudents, setMaxStudents] = useState("");
  const [classDuration, setClassDuration] = useState("");
  const [date, setDate] = useState("");
  const [classTime, setClassTime] = useState("");
  const [errors, setErrors] = useState({
    subject: false,
    studyYear: false,
    minStudents: false,
    maxStudents: false,
    classDuration: false,
    date: false,
    classTime: false,
  });

  const handleClick = () => {
    const newErrors = {};

    // Validate each field
    if (!subject.trim()) {
      newErrors.subject = true;
    }
    if (!studyYear.trim()) {
      newErrors.studyYear = true;
    }
    if (!minStudents.trim() || minStudents <= 0) {
      newErrors.minStudents = true;
    }
    if (!maxStudents.trim()|| maxStudents <= 0) {
      newErrors.maxStudents = true;
    }
    if (!classDuration.trim() || classDuration <= 0) {
      newErrors.classDuration = true;
    }
    if (!date.trim() || isNaN(new Date(date))) {
      newErrors.date = true;
    }
    if (!classTime.trim() || !/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(classTime)) {
      newErrors.classTime = true;
    }
    

    // Set errors and display alert if any
    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
      setAlertState("Rejected");
    } else {
      // Submit form if no errors
      setAlertState("Submitted Teaching Class successfully");
      navigate("/Home/Dashboard");
    }
  };

  return (
    <div className="teaching-class">
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.subject ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.subject && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input
        type="text"
        placeholder="Study Year"
        value={studyYear}
        onChange={(e) => setStudyYear(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.studyYear ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.studyYear && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input
        type="number"
        placeholder="Minimum number of students to attend"
        value={minStudents}
        min={1}
        onChange={(e) => setMinStudents(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.minStudents ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.minStudents && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input
        type="number"
        placeholder="Maximum number of students to attend"
        value={maxStudents}
        min={minStudents}
        onChange={(e) => setMaxStudents(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.maxStudents ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.maxStudents && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input
        type="number"
        placeholder="Class Duration in hours"
        value={classDuration}
        min={1}
        onChange={(e) => setClassDuration(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.classDuration ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.classDuration && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>Field is required</div>}

      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.date ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.date && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{isNaN(new Date(date)) ? "Invalid date format" : "Field is required"}</div>}

      <input
        type="time"
        placeholder="Class Time"
        value={classTime}
        onChange={(e) => setClassTime(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: errors.classTime ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.classTime && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{!/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(classTime) ? "Invalid time format (HH:MM AM/PM)" : "Field is required"}</div>}

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default TeachingClasses;
