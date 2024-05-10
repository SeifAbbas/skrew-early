import React from "react";
import AdminDashboard from "./AdminDashboard";

import { Routes, Route } from "react-router-dom";

const AdminRoutes = ({ setAlertState }) => {
  return (
    <Routes>
      <Route
        path="Dashboard"
        element={<AdminDashboard setAlertState={setAlertState} />}
      />
    </Routes>
  );
};

export default AdminRoutes;
