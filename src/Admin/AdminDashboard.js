import Dashboard from "../Utils/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RateReviewIcon from '@mui/icons-material/RateReview';

const AdminDashboard = () => {
  const content = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Donors", icon: <VolunteerActivismIcon /> },
    { text: "Organizations", icon: <BusinessIcon /> },
    { text: "Review Submissions", icon: <RateReviewIcon /> },
    { text: "Account", icon: <AccountCircleIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  return <Dashboard content={content} />;
};

export default AdminDashboard;
