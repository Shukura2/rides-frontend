import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginField } from "@/staticData/authData";
import { validateLogin } from "@/validationSchema/auth";
import { LoginValues } from "@/types/auth";
import style from "@/components/SignUpPassenger/style";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";
import { userLogin } from "@/features/userSlice";

const LoginPassenger = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const handleClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const formik = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateLogin,
    onSubmit: async (values, { resetForm }) => {
      try {
        const resultAction = await dispatch(userLogin(values));
        const originalPromiseResult = unwrapResult(resultAction);
        setSuccessMessage(originalPromiseResult.message);

        const { userType } = originalPromiseResult.userInfo;

        if (userType === "passenger") {
          setTimeout(() => {
            router.push("/available-rides");
          }, 1500);
          return;
        }
        if (userType === "driver") {
          setTimeout(() => {
            router.push("/create-offer");
          }, 1500);
          return;
        }
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
          <Grid item xs={12} md={5} sx={style.gridWrap}>
            <SnackbarNotification
              open={errorMessage.length > 0}
              autoHideDuration={4000}
              onClose={handleClose}
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
            <Typography sx={style.title}>Login</Typography>
            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
              {loginField.map((field) => {
                const { type, label, name, placeholder } = field;
                return (
                  <TextField
                    key={name}
                    type={type}
                    label={label}
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
            <Box sx={style.createAcct}>
              <Typography>Don't have an account?</Typography>
              <Link href="/passenger-signup">
                <Typography sx={style.linkBtn}>Create Account</Typography>
              </Link>
            </Box>
            <Box sx={style.createAcct}>
              <Typography>Forget Password?</Typography>
              <Link href="/recover-password">
                <Typography sx={style.linkBtn}>Recover Password</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} item md={6} sx={{ maxHeight: "576px" }}>
            <Box
              component="img"
              alt="Smiling passenger"
              src="/images/smiling-passenger.jpg"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPassenger;
