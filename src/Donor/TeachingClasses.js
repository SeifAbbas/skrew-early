import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

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
    if (!maxStudents.trim() || maxStudents <= 0) {
      newErrors.maxStudents = true;
    }
    if (!classDuration.trim() || classDuration <= 0) {
      newErrors.classDuration = true;
    }
    if (!date.trim() || isNaN(new Date(date))) {
      newErrors.date = true;
    }
    if (
      !classTime.trim() ||
      !/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(classTime)
    ) {
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
      <TextField
        type="text"
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        error={errors.subject}
        style={{
          marginTop: "30px",
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.subject && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="text"
        label="Study Year"
        value={studyYear}
        onChange={(e) => setStudyYear(e.target.value)}
        error={errors.subject}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.studyYear && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="number"
        label="Minimum number of students to attend"
        value={minStudents}
        min={1}
        onChange={(e) => setMinStudents(e.target.value)}
        error={errors.subject}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.minStudents && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="number"
        label="Maximum number of students to attend"
        value={maxStudents}
        min={minStudents}
        onChange={(e) => setMaxStudents(e.target.value)}
        error={errors.subject}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.maxStudents && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <TextField
        type="number"
        label="Class Duration in hours"
        value={classDuration}
        min={1}
        onChange={(e) => setClassDuration(e.target.value)}
        error={errors.subject}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.classDuration && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          Field is required
        </div>
      )}

      <h5>Class date</h5>
      <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        error={errors.subject}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.date && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {isNaN(new Date(date)) ? "Invalid date format" : "Field is required"}
        </div>
      )}

      <h5>Class time</h5>
      <TextField
        type="time"
        value={classTime}
        onChange={(e) => setClassTime(e.target.value)}
        error={errors.subject}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "16px",
          width: "30%",
        }}
      />
      {errors.classTime && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {!/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?[APap][mM]$/.test(classTime)
            ? "Invalid time format (HH:MM AM/PM)"
            : "Field is required"}
        </div>
      )}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default TeachingClasses;
