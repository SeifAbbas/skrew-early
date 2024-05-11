import { React, useState } from "react";

import {
  styled,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { DarkMode, LightMode } from "@mui/icons-material";

import ListItems from "./ListItems";
import AdminRoutes from "../Admin/Routes";
import DonorRoutes from "../Donor/Routes";
import OrganizationRoutes from "../Organization/Routes";
import OrganizationNotification from "../Organization/Notifications/Notification";
import Alerts from "./Alerts";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

/*
 '#393E41'  BLACK
 '#F6BD60' YELLOW
 '#84A59D' GREEN
 '#5893e0' BLUE
*/

export default function Home({
  activeUser,
  navbarContent,
  orgNotificationList,
  setOrgNotificationList,
}) {
  const [open, setOpen] = useState(false);

  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [alertState, setAlertState] = useState("off");

  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand Variable",
      fontSize: 15,
    },
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: activeUser
          ? {
              Admin: "#F6BD60",
              Donor: "#5893e0",
              Organization: "#84A59D",
            }[activeUser]
          : "#393E41",
        contrastText: "#fff",
      },
      background: {
        default: isDarkMode ? "#1e2122" : "#fafafa",
      },
    },
  });

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon color="inherit" />
            </IconButton>

            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
              style={{
                height: "auto",
                width: "50px",
                marginRight: "10px",
              }}
            />

            <Typography
              component="h1"
              variant="h6"
              color={isDarkMode ? "primary" : "white"}
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Fa3el 5eir
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              color={isDarkMode ? "primary" : "white"}
              noWrap
              sx={{ flexGrow: 1, alignSelf: "center" }}
            >
              Dashboard
            </Typography>

            {activeUser !== "Admin" && (
              <IconButton
                onClick={() => setNotificationPanelOpen(!notificationPanelOpen)}
              >
                <Badge
                  badgeContent={orgNotificationList.length}
                  color="secondary"
                >
                  <NotificationsIcon color="inherit" />
                </Badge>
              </IconButton>
            )}
            <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <DarkMode color="inherit" />
              ) : (
                <LightMode color="inherit" />
              )}
            </IconButton>
            <IconButton>
              <Avatar
                alt="Account Avatar"
                src={process.env.PUBLIC_URL + "/Avatars/avatar2.png"}
              />
            </IconButton>
          </Toolbar>
        </AppBar>

        {notificationPanelOpen && activeUser === "Organization" && (
          <OrganizationNotification
            orgNotificationList={orgNotificationList}
            setOrgNotificationList={setOrgNotificationList}
            setAlertState={setAlertState}
          />
        )}

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems content={navbarContent} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            mt: "0px",
          }}
        >
          <Toolbar />

          {activeUser === "Admin" && (
            <AdminRoutes setAlertState={setAlertState} />
          )}
          {activeUser === "Organization" && (
            <OrganizationRoutes setAlertState={setAlertState} />
          )}
          {activeUser === "Donor" && (
            <DonorRoutes setOrgNotificationList={setOrgNotificationList} setAlertState={setAlertState}/>
          )}
        </Box>
      </Box>
      <Alerts alertState={alertState} setAlertState={setAlertState} />
    </ThemeProvider>
  );
}
