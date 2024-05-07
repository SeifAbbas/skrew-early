import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import NewRequest from "../NewRequest";
import dummyData from "../../dummyData.json";

const EditRequest = ({ row, setRows, openEditMode, setOpenEditMode }) => {
  const [formFields, setFormFields] = useState(
    dummyData.organizationNewRequest
  );

  const [chosenCategory, setChosenCategory] = useState("clothes");

  const handleEdit = () => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((prevRow) => {
        if (prevRow.Name === row.Name) {
          prevRow.Type = chosenCategory;
          return {
            ...prevRow,
          };
        }
        return prevRow;
      });
      return updatedRows;
    });

    handleClose();
  };

  const handleClose = () => {
    setOpenEditMode(false);
  };

  return (
    <>
      <Dialog open={openEditMode} onClose={handleClose}>
        <DialogTitle>{"Edit Request for " + row.Name}</DialogTitle>
        <DialogContent>
          <NewRequest
            showInPopup={true}
            formFields={formFields}
            setFormFields={setFormFields}
            chosenCategory={chosenCategory}
            setChosenCategory={setChosenCategory}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleEdit}
            color="inherit"
            style={{ backgroundColor: "steelblue" }}
          >
            Edit
          </Button>
          <Button
            onClick={handleClose}
            color="inherit"
            style={{ backgroundColor: "red" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditRequest;
