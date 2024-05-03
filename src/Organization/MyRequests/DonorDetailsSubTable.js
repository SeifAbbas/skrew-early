import {
  Box,
  Collapse,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const DonorDetailsSubTable = ({ row, open }) => {
  return (
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
  );
};

export default DonorDetailsSubTable;
