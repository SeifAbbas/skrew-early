import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TableCell,
  TableRow,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import DonorDetailsSubTable from "./DonorDetailsSubTable";
import EditRequest from "./EditRequestPopup";

export default function Row(props) {
  const { row, setRows, setAlertState } = props;
  const [open, setOpen] = useState(false);
  const [openEditMode, setOpenEditMode] = useState(false);

  const handleEditRow = () => {
    setOpenEditMode(true);
  };

  const handleDeleteRow = (event) => {
    setRows((rows) => {
      const updatedRows = rows.filter((r) => r.Name !== row.Name);
      return updatedRows;
    });
    setAlertState("Deleted");
  };

  return (
    <>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">
          {row.Donor.length !== 0 ? (
            <Box display="flex" alignItems="center">
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>

              {open ? (
                <Typography variant="body2" style={{ marginRight: "5px" }}>
                  Hide Donor Details
                </Typography>
              ) : (
                <Typography variant="body2" style={{ marginRight: "5px" }}>
                  Show Donor Details
                </Typography>
              )}
              <TaskAltIcon style={{ color: "green" }} />
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                style={{ marginLeft: "30px", marginRight: "5px" }}
              >
                Not fulfilled yet
              </Typography>
              <HighlightOffIcon style={{ color: "red" }} />
            </Box>
          )}
        </TableCell>

        <TableCell align="center">{row.Name}</TableCell>
        <TableCell align="center">{row.Type}</TableCell>
        <TableCell align="center">{row.Quantity}</TableCell>
        <TableCell align="center">{row.Date}</TableCell>

        <TableCell align="center" sx={{ maxWidth: 90 }}>
          {row.Donor.length === 0 && (
            <IconButton onClick={handleEditRow}>
              <EditNoteIcon style={{ color: "steelblue" }} />
            </IconButton>
          )}
          <IconButton onClick={handleDeleteRow}>
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        </TableCell>
      </TableRow>

      <DonorDetailsSubTable row={row} open={open} title={"Donor Details"} />
      {openEditMode && (
        <EditRequest
          row={row}
          setRows={setRows}
          openEditMode={openEditMode}
          setOpenEditMode={setOpenEditMode}
          setAlertState={setAlertState}
        />
      )}
    </>
  );
}
