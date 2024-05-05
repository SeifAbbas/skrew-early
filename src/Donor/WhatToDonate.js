import { Link } from "react-router-dom";
import dummyData from "../dummyData.json";

const WhatToDonate = () => {
  return (
    <div className="donor-what-to-donate">
      {/* I want to add an image inside a button */}
      <h1>What do you want to donate</h1>

      <Link to="/Home/VolunteerActivity/TeachingClasses">
        <button className="button-with-image1">
          <img
            src="https://media.licdn.com/dms/image/D5612AQE7WdYNUZxdTw/article-cover_image-shrink_600_2000/0/1695272708584?e=2147483647&v=beta&t=E2uUybzO5zudOX8gZV3HvGPO6qTQT-vACuW7AzHacH0"
            alt=""
          />
          <span className="button-text">Teaching Classes</span>
        </button>
      </Link>

      <button className="button-with-image2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8782XdbnWmcpbh2kqigv7-7iOYdAKIWGop7r9DXTEg&s"
          alt=""
        />
        <span className="button-text">Blood Donations</span>
      </button>

      {dummyData.DonorSignIn.Role !== "Teacher" && (
        <Link to="/Home/VolunteerActivity/ClinicVisits">
          <button className="button-with-image3">
            <img
              src="https://plus.unsplash.com/premium_photo-1675686363399-91ad6111f82d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xpbmljfGVufDB8fDB8fHww"
              alt=""
            />
            <span className="button-text">Clinic Visits</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default WhatToDonate;
