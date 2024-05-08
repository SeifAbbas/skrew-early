import { useState, useEffect, useRef } from "react";
import { TextField, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DropoffSchedule from "./DropoffSchedule";

const OrganizationNotification = ({
  orgNotificationList,
  setOrgNotificationList,
  setAlertState,
}) => {
  const theme = useTheme();
  const panelRef = useRef();

  const [open, setOpen] = useState(false);
  const [panelWidth, setPanelWidth] = useState(300);
  const [isHovered, setIsHovered] = useState(false);

  const handleNotificationClick = () => {
    setOpen(true);
  };

  const handleMouseEvent = (val, index) => {
    setIsHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = val;
      return newHovered;
    });
  };

  const handleDeleteNotification = (notification) => {
    // Remove the notification from the list
    const updatedList = orgNotificationList.filter(
      (n) => n.id !== notification.id
    );
    setOrgNotificationList(updatedList);
  };

  useEffect(() => {
    setIsHovered(new Array(orgNotificationList.length).fill(false));

    if (panelRef.current) {
      const maxWidth = 300;
      const newWidth = Math.min(panelRef.current.scrollWidth, maxWidth);
      setPanelWidth(newWidth);
    }
  }, [orgNotificationList]);

  return (
    <>
      <div
        ref={panelRef}
        className="flex flex-col absolute top-[65px] right-0 z-10"
        style={{
          width: `${panelWidth}px`,
        }}
      >
        {orgNotificationList.map((notification, index) => (
          <TextField
            multiline
            key={index}
            value={
              isHovered[index]
                ? "Schedule Dropoff ?"
                : notification.date + " | " + notification.content
            }
            onClick={handleNotificationClick}
            onMouseEnter={() => handleMouseEvent(true, index)}
            onMouseLeave={() => handleMouseEvent(false, index)}
            InputProps={{
              readOnly: true,
              style: {
                cursor: "default",
                transition: "all 0.3s ease",
                backgroundColor: isHovered[index]
                  ? "gray"
                  : theme.palette.background.paper,
              },
              endAdornment: (
                <IconButton
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteNotification(notification);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              ),
            }}
          />
        ))}
      </div>
      {open && (
        <DropoffSchedule
          open={open}
          setOpen={setOpen}
          setAlertState={setAlertState}
        />
      )}
    </>
  );
};

export default OrganizationNotification;
