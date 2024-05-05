import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./Utils/SignIn";
import Home from "./Utils/Home";
import SignUp from "./Utils/SignUp/SignUp";

import dummyData from "./dummyData.json";

function App() {
  const [activeUser, setActiveUser] = useState("Donor");
  const [navbarContent, setNavbarContent] = useState(null);
  const [inputFields, setInputFields] = useState(dummyData.donorRegFields);
  const [orgNotificationList, setOrgNotificationList] = useState(
    dummyData.organizationNotifications
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn
                setActiveUser={setActiveUser}
                setNavbarContent={setNavbarContent}
              />
            }
          />
          <Route
            path="/Register"
            element={
              <SignUp
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                inputFields={inputFields}
                setInputFields={setInputFields}
              />
            }
          />
          <Route
            path="/Home/*"
            element={
              <Home
                activeUser={activeUser}
                navbarContent={navbarContent}
                orgNotificationList={orgNotificationList}
                setOrgNotificationList={setOrgNotificationList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
