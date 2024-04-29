import { useState } from "react";

import {
  Box,
  Button,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import dummyData from "../dummyData.json";

function Row(props) {
  const { row, setRows } = props;
  const [open, setOpen] = useState(false);

  const handleDeleteRow = (event) => {
    setRows((rows) => {
      const updatedRows = rows.filter((r) => r.Name !== row.Name);
      console.log(updatedRows);
      return updatedRows;
    });
  };

  return (
    <>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.Name}</TableCell>
        <TableCell align="center">{row.Type}</TableCell>
        <TableCell align="center">{row.Quantity}</TableCell>
        <TableCell align="center">{row.Date}</TableCell>
        <TableCell align="center" sx={{ maxWidth: 70 }}>
          <Button
            onClick={handleDeleteRow}
            sx={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            Delete post
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Donor Details
              </Typography>
              <Table size="small" aria-label="Donor Details">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Role</TableCell>
                    <TableCell align="center">Contact Number</TableCell>
                    <TableCell align="center">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Donor.map((detailsRow) => (
                    <TableRow key={detailsRow.Mobile}>
                      <TableCell align="center">{detailsRow.Name}</TableCell>
                      <TableCell align="center">{detailsRow.Role}</TableCell>
                      <TableCell align="center">{detailsRow.Mobile}</TableCell>
                      <TableCell align="center">{detailsRow.Email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable() {
  const [rows, setRows] = useState(dummyData.FulfilledRequests);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="w-[70%] overflow-hidden mx-auto mt-10">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#333333" }}>
              <TableCell />
              <TableCell align="center" sx={{ color: "white" }}>
                Item Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Item Type
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Item Quantity
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Date of Donation
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.name} row={row} rows={rows} setRows={setRows} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
