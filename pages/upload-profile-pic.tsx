import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";
import { uploadProfilePics } from "@/services/user";
import { validateFileUpload } from "@/validationSchema/auth";
import style from "@/components/PagesStyle/uploadStyle";
import { authSelectors } from "@/features/userSlice";

const UploadProfilePic = (): JSX.Element => {
  const router = useRouter();
  const [fileInfo, setFileInfo] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [rideOfferId, setRideOfferId] = useState<string>("");
  const {
    user: { userInfo },
  } = useSelector(authSelectors);

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  useEffect(() => {
    if (userInfo?.userType === "passenger") {
      const getOfferId = JSON.parse(localStorage.getItem("offerId") || "");
      if (getOfferId) {
        setRideOfferId(getOfferId);
        return;
      }
      return;
    }
  }, []);

  return (
    <Box sx={{ maxWidth: "1536px", margin: "0 auto" }}>
      <Formik
        initialValues={{ image: "" }}
        validationSchema={validateFileUpload}
        onSubmit={async (values) => {
          const formData = new FormData();
          formData.append("image", values.image);
          try {
            const upload = await uploadProfilePics(formData);
            setSuccessMessage(upload.message);
            setTimeout(() => {
              if (userInfo && userInfo.userType === "driver") {
                router.push("/create-offer");
                return;
              }
              router.push(`/join-ride/${rideOfferId}`);
            }, 3000);
          } catch (error: any) {
            setErrorMessage(error.response.data.message);
            if (error.response.data.error) {
              setErrorMessage(error.response.data.error);
              return;
            }
          }
        }}
      >
        {(formik) => {
          return (
            <Box sx={style.container}>
              <Box sx={style.box}>
                <Form>
                  <Typography sx={style.title}>Profile Picture</Typography>
                  <Typography>Please upload a picture</Typography>
                  <Button component="label" sx={style.upload}>
                    <CloudUploadIcon />
                    <Typography sx={style.file}>
                      Drop files here to upload or
                    </Typography>
                    <span>
                      <Typography sx={style.wrap}>Choose file</Typography>
                      <input
                        type="file"
                        onChange={(event) => {
                          if (event.currentTarget.files != null) {
                            formik.setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                          }
                          const file = event.currentTarget.files;
                          const fileName = file && file[0].name;
                          if (fileName) {
                            setFileInfo(fileName);
                          }
                        }}
                        hidden
                      />
                    </span>
                  </Button>
                  {formik.touched.image && (
                    <FormHelperText error>
                      {formik.errors.image as string}
                    </FormHelperText>
                  )}

                  <Typography>File name</Typography>
                  <Box sx={style.input}>
                    <input
                      type="text"
                      readOnly
                      value={fileInfo}
                      style={{ padding: "10px" }}
                    />
                    <Button type="submit" variant="contained">
                      Upload
                    </Button>
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
                </Form>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};

UploadProfilePic.auth = true;
export default UploadProfilePic;
