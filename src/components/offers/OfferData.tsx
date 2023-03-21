import React, { Dispatch, SetStateAction, useState } from "react";
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

type OfferType = MyOffer & {
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  offerDetails: MyOffer | any;
  setOfferDetails: Dispatch<MyOffer | any>;
  render: boolean;
  setRender: Dispatch<SetStateAction<boolean>>;
};

const OfferData = ({
  amount,
  created_at,
  destination,
  location,
  status,
  ride_offer_id,
  handleDelete,
  handleEdit,
  offerDetails,
  setOfferDetails,
  render,
  setRender,
}: OfferType) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOfferDetails({ ...offerDetails, [name]: value });
  };

  const editOffer = async () => {
    if (!offerDetails) return;
    try {
      const response = await editMyOffer(ride_offer_id, offerDetails);
      setSuccessMessage(response.message);
      setRender(!render);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleClose();
    editOffer();
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
                value={offerDetails && offerDetails.location}
                onChange={handleChange}
                fullWidth
                focused
                margin="normal"
              />
              <TextField
                label="Destination"
                type="text"
                name="destination"
                value={offerDetails && offerDetails.destination}
                onChange={handleChange}
                fullWidth
                focused
                margin="normal"
              />
              <TextField
                label="Amount"
                type="number"
                name="amount"
                value={offerDetails && offerDetails.amount}
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
          </form>
        </Dialog>
      )}
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
    </>
  );
};

export default OfferData;
