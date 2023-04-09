import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateEmail } from "../src/validationSchema/auth";
import MainLayout from "../src/components/layouts/MainLayout";
import style from "../src/components/PagesStyle/recoverPassword";
import { resetPassword } from "../src/services/user";
import { FormValues } from "../src/types";
import SnackbarNotification from "../src/components/SignUpPassenger/SnackbarNotification";

const RecoverPassword = (): JSX.Element => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
    },
    validationSchema: validateEmail,
    onSubmit: async (values) => {
      try {
        const addPassword = await resetPassword(values);
        setSuccessMessage(addPassword.message);
      } catch (error: any) {
        setErrorMessage(error.response.data.message);
      }
    },
  });
  return (
    <Box sx={style.container}>
      <Box sx={style.boxWrap}>
        <Box sx={style.passwordWrap}>
          <Typography sx={style.text}>Forgot password?</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Reset password in two quick steps
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              type="email"
              label="Email"
              name="email"
              placeholder="Your email"
              value={formik.values["email"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched["email"] && Boolean(formik.errors["email"])}
              helperText={formik.touched["email"] && formik.errors["email"]}
              fullWidth
              focused
              sx={{ margin: "35px 0" }}
            />
            <Button fullWidth type="submit" variant="contained" sx={style.cta}>
              Reset password
            </Button>
          </form>

          <Box sx={{ textAlign: "center" }}>
            <Link href="/login">
              <span style={{ color: "black" }}>Back</span>
            </Link>
          </Box>
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
        </Box>
      </Box>
    </Box>
  );
};

RecoverPassword.getLayout = MainLayout;
export default RecoverPassword;
