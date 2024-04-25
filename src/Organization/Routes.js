import React from "react";
import OrganizationDashboard from "./OrganizationDashboard";

import { Routes, Route } from "react-router-dom";

const OrganizationRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<OrganizationDashboard />} />
    </Routes>
  );
};

export default OrganizationRoutes;
