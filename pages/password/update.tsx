import { useRouter } from "next/router";
import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MainLayout from "@/components/layouts/MainLayout";
import { validatePassword } from "@/validationSchema/auth";
import style from "@/components/PagesStyle/recoverPassword";
import { updatePassword } from "@/services/user";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";

const UpdatePassword = (): JSX.Element => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const router = useRouter();
  const { token } = router.query;

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validatePassword,
    onSubmit: async (values) => {
      try {
        const { password } = values;
        const data = { token, password };
        const newPassword = await updatePassword(data);
        setSuccessMessage(newPassword.message);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch (error: any) {
        setErrorMessage(error.response.data.message);
      }
    },
  });

  return (
    <Box sx={style.container}>
      <Box sx={style.boxWrap}>
        <Box sx={style.passwordWrap}>
          <Typography sx={style.text}>Choose new password.</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Create a new password that is atleast 6 characters long.
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              type="password"
              label="New password"
              name="password"
              placeholder="Your password"
              value={formik.values["password"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched["password"] && Boolean(formik.errors["password"])
              }
              helperText={
                formik.touched["password"] && formik.errors["password"]
              }
              fullWidth
              focused
              sx={{ margin: "35px 0" }}
            />
            <Button fullWidth variant="contained" type="submit" sx={style.cta}>
              Submit
            </Button>
          </form>
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

UpdatePassword.getLayout = MainLayout;
export default UpdatePassword;
