import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SnackbarTypes } from "@/types/auth";

const SnackbarNotification = ({
  open,
  autoHideDuration,
  onClose,
  severity,
  variant,
  message,
}: SnackbarTypes) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
      <Alert severity={severity} variant={variant}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
