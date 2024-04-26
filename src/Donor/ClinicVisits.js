const ClinicVisits = () => {
    return ( 
        <div className="clinic-visits">
            <h1>Address</h1>
            <input type="text" placeholder="Address" />

            <h1>Area</h1>
            <input type="text" placeholder="Area" />

            <h1>Governorate</h1>
            <input type="text" placeholder="Governorate" />

            <h1>Specialty</h1>
            <input type="text" placeholder="Specialty" />

            <h1>Number of casses</h1>
            <input type="number" placeholder="Number of casses" />

            <h1>Date</h1>
            <input type="date" placeholder="Date" />

            <h1>Available from</h1>
            <input type="time" placeholder=" Time" />

            <h1>Available to</h1>
            <input type="time" placeholder=" Time" />

            <button>Submit</button>
            </div>
     );
}
 
export default ClinicVisits;