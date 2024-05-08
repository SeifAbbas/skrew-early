import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const DropoffSchedule = ({ open, setOpen, setAlertState }) => {
  const handleSchedule = () => {
    handleClose();
    setAlertState("Scheduled");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Schedule Donation Dropoff"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            type="datetime-local"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSchedule} color="inherit">
            Schedule
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

export default DropoffSchedule;
