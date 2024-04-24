import Dashboard from "../Utils/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const OrganizationDashboard = () => {
  const content = [
    { text: "Organization item1", icon: <DashboardIcon /> },
    { text: "Organization item2", icon: <ShoppingCartIcon /> },
  ];

  return <Dashboard content={content} />;
};

export default OrganizationDashboard;
