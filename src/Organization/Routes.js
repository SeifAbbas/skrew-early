import React from "react";
import OrganizationDashboard from "./OrganizationDashboard";

import { Routes, Route } from "react-router-dom";
import NewRequest from "./NewRequest";
import MyRequests from "./MyRequests/MyRequests";
import Account from "./Account";

import dummyData from "../dummyData.json";

const OrganizationRoutes = () => {
  const [formFields, setFormFields] = React.useState(
    dummyData.organizationNewRequest
  );

  const [chosenCategory, setChosenCategory] = React.useState("clothes");

  return (
    <Routes>
      <Route path="Dashboard" element={<OrganizationDashboard />} />
      <Route
        path="NewRequest"
        element={
          <NewRequest
            showInPopup={false}
            formFields={formFields}
            setFormFields={setFormFields}
            chosenCategory={chosenCategory}
            setChosenCategory={setChosenCategory}
          />
        }
      />
      <Route path="MyRequests" element={<MyRequests />} />
      <Route path="Account" element={<Account />} />
    </Routes>
  );
};

export default OrganizationRoutes;
