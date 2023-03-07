import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { editMyOffer } from "@/services/driver";
import SnackbarNotification from "../SignUpPassenger/SnackbarNotification";
import { MyOffer } from "@/types";
import style from "../PagesStyle/style";

const OfferData = ({
  amount,
  created_at,
  destination,
  location,
  status,
  ride_offer_id,
  handleDelete,
  handleEdit,
  offer,
  setOffer,
}: MyOffer) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const handleClose = () => {
    setOpenDialog(false);
  };
  const editOffer = async () => {
    try {
      const response = await editMyOffer(ride_offer_id, offer);
      setSuccessMessage(response.message);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleClose();
    editOffer();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };
  return (
    <>
      <tr>
        <td>{location}</td>
        <td>{destination}</td>
        <td>{amount}</td>
        <td>{created_at}</td>
        <td>{status}</td>
        <td>
          <Button
            onClick={() => {
              handleEdit(ride_offer_id);
              setOpenDialog(true);
            }}
            type="button"
          >
            <EditIcon />
          </Button>
        </td>
        <td>
          <Button
            onClick={() => handleDelete(ride_offer_id)}
            type="button"
            sx={{ color: "red" }}
          >
            <DeleteIcon />
          </Button>
        </td>
      </tr>
      {openDialog && (
        <Dialog open={openDialog} onClose={handleClose} sx={style.paper}>
          <Box sx={style.offerTitleWrap}>
            <DialogTitle sx={{ padding: "0" }}>Edit Offer</DialogTitle>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <form>
            <DialogContent sx={{ padding: "0" }}>
              <TextField
                label="Location"
                type="text"
                name="location"
                value={offer.location}
                onChange={handleChange}
                fullWidth
                focused
                margin="normal"
              />
              <TextField
                label="Destination"
                type="text"
                name="destination"
                value={offer.destination}
                onChange={handleChange}
                fullWidth
                focused
                margin="normal"
              />
              <TextField
                label="Amount"
                type="number"
                name="amount"
                value={offer.amount}
                onChange={handleChange}
                fullWidth
                focused
                margin="normal"
              />
            </DialogContent>
            <DialogActions sx={{ padding: "0" }}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ textTransform: "inherit" }}
              >
                Update offer
              </Button>
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
      )}
    </>
  );
};

export default OfferData;
