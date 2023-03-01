import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormValues } from "@/types";
import { phoneNumberValidate } from "@/validationSchema/auth";
import { addPhoneNumber } from "@/services/user";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";
import style from "@/components/PagesStyle/telephone";

const Telephone = (): JSX.Element => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const formik = useFormik<FormValues>({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: phoneNumberValidate,
    onSubmit: async (values, { resetForm }) => {
      try {
        const addPhone = await addPhoneNumber(values);
        setSuccessMessage(addPhone.message);
        resetForm();
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    },
  });
  return (
    <Box sx={style.container}>
      <Box sx={style.wrap}>
        <Typography sx={style.rides}>Rides</Typography>
        <Typography sx={{ marginTop: "50px", fontSize: "30px" }}>
          Tap a button,
        </Typography>
        <Typography sx={{ fontSize: "30px" }}>get a ride.</Typography>
      </Box>
      <Box sx={style.wrapper}>
        <Box sx={style.box}>
          <Typography sx={style.start}>Get started with your</Typography>
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
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ width: "60%" }}>
              <TextField
                variant="standard"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={formik.values["phoneNumber"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched["phoneNumber"] &&
                  Boolean(formik.errors["phoneNumber"])
                }
                helperText={
                  formik.touched["phoneNumber"] && formik.errors["phoneNumber"]
                }
                sx={style.customInput}
                color="white"
                fullWidth
              />
            </Box>

            <Button type="submit" sx={style.cta}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

Telephone.auth = true;
export default Telephone;
