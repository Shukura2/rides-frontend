import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { signUpField } from "@/staticData/authData";
import { FormValues } from "@/types/auth";
import { validateSignup } from "@/validationSchema/auth";
import style from "@/components/SignUpPassenger/style";
import GoogleIcon from "../public/images/GoogleIcon";
import { addDriver } from "@/features/userSlice";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";

const DriverSignup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validateSignup,
    onSubmit: async (values, { resetForm }) => {
      try {
        const resultAction = await dispatch(addDriver(values));
        const originalPromiseResult = unwrapResult(resultAction);
        setSuccessMessage(originalPromiseResult.message);
        setTimeout(() => {
          router.push("/driver-dashboard");
        }, 1500);
        resetForm();
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    },
  });
  return (
    <Box sx={style.wrap}>
      <Box sx={style.container}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={5} sx={style.gridWrap}>
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
            <Box sx={style.signupWrap}>
              <Typography sx={style.title}>Sign Up</Typography>
              <Link href="/login">
                <Typography sx={style.linkBtn}>Login</Typography>
              </Link>
            </Box>

            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link href="/">
                  <Box sx={style.authWrap}>
                    <GoogleIcon />
                    <Typography sx={style.authText}>
                      continue with google
                    </Typography>
                  </Box>
                </Link>
              </Box>
              {signUpField.map((field) => {
                const { name, label, type, placeholder } = field;
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
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "25px" }}
              >
                submit
              </Button>
            </form>
          </Grid>
          <Grid item md={6} sx={{ maxHeight: "676px" }}>
            <Box
              component="img"
              alt="Smiling passenger"
              src="/images/cab-driver.jpg"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DriverSignup;
