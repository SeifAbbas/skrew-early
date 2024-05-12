import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TeachingClasses = ({ setAlertState }) => {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [minStudents, setMinStudents] = useState("");
  const [maxStudents, setMaxStudents] = useState("");
  const [classDuration, setClassDuration] = useState("");
  const [date, setDate] = useState("");
  const [classTime, setClassTime] = useState("");
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    const newErrors = {};

    // Validate each field
    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!studyYear.trim()) {
      newErrors.studyYear = "Study Year is required";
    }
    if (!minStudents.trim()) {
      newErrors.minStudents = "Minimum number of students is required";
    }
    if (!maxStudents.trim()) {
      newErrors.maxStudents = "Maximum number of students is required";
    }
    if (!classDuration.trim()) {
      newErrors.classDuration = "Class Duration is required";
    }
    if (!date.trim()) {
      newErrors.date = "Date is required";
    }
    if (!classTime.trim()) {
      newErrors.classTime = "Class Time is required";
    }

    // Set errors and display alert if any
    if (Object.keys(newErrors).length > 0) {
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
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.subject && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.subject}</div>}

      <input
        type="text"
        placeholder="Study Year"
        value={studyYear}
        onChange={(e) => setStudyYear(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.studyYear && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.studyYear}</div>}

      <input
        type="number"
        placeholder="Minimum number of students to attend"
        value={minStudents}
        min={1}
        onChange={(e) => setMinStudents(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.minStudents && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.minStudents}</div>}

      <input
        type="number"
        placeholder="Maximum number of students to attend"
        value={maxStudents}
        min={minStudents}
        onChange={(e) => setMaxStudents(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.maxStudents && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.maxStudents}</div>}

      <input
        type="number"
        placeholder="Class Duration in hours"
        value={classDuration}
        min={1}
        onChange={(e) => setClassDuration(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.classDuration && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.classDuration}</div>}

      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.date && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.date}</div>}

      <input
        type="time"
        placeholder="Class Time"
        value={classTime}
        onChange={(e) => setClassTime(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
      />
      {errors.classTime && <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errors.classTime}</div>}

      <button onClick={() => navigate(-1)}>Back</button>

        <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default TeachingClasses;
