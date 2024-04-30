import { useState, useEffect, useRef } from "react";
import { TextField, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const OrganizationNotification = ({
  orgNotificationList,
  setOrgNotificationList,
}) => {
  const theme = useTheme();
  const panelRef = useRef();
  const [panelWidth, setPanelWidth] = useState(300);

  useEffect(() => {
    if (panelRef.current) {
      const maxWidth = 300;
      const newWidth = Math.min(panelRef.current.scrollWidth, maxWidth);
      setPanelWidth(newWidth);
    }
    console.log("here");
  }, [orgNotificationList]);

  return (
    <div
      ref={panelRef}
      className="flex flex-col absolute top-[65px] right-0 z-10"
      style={{
        width: `${panelWidth}px`,
      }}
    >
      {orgNotificationList.map((notification, index) => (
        <TextField
          key={index}
          value={notification.date + " | " + notification.content}
          noWrap
          InputProps={{
            readOnly: true,
            style: {
              backgroundColor: theme.palette.background.paper,
            },
            endAdornment: (
              <IconButton
                onClick={() => {
                  // Remove the notification from the list
                  const updatedList = orgNotificationList.filter(
                    (n) => n.id !== notification.id
                  );
                  setOrgNotificationList(updatedList);
                }}
              >
                <CloseIcon />
              </IconButton>
            ),
          }}
        />
      ))}
    </div>
  );
};

export default OrganizationNotification;
