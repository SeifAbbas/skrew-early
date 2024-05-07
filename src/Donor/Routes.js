import React from "react";
import DonorDashboard from "./DonorDashboard";
import TeachingClasses from "./TeachingClasses";
import SearchRequests from "./SearchRequests";

import { Routes, Route } from "react-router-dom";
import ClinicVisits from "./ClinicVisits";
// import LearnMore from "./LearnMore";
import WhatToDonate from "./WhatToDonate";

const DonorRoutes = ({ setOrgNotificationList }) => {
  return (
    <Routes>
      <Route path="Dashboard" element={<DonorDashboard />} />
      <Route path="Requests" element={<SearchRequests setOrgNotificationList={setOrgNotificationList}/>} />
      {/* <Route
        path="Requests/LearnMore/:id"
        element={<LearnMore setOrgNotificationList={setOrgNotificationList} />}
      /> */}
      <Route path="VolunteerActivity" element={<WhatToDonate />} />
      <Route
        path="VolunteerActivity/TeachingClasses"
        element={<TeachingClasses />}
      />
      <Route path="VolunteerActivity/ClinicVisits" element={<ClinicVisits />} />
    </Routes>
  );
};

export default DonorRoutes;
