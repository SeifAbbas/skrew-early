import Dashboard from "../Utils/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DonorDashboard = () => {
  const content = [
    { text: "Donor item1", icon: <DashboardIcon /> },
    { text: "Donor item2", icon: <ShoppingCartIcon /> },
  ];

  return <Dashboard content={content} />;
};

export default DonorDashboard;
