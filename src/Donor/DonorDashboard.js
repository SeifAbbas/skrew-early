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
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Motorcycle from "@mui/icons-material/TwoWheeler";
import Truck from "@mui/icons-material/LocalShipping";
import Car from "@mui/icons-material/DriveEta";

const DonorDashboard = () => {
  const timeSlots = ["07:30", "08:00", "08:30", "09:00", "09:30", "10:00"];

  const theme = useTheme();
  const [iconColor, setIconColor] = useState(
    theme.palette.mode === "dark" ? "white" : "black"
  );

  useEffect(() => {
    setIconColor(theme.palette.mode === "dark" ? "white" : "black");
  }, [theme.palette.mode]);

  const [isSelectedTransportation, setIsSelectedTransportation] =
    useState(false);

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
    {
      itemName: "O+ Blood",
      category: "Blood Donation",
      itemQuantity: 7,
      donationDate: "2024-05-21",
      transportationType: "",
      pickUpTime: "",
    },
  ]);

  const handleDone = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", mt: 5, p: 2 }}>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          backgroundColor: "#f5f5f5",
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
          style={{ color: "rgba(128, 128, 128, 0.7)", fontWeight: "bold" }}
        >
          Please select schedule and transportation for donation pick-up
        </Typography>
        <Table style={{ fontFamily: "Arial", fontSize: "18px" }}>
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
            {data.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: item.done ? "lightgreen" : "transparent",
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
                      setIsSelectedTransportation(
                        (prevSelected) => !prevSelected
                      );
                    }}
                  >
                    <Motorcycle />
                  </IconButton>
                  <IconButton
                    style={{
                      color:
                        item.transportationType === "Car" ? "green" : iconColor,
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
                      setIsSelectedTransportation(
                        (prevSelected) => !prevSelected
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
                      setIsSelectedTransportation(
                        (prevSelected) => !prevSelected
                      );
                    }}
                  >
                    <Truck />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Select
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
                  >
                    <MenuItem value="" disabled>
                      Choose time slot
                    </MenuItem>
                    {timeSlots.map((timeSlot) => (
                      <MenuItem key={timeSlot} value={timeSlot}>
                        {timeSlot}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!item.transportationType || !item.pickUpTime}
                    onClick={() =>
                      setData((prevData) =>
                        prevData.map((dataItem, dataIndex) =>
                          dataIndex === index
                            ? { ...dataItem, done: true }
                            : dataItem
                        )
                      )
                    }
                  >
                    Done
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default DonorDashboard;
