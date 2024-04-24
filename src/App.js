import { useState } from "react";

import SideNavBar from "./SideNavBar";

import SignIn from "./Utils/SignIn";
import DonorRegistration from "./Donor/DonorRegistration";
import OrganizationRegistration from "./Organization/OrganizationRegistration";

import AdminDashboard from "./Admin/AdminDashboard";
import DonorDashboard from "./Donor/DonorDashboard";
import OrganizationDashboard from "./Organization/OrganizationDashboard";

function App() {
  const [activeUser, setActiveUser] = useState("Donor"); // Initial active state

  const handleRegisterClick = (userType) => {
    setActiveUser(userType);
  };

  return (
    <div className="App">
      <div className="testLogin">
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
      </div>

      {/* <SignIn /> */}

      <AdminDashboard />
      {/* <OrganizationDashboard /> */}
      {/* <DonorDashboard /> */}
    </div>
  );
}

export default App;
