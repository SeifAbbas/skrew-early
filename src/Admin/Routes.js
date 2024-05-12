import React from "react";
import AdminDashboard from "./AdminDashboard";
import SearchOrganizations from "../Donor/SearchOrganizations";

import { Routes, Route } from "react-router-dom";

const AdminRoutes = ({ setAlertState }) => {
  return (
    <Routes>
      <Route
        path="Dashboard"
        element={<AdminDashboard setAlertState={setAlertState} />}
      />
      <Route
        path="Organizations"
        element={
          <SearchOrganizations isAdmin={true} setAlertState={setAlertState} />
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
