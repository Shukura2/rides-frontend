import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../src/redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { validateSignup } from "../src/validationSchema/auth";
import { signUpField } from "../src/staticData/authData";
import { FormValues } from "../src/types";
import style from "../src/components/SignUpPassenger/style";
import SnackbarNotification from "../src/components/SignUpPassenger/SnackbarNotification";
import GoogleIcon from "../public/images/GoogleIcon";
import { addPassenger } from "../src/features/userSlice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SignUpPassenger = (): JSX.Element => {
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
        const resultAction = await dispatch(addPassenger(values));
        const originalPromiseResult = unwrapResult(resultAction);
        setSuccessMessage(originalPromiseResult.message);
        setTimeout(() => {
          router.push("/available-rides");
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
              autoHideDuration={10000}
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
                <Link href={`${API_URL}/v1/auth/google`}>
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              minHeight: { xs: "666px", lg: "0" },
            }}
          >
            <Image
              src="/images/smiling-passenger.jpg"
              alt="Woman Pix"
              fill
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpPassenger;
