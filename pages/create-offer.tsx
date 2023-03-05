import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DriverLayout from "@/components/layouts/DriverLayout";
import { validateOffers } from "@/validationSchema/auth";
import { OffersType } from "@/types";
import { offerData } from "@/staticData/PassengerDashboard";
import { createOffers } from "@/services/driver";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";

const CreateOffers = (): JSX.Element => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const formik = useFormik<OffersType>({
    initialValues: {
      location: "",
      destination: "",
      amount: 0,
    },
    validationSchema: validateOffers,
    onSubmit: async (values, { resetForm }) => {
      try {
        const addRide = await createOffers(values);
        setSuccessMessage(addRide.message);
      } catch (error: any) {
        setErrorMessage(error.response.data.message);
      }
      resetForm();
    },
  });
  return (
    <Box sx={{ maxWidth: "1536px", margin: "0 auto", padding: "20px" }}>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
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
          {offerData.map((item) => {
            const { label, type, name, placeholder } = item;
            return (
              <TextField
                key={name}
                label={label}
                type={type}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                fullWidth
                focused
                margin="normal"
              />
            );
          })}
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

CreateOffers.getLayout = DriverLayout;
CreateOffers.auth = true;
export default CreateOffers;
