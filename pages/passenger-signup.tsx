import { Lexend } from "@next/font/google";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { validateSignup } from "@/validationSchema/auth";
import { signUpField } from "@/staticData/SignupData";
import { FormValues } from "@/types/auth";
import style from "@/components/SignUpPassenger/style";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const lexend = Lexend({ subsets: ["latin"] });

const SignUpPassenger = (): JSX.Element => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleClose = () => setErrorMessage("");
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
        const { data } = await axios({
          method: "post",
          baseURL: `${API_URL}/v1/auth/passenger/signup`,
          data: values,
        });
        setSuccessMessage(data.message);
        resetForm();
      } catch (error: any) {
        const message = error.response.data.message;
        setErrorMessage(message);
      }
    },
  });
  return (
    <Box sx={style.wrap}>
      <Box sx={style.container}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={6} lg={4.5} sx={style.gridWrap}>
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

            <Typography sx={style.title} className={lexend.className}>
              Sign Up
            </Typography>

            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
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
                    color="black"
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
          <Grid item md={6} lg={4.5} sx={{ maxHeight: "576px" }}>
            <Box
              component="img"
              alt="Smiling passenger"
              src="/images/smiling-passenger.jpg"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpPassenger;
