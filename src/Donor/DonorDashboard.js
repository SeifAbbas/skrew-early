import Dashboard from "../Utils/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';

const DonorDashboard = () => {
  const content = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "New Request", icon: <AddIcon /> },
    { text: "Search Requests", icon: <SearchIcon /> },
    { text: "Delivery", icon: <LocalShippingIcon /> },
    { text: "Organizations", icon: <BusinessIcon /> },
    { text: "Account", icon: <AccountCircleIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },

  ];

  return <Dashboard content={content} />;
};

export default DonorDashboard;
