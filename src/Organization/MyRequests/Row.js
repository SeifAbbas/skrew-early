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

import DonorDetailsSubTable from "./DonorDetailsSubTable";
import EditRequest from "./EditRequestPopup";

export default function Row(props) {
  const { row, setRows } = props;
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
                <Typography variant="body2">Hide Donor Details</Typography>
              ) : (
                <Typography variant="body2">Show Donor Details</Typography>
              )}
            </Box>
          ) : (
            <Typography variant="body2" style={{ marginLeft: "30px" }}>
              Not fulfilled yet
            </Typography>
          )}
        </TableCell>

        <TableCell align="center">{row.Name}</TableCell>
        <TableCell align="center">{row.Type}</TableCell>
        <TableCell align="center">{row.Quantity}</TableCell>
        <TableCell align="center">{row.Date}</TableCell>

        <TableCell align="center" sx={{ maxWidth: 90 }}>
          {row.Donor.length === 0 && (
            <Button
              onClick={handleEditRow}
              sx={{
                backgroundColor: "steelblue",
                color: "inherit",
                fontSize: "12px",
                padding: "10px",
              }}
            >
              <EditNoteIcon color="inherit" style={{ marginRight: "5px" }} />
              Edit post
            </Button>
          )}
        </TableCell>

        <TableCell align="center" sx={{ maxWidth: 90 }}>
          <Button
            onClick={handleDeleteRow}
            sx={{
              backgroundColor: "red",
              color: "inherit",
              fontSize: "12px",
              padding: "10px",
            }}
          >
            <DeleteIcon color="inherit" style={{ marginRight: "5px" }} />
            Delete post
          </Button>
        </TableCell>
      </TableRow>

      <DonorDetailsSubTable row={row} open={open} />
      {openEditMode && (
        <EditRequest
          row={row}
          setRows={setRows}
          openEditMode={openEditMode}
          setOpenEditMode={setOpenEditMode}
        />
      )}
    </>
  );
}
