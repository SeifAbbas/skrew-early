import * as React from "react";
import { Link } from "react-router-dom";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

const ListItems = ({ content }) => {
  return (
    <React.Fragment>
      {content.map((item) => (
        <ListItemButton key={item.route} component={Link} to={item.route}>
          <Tooltip title={item.text} placement="right">
            <ListItemIcon>{item.icon}</ListItemIcon>
          </Tooltip>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export default ListItems;
