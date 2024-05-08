import { useState } from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import dummyData from "../../dummyData.json";
import Row from "./Row";

export default function MyRequests({ setAlertState }) {
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
    <Paper className="w-[90%] overflow-hidden mx-auto mt-14">
      <TableContainer sx={{ maxHeight: 600 }}>
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
              .map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  rows={rows}
                  setRows={setRows}
                  setAlertState={setAlertState}
                />
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
