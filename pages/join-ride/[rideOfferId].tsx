import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getSelectRide } from "@/services/passenger";
import PassengerLayout from "@/components/layouts/PassengerLayout";
import { joinRide } from "@/services/passenger";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";
import { SelectedJoin } from "@/types/responses";
import style from "@/components/PagesStyle/joinRide";

const SingleOffer = (): JSX.Element => {
  const router = useRouter();
  const { rideOfferId } = router.query;
  const [offerData, setOfferData] = useState<SelectedJoin>({
    driverFirstName: "",
    driverLastName: "",
    driverPhoneNumber: "",
    driverProfilePic: "",
    amount: 0,
    location: "",
    destination: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const getRides = async () => {
    const response = await getSelectRide(rideOfferId as string);
    setOfferData(response.message);
  };

  useEffect(() => {
    if (!rideOfferId) return;
    getRides();
  }, [rideOfferId]);

  const userJoinRide = async () => {
    try {
      const response = await joinRide(rideOfferId as string);
      setSuccessMessage(response.message);
      setDisable(true);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const {
    amount,
    destination,
    driverFirstName,
    driverLastName,
    driverPhoneNumber,
    driverProfilePic,
    location,
  } = offerData;

  return (
    <Box sx={style.container}>
      <Box sx={style.wrapper}>
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
        <Link href="/available-rides">
          <Button
            variant="contained"
            sx={{ marginBottom: "30px", textTransform: "capitalize" }}
          >
            Back
          </Button>
        </Link>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={5.7}>
            <Box
              component="img"
              src={driverProfilePic}
              alt="Profile pic"
              sx={{ objectFit: "cover", width: "100%" }}
            />
          </Grid>
          <Grid item md={5.7}>
            <Typography sx={style.text}>
              {driverFirstName} {driverLastName}
            </Typography>
            <Typography sx={style.adjust}>{driverPhoneNumber}</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              From {location} to {destination}
            </Typography>
            <Typography sx={style.adjust}>&#x20A6;{amount}</Typography>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              disabled={disable}
              onClick={userJoinRide}
            >
              Join
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

SingleOffer.auth = true;
SingleOffer.getLayout = PassengerLayout;
export default SingleOffer;
