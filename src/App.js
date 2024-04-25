import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./Utils/SignIn";
import Home from "./Utils/Home";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const [navbarContent, setNavbarContent] = useState(null);

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
            path="/Home/*"
            element={
              <Home activeUser={activeUser} navbarContent={navbarContent} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
