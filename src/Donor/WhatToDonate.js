import { Link } from "react-router-dom";
import dummyData from "../dummyData.json";
const WhatToDonate = () => {
  return (
    <div className="donor-what-to-donate">
      <h1>What do you want to donate</h1>

      <div className="button-container">
        {dummyData.DonorSignIn.role !== "Doctor" && (
          <Link
            to="/Home/VolunteerActivity/TeachingClasses"
            className="button-link"
          >
            <button className="button-with-image">
              <img
                src="https://t4.ftcdn.net/jpg/05/04/12/97/360_F_504129729_xQpVMLpCzFCMuNLziie5fmaSGGtM3Vue.jpg"
                alt=""
                className="button-image"
              />
              <span className="button-text">Teaching Classes</span>
            </button>
          </Link>
        )}

        {dummyData.DonorSignIn.role !== "Teacher" && (
          <Link
            to="/Home/VolunteerActivity/ClinicVisits"
            className="button-link"
          >
            <button className="button-with-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1675686363399-91ad6111f82d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xpbmljfGVufDB8fDB8fHww"
                alt=""
                className="button-image"
              />
              <span className="button-text">Clinic Visits</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default WhatToDonate;
