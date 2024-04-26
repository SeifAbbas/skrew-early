import React from "react";
import DonorDashboard from "./DonorDashboard";
import TeachingClasses from "./TeachingClasses";

import { Routes, Route } from "react-router-dom";
import ClinicVisits from "./ClinicVisits";

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<DonorDashboard />} />
      <Route path="Dashboard/TeachingClasses" element={<TeachingClasses />} />
      <Route path="Dashboard/ClinicVisits" element={<ClinicVisits />} />
    </Routes>
  );
};

export default DonorRoutes;
