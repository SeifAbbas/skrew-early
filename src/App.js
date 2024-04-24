import { useState } from "react";

import SideNavBar from "./SideNavBar";

import SignIn from "./Utils/SignIn";
import DonorRegistration from "./Donor/DonorRegistration";
import OrganizationRegistration from "./Organization/OrganizationRegistration";

function App() {
  const [activeUser, setActiveUser] = useState("Donor"); // Initial active state

  const handleRegisterClick = (userType) => {
    setActiveUser(userType);
  };

  return (
    <div className="App">
      {/* <SideNavBar
        activeUser={activeUser}
        handleRegisterClick={handleRegisterClick}
      /> */}
      {/* {activeUser === "Donor" && <DonorRegistration activeUser={activeUser} />}
      {activeUser === "Organization" && (
        <OrganizationRegistration activeUser={activeUser} />
      )} */}
      <SignIn />
    </div>
  );
}

export default App;
