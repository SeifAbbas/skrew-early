
import React from 'react';
import { Link } from 'react-router-dom';

const ClinicVisits = () => {
    return ( 
        <div className="clinic-visits">
            <input type="text" placeholder="Address" />

            <input type="text" placeholder="Area" />

            <input type="text" placeholder="Governorate" />

            <input type="text" placeholder="Specialty" />

            <input type="number" placeholder="Number of casses" />

            <input type="date" placeholder="Date" />

            <input type="time" placeholder=" Time" />

            <input type="time" placeholder=" Time" />

            <Link to="/Home/Dashboard">
            <button>Submit</button>
            </Link>
            </div>
     );
}
 
export default ClinicVisits;