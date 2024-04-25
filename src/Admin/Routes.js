import React from "react";
import AdminDashboard from "./AdminDashboard";

import { Routes, Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
