import Dashboard from "../Utils/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DoneIcon from '@mui/icons-material/Done';import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';


const OrganizationDashboard = () => {
  const content = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "New Request", icon: <AddIcon /> },
    { text: "My Requests", icon: <InventoryIcon /> },
    { text: "Delivery", icon: <LocalShippingIcon /> },
    { text: "Fulfilled Requests", icon: <DoneIcon /> },
    { text: "Account", icon: <AccountCircleIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  return <Dashboard content={content} />;
};

export default OrganizationDashboard;
