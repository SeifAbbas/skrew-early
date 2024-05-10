import { Alert, AlertTitle, Snackbar } from "@mui/material";

const Alerts = ({ alertState, setAlertState }) => {
  return (
    <Snackbar
      open={alertState !== "off"}
      autoHideDuration={2000}
      onClose={() => setAlertState("off")}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      {((alertState === "Deleted" || alertState === "Rejected") && (
        <Alert severity="error">
          <AlertTitle>{alertState}</AlertTitle>
        </Alert>
      )) ||
        (alertState !== "off" && (
          <Alert severity="success">
            <AlertTitle>{alertState}</AlertTitle>
          </Alert>
        ))}
    </Snackbar>
  );
};

export default Alerts;
