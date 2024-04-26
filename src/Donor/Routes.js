import React from "react";
import DonorDashboard from "./DonorDashboard";
import TeachingClasses from "./TeachingClasses";

import { Routes, Route } from "react-router-dom";

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<DonorDashboard />} />
      <Route path="Dashboard/TeachingClasses" element={<TeachingClasses />} />
    </Routes>
  );
};

export default DonorRoutes;
