import React from "react";
import OrganizationDashboard from "./OrganizationDashboard";

import { Routes, Route } from "react-router-dom";
import NewRequest from "./NewRequest";
import MyRequests from "./MyRequests";
import FulfilledRequests from "./FulfilledRequests";
import Account from "./Account";

const OrganizationRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<OrganizationDashboard />} />
      <Route path="NewRequest" element={<NewRequest />} />
      <Route path="MyRequests" element={<MyRequests />} />
      <Route path="FulfilledRequests" element={<FulfilledRequests />} />
      <Route path="Account" element={<Account />} />
    </Routes>
  );
};

export default OrganizationRoutes;
