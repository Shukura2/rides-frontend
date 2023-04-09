import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DriverLayout from "../src/components/layouts/DriverLayout";
import { validateOffers } from "../src/validationSchema/auth";
import { OffersType, OfferDetails } from "../src/types";
import { createOffers } from "../src/services/driver";
import SnackbarNotification from "../src/components/SignUpPassenger/SnackbarNotification";
import { authSelectors } from "../src/features/userSlice";
import { offerData } from "../src/staticData/PassengerDashboard";

const CreateOffers = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const {
    user: { userInfo },
  } = useSelector(authSelectors);

  const formik = useFormik<OffersType>({
    initialValues: {
      location: "",
      destination: "",
      amount: 0,
    },
    validationSchema: validateOffers,
    onSubmit: async (values, { resetForm }) => {
      if (userInfo && !userInfo.phoneNumber) {
        router.push("/telephone");
        return;
      } else if (userInfo && !userInfo.profilePic) {
        router.push("/upload-profile-pic");
        return;
      } else {
        setIsloading(true);
        try {
          const addRide = await createOffers(values);
          setSuccessMessage(addRide.message);
          setIsloading(false);
        } catch (error: any) {
          setErrorMessage(error.response.data.message);
        }
        resetForm();
      }
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
          {offerData.map((item: OfferDetails) => {
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
        {isLoading && <Typography>Loading...</Typography>}
      </Box>
    </Box>
  );
};

CreateOffers.getLayout = DriverLayout;
CreateOffers.auth = true;
export default CreateOffers;
