import { Link } from "react-router-dom";


const WhatToDonate = () => {

    return ( 
        <div className="donor-what-to-donate">
            {/* I want to add an image inside a button */}
            <h1>What do you want to donate</h1>

            <Link to="/Home/Dashboard/TeachingClasses">
            <button className="button-with-image1">
            <img src="https://media.licdn.com/dms/image/D5612AQE7WdYNUZxdTw/article-cover_image-shrink_600_2000/0/1695272708584?e=2147483647&v=beta&t=E2uUybzO5zudOX8gZV3HvGPO6qTQT-vACuW7AzHacH0" alt="Button Image"/>
            <span className="button-text">Teaching Classes</span>
            </button>
            </Link>

            <button className="button-with-image2">
            <img src="https://previews.123rf.com/images/pupkis/pupkis1112/pupkis111200003/11726705-collection-of-many-objects-isolated-on-white-background.jpg" alt="Button Image"/>           
            <span className="button-text">Items</span>
            </button>

            <Link to="/Home/Dashboard/ClinicVisits">
            <button className="button-with-image3">
            <img src="https://plus.unsplash.com/premium_photo-1675686363399-91ad6111f82d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xpbmljfGVufDB8fDB8fHww" alt="Button Image"/>
            <span className="button-text">Clinic Visits</span>
            </button>
            </Link>
        </div>
     );
}
 
export default WhatToDonate;