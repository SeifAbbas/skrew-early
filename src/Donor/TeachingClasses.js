
import React from 'react';
import { Link } from 'react-router-dom';

const TeachingClasses = () => {
    return ( 
        <div className="teaching-class">
            <h1>Subject</h1>
            <input type="text" placeholder="Subject" />

            <h1>Study Year</h1>
            <input type="text" placeholder="Study Year" />

            <h1>Minimum number of students to attend</h1>
            <input type="number" placeholder="Minimum number of students to attend" />

            <h1>Maximum number of students to attend</h1>
            <input type="number" placeholder="Maximum number of students to attend" />

            <h1>Class Duration in Hours</h1>
            <input type="number" placeholder="Class Duration" />

            <h1>Date</h1>
            <input type="date" placeholder="Date" />

            <h1>Class Time</h1>
            <input type="time" placeholder="Class Time" />

            <Link to="/Home/Dashboard">
            <button>Submit</button>
            </Link>
            
        </div>
     );
}
 
export default TeachingClasses;