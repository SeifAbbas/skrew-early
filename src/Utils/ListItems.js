import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ListItems = ({ content }) => {
  return (
    <React.Fragment>
      {content.map((item) => (
        <ListItemButton>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export default ListItems;
