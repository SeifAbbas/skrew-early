import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import dummyData from "../../dummyData.json";

const DropoffSchedule = ({ open, setOpen, setAlertState }) => {
  const donor = dummyData.DonorSignIn;

  const dataTimeNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 16);

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
          <Typography
            sx={{
              display: "inline",
              color: "text.primary",
              margin: "1em 0",
              lineHeight: "1.5",
              fontSize: "1.1em",
            }}
            component="span"
            variant="body2"
          >
            {`Name: ${donor.firstName} ${donor.lastName}`}
            <br />
            {`Email: ${donor.email}`}
            <br />
            {`Role: ${donor.role}`}
            <br />
            {`Phone Number: ${donor.mobile}`}
            <br />
          </Typography>
          <TextField
            autoFocus
            required
            margin="dense"
            type="datetime-local"
            fullWidth
            variant="standard"
            defaultValue={dataTimeNow}
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
