import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AdminDashboard from "./Admin/AdminDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AdminDashboard /> */}
    <App />
  </React.StrictMode>
);
