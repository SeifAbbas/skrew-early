import {
  Box,
  Collapse,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";

import DownloadIcon from "@mui/icons-material/Download";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import { jsPDF } from "jspdf";

const DonorDetailsSubTable = ({
  row,
  setRow,
  open,
  title,
  isAdmin,
  isDeleteOnly,
  setAlertState,
}) => {
  const [randomAvatarIndex, setRandomAvatarIndex] = useState([]);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(
      "Copy of donor proof document (Medical License / School Staff ID card)",
      10,
      10
    );
    doc.save("proof.pdf");
    setAlertState("Proof downloaded Successfully!");
  };

  const handleAccept = (index) => {
    handleReject(index);
    setAlertState("Approved");
  };

  const handleReject = (index) => {
    const newDonorArray = row.Donor.filter((_, i) => i !== index);
    setRow({ ...row, Donor: newDonorArray });
    setAlertState("Rejected");
  };

  useEffect(() => {
    const array = Array.from(
      { length: row.Donor.length },
      () => Math.floor(Math.random() * 8) + 1
    );
    setRandomAvatarIndex(array);
  }, [row.Donor.length]);

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              {title}
            </Typography>
            <Table size="small" aria-label="Donor Details">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Role</TableCell>
                  <TableCell align="center">Contact Number</TableCell>
                  <TableCell align="center">Email</TableCell>
                  {isAdmin && <TableCell />}
                </TableRow>
              </TableHead>
              <TableBody>
                {row.Donor.map((detailsRow, index) => (
                  <TableRow key={detailsRow.Mobile}>
                    <TableCell align="center">
                      <Avatar
                        alt="Account Avatar"
                        src={
                          process.env.PUBLIC_URL +
                          `/Avatars/avatar${randomAvatarIndex[index]}.png`
                        }
                      />
                    </TableCell>
                    <TableCell align="center">{detailsRow.Name}</TableCell>
                    <TableCell align="center">{detailsRow.Role}</TableCell>
                    <TableCell align="center">{detailsRow.Mobile}</TableCell>
                    <TableCell align="center">{detailsRow.Email}</TableCell>
                    {isAdmin && !isDeleteOnly && (
                      <TableCell align="center">
                        <Tooltip title="Download proof" placement="top">
                          <IconButton onClick={handleDownload}>
                            <DownloadIcon />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Approve" placement="top">
                          <IconButton onClick={() => handleAccept(index)}>
                            <CheckIcon className="text-green-600" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Reject" placement="top">
                          <IconButton onClick={() => handleReject(index)}>
                            <ClearIcon className="text-red-600" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    )}

                    {isAdmin && isDeleteOnly && (
                      <TableCell align="center">
                        <Tooltip title="Reject" placement="top">
                          <IconButton onClick={() => handleReject(index)}>
                            <ClearIcon className="text-red-600" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    )}
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
