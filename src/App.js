import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import SideNavBar from "./SideNavBar";

import SignIn from "./Utils/SignIn";
import DonorRegistration from "./Donor/DonorRegistration";
import OrganizationRegistration from "./Organization/OrganizationRegistration";

import AdminDashboard from "./Admin/AdminDashboard";
import DonorDashboard from "./Donor/DonorDashboard";
import OrganizationDashboard from "./Organization/OrganizationDashboard";

function App() {
  const [activeUser, setActiveUser] = useState(null); // Initial active state
  const handleRegisterClick = (userType) => {
    setActiveUser(userType);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn setActiveUser={setActiveUser} />} />
          <Route
            path="/Dashboard"
            element={
              (activeUser === "Admin" && <AdminDashboard />) ||
              (activeUser === "Organization" && <OrganizationDashboard />) ||
              (activeUser === "Donor" && <DonorDashboard />)
            }
          />
        </Routes>

        {/* <div className="testLogin"> */}
        {/* <SideNavBar
          activeUser={activeUser}
          handleRegisterClick={handleRegisterClick}
        />

        {activeUser === "Donor" && (
          <DonorRegistration activeUser={activeUser} />
        )}
        {activeUser === "Organization" && (
          <OrganizationRegistration activeUser={activeUser} />
        )} */}
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
