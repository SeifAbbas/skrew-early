import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  TablePagination,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MuiAlert from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Motorcycle from "@mui/icons-material/TwoWheeler";
import Truck from "@mui/icons-material/LocalShipping";
import Car from "@mui/icons-material/DriveEta";

const DonorDashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const timeSlots = ["07:30", "08:00", "08:30", "09:00", "09:30", "10:00"];

  const theme = useTheme();
  const [iconColor, setIconColor] = useState(
    theme.palette.mode === "dark" ? "white" : "black"
  );

  useEffect(() => {
    setIconColor(theme.palette.mode === "dark" ? "white" : "black");
  }, [theme.palette.mode]);

  const [data, setData] = useState([
    {
      itemName: "Hoodie",
      category: "Clothes",
      itemQuantity: 1,
      donationDate: "2024-05-15",
      transportationType: "",
      pickUpTime: "",
    },
    {
      itemName: "Football",
      category: "Toys",
      itemQuantity: 2,
      donationDate: "2024-05-16",
      transportationType: "",
      pickUpTime: "",
    },
    {
      itemName: "Panadol",
      category: "Medication",
      itemQuantity: 3,
      donationDate: "2024-05-17",
      transportationType: "",
      pickUpTime: "",
    },
    {
      itemName: "Gloves",
      category: "Medical Supply",
      itemQuantity: 4,
      donationDate: "2024-05-18",
      transportationType: "",
      pickUpTime: "",
    },
    {
      itemName: "Chicken",
      category: "Food",
      itemQuantity: 5,
      donationDate: "2024-05-19",
      transportationType: "",
      pickUpTime: "",
    },
    {
      itemName: "Pencil",
      category: "School Supply",
      itemQuantity: 6,
      donationDate: "2024-05-20",
      transportationType: "",
      pickUpTime: "",
    },
  ]);

  const [eta, setEta] = useState(Array(data.length).fill(null));
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleDone = (index) => {
    let etaValue;
    switch (data[index].transportationType) {
      case "Truck":
        etaValue = 30;
        break;
      case "Car":
        etaValue = 20;
        break;
      case "Motorcycle":
        etaValue = 10;
        break;
      default:
        etaValue = 5 * 60; // default ETA
        break;
    }

    const newEta = [...eta];
    newEta[index] = etaValue;
    setEta(newEta);

    setData((prevData) =>
      prevData.map((dataItem, dataIndex) =>
        dataIndex === index ? { ...dataItem, done: true } : dataItem
      )
    );

    setSnackbarMessage(
      `${data[index].itemName} is successfully scheduled for pick-up at time slot: ${data[index].pickUpTime} by ${data[index].transportationType}.`
    );
    setOpenSnackbar(true);

    const timer = setInterval(() => {
      setEta((prevEta) => {
        const newEta = [...prevEta];
        if (newEta[index] > 0) {
          newEta[index]--;
        }

        // Check if ETA has reached 0
        if (newEta[index] === 0) {
          setDialogMessage(
            `Driver has arrived to pick up ${data[index].itemName}.`
          );
          setOpenDialog(true);
          clearInterval(timer); // Clear the interval when ETA reaches 0
        }

        return newEta;
      });
    }, 1000);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", mt: 5, p: 2 }}>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            // Target the paper element of the Dialog
            borderRadius: "10px", // Add border radius
            padding: "20px", // Add padding
            width: "80%", // Set width
            maxWidth: "500px", // Set max width
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Add box shadow
          },
          "& .MuiDialogTitle-root": {
            // Target the title of the Dialog
            borderBottom: "1px solid #f0f0f0", // Add bottom border
            marginBottom: "20px", // Add bottom margin
            "& .MuiTypography-root": {
              // Target the typography in the title
              fontSize: "20px", // Increase font size
              fontWeight: "600", // Increase font weight
            },
          },
          "& .MuiDialogContent-root": {
            // Target the content of the Dialog
            "& .MuiTypography-root": {
              // Target the typography in the content
              fontSize: "16px", // Increase font size
            },
          },
          "& .MuiDialogActions-root": {
            // Target the actions of the Dialog
            borderTop: "1px solid #f0f0f0", // Add top border
            marginTop: "20px", // Add top margin
            justifyContent: "center", // Center the buttons
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Pick Up Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        sx={{
          "& .MuiSnackbar-root": {
            backgroundColor: "blue", // Change the background color
            color: "white", // Change the text color
            borderRadius: "10px", // Add border radius
          },
        }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%", fontSize: "1.2em" }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          My Donations
        </Typography>
        <Typography
          style={{
            color: "rgba(128, 128, 128, 0.7)",
            fontWeight: "bold",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Please select schedule and transportation for donation pick-up
        </Typography>
        <Table
          sx={{
            "& .MuiTableCell-root": {
              borderBottom: "1px solid gray", // Change the border color of table cells
            },
            "& .MuiTableRow-root:hover": {
              backgroundColor: "lightblue", // Change the background color of a row on hover
            },
          }}
          style={{ fontFamily: "Arial", fontSize: "18px" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Item Quantity</TableCell>
              <TableCell>Donation Date</TableCell>
              <TableCell>Transportation Type</TableCell>
              <TableCell>Schedule Pick-Up</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: item.done
                      ? "lightseagreen"
                      : "transparent",
                  }}
                >
                  <TableCell>{item.itemName}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.itemQuantity}</TableCell>
                  <TableCell>{item.donationDate}</TableCell>
                  <TableCell>
                    <IconButton
                      style={{
                        color:
                          item.transportationType === "Motorcycle"
                            ? "green"
                            : iconColor,
                      }}
                      onClick={() => {
                        setData((prevData) =>
                          prevData.map((dataItem, dataIndex) =>
                            dataIndex === index
                              ? {
                                  ...dataItem,
                                  transportationType:
                                    dataItem.transportationType === "Motorcycle"
                                      ? ""
                                      : "Motorcycle",
                                }
                              : dataItem
                          )
                        );
                      }}
                    >
                      <Motorcycle />
                    </IconButton>
                    <IconButton
                      style={{
                        color:
                          item.transportationType === "Car"
                            ? "green"
                            : iconColor,
                      }}
                      onClick={() => {
                        setData((prevData) =>
                          prevData.map((dataItem, dataIndex) =>
                            dataIndex === index
                              ? {
                                  ...dataItem,
                                  transportationType:
                                    dataItem.transportationType === "Car"
                                      ? ""
                                      : "Car",
                                }
                              : dataItem
                          )
                        );
                      }}
                    >
                      <Car />
                    </IconButton>
                    <IconButton
                      style={{
                        color:
                          item.transportationType === "Truck"
                            ? "green"
                            : iconColor,
                      }}
                      onClick={() => {
                        setData((prevData) =>
                          prevData.map((dataItem, dataIndex) =>
                            dataIndex === index
                              ? {
                                  ...dataItem,
                                  transportationType:
                                    dataItem.transportationType === "Truck"
                                      ? ""
                                      : "Truck",
                                }
                              : dataItem
                          )
                        );
                      }}
                    >
                      <Truck />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined" style={{ minWidth: 120 }}>
                      <InputLabel id="time-slot-label">Time Slot</InputLabel>
                      <Select
                        labelId="time-slot-label"
                        value={item.pickUpTime}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem, dataIndex) =>
                              dataIndex === index
                                ? { ...dataItem, pickUpTime: e.target.value }
                                : dataItem
                            )
                          )
                        }
                        style={{
                          color: item.pickUpTime ? "green" : iconColor,
                        }}
                        label="Time Slot"
                      >
                        {timeSlots.map((timeSlot) => (
                          <MenuItem key={timeSlot} value={timeSlot}>
                            {timeSlot}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    {eta[index] === 0 ? (
                      <>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CheckCircleIcon color="success" />
                          <Typography variant="body1" sx={{ ml: 1 }}>
                            Driver Arrived
                          </Typography>
                        </Box>
                      </>
                    ) : eta[index] !== null ? (
                      <Typography>
                        ETA: {Math.floor(eta[index] / 60)} mins{" "}
                        {eta[index] % 60} secs
                      </Typography>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={!item.transportationType || !item.pickUpTime}
                        onClick={() => handleDone(index)}
                      >
                        Done
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        ></TablePagination>
      </Card>
    </Box>
  );
};

export default DonorDashboard;
