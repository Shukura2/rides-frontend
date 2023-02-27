import { useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { authSelectors } from "@/features/userSlice";
import { editUserProfile } from "@/services/passenger";
import SnackbarNotification from "./SignUpPassenger/SnackbarNotification";

const EditProfile = ({ isOpen, handleClickClose }) => {
  const {
    user: {
      userInfo: { firstName, lastName },
    },
  } = useSelector(authSelectors);

  const [userData, setUserData] = useState({
    firstName,
    lastName,
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChageUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const editProfile = async () => {
    try {
      const response = await editUserProfile(userData);
      setSuccessMessage(response.message);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClickClose();
    editProfile();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClickClose}
      sx={{
        "& .MuiDialog-paper": {
          padding: "10px 20px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle sx={{ padding: "0" }}>Edit my profile</DialogTitle>
        <IconButton onClick={handleClickClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <form>
        <DialogContent sx={{ padding: "0" }}>
          <TextField
            key="firstName"
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={userData.firstName}
            onChange={handleChageUserData}
            fullWidth
            focused
            margin="normal"
          />
          <TextField
            key="lastName"
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={userData.lastName}
            onChange={handleChageUserData}
            fullWidth
            focused
            margin="normal"
          />
        </DialogContent>
        <DialogActions sx={{ padding: "0" }}>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </DialogActions>

        <SnackbarNotification
          open={true}
          autoHideDuration={4000}
          onClose={handleErrorClose}
          severity="error"
          variant="filled"
          message={errorMessage}
        />
        <SnackbarNotification
          open={successMessage.length > 0}
          autoHideDuration={4000}
          onClose={handleSuccessClose}
          severity="success"
          variant="filled"
          message={successMessage}
        />
      </form>
    </Dialog>
  );
};

export default EditProfile;
