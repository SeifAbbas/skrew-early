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
import { MdDelete } from "react-icons/md";

import DonorDetailsSubTable from "./DonorDetailsSubTable";

export default function Row(props) {
  const { row, setRows } = props;
  const [open, setOpen] = useState(false);

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
          <Button
            onClick={handleDeleteRow}
            sx={{
              backgroundColor: "red",
              color: "inherit",
              fontSize: "10px",
            }}
          >
            <IconButton size="10px">
              <MdDelete color="inherit" />
            </IconButton>
            Delete post
          </Button>
        </TableCell>
      </TableRow>

      <DonorDetailsSubTable row={row} open={open} />
    </>
  );
}
