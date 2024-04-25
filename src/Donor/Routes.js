import React from "react";
import DonorDashboard from "./DonorDashboard";

import { Routes, Route } from "react-router-dom";

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<DonorDashboard />} />
    </Routes>
  );
};

export default DonorRoutes;
