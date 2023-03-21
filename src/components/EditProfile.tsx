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
import style from "./PagesStyle/style";
import { EditProfileType } from "@/types";

const EditProfile = ({
  isOpen,
  handleClickClose,
  setIsOpen,
}: EditProfileType) => {
  const { firstName, lastName } = useSelector(authSelectors).user.userInfo!!;

  const [userData, setUserData] = useState({
    firstName,
    lastName,
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChageUserData = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const editProfile = async () => {
    try {
      const response = await editUserProfile(userData);
      setSuccessMessage(response.message);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    editProfile();

    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onClose={handleClickClose} sx={style.dialogWrag}>
      <Box sx={style.dialogBox}>
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
          open={errorMessage.length > 0}
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
