import React from "react";
import DonorDashboard from "./DonorDashboard";
import TeachingClasses from "./TeachingClasses";
import SearchRequests from "./SearchRequests";

import { Routes, Route } from "react-router-dom";
import ClinicVisits from "./ClinicVisits";
import LearnMore from "./LearnMore";

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<DonorDashboard />} />
      <Route path="Dashboard/TeachingClasses" element={<TeachingClasses />} />
      <Route path="Dashboard/ClinicVisits" element={<ClinicVisits />} />
      <Route path="Requests" element={<SearchRequests />} />
      <Route path="Requests/LearnMore/:id" Component={LearnMore} element={<LearnMore />} />
    </Routes>
  );
};

export default DonorRoutes;
