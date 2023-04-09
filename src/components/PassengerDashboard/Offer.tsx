import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import style from "./style";
import { JoinOffers } from "../../types";
import { authSelectors } from "../../features/userSlice";

const Offer = ({
  ride_offer_id: rideOfferId,
  driver_first_name: driverFirstName,
  driver_last_name: driverLastName,
  driver_phone_number: driverPhoneNumber,
  driver_profile_pic: driverProfilePic,
  amount,
  location,
  destination,
}: JoinOffers) => {
  const router = useRouter();
  const {
    user: { userInfo },
  } = useSelector(authSelectors);

  const handleRoute = () => {
    localStorage.setItem("offerId", JSON.stringify(rideOfferId));

    if (userInfo && !userInfo.phoneNumber) {
      router.push("/telephone");
      return;
    }
    if (userInfo && !userInfo.profilePic) {
      router.push("/upload-profile-pic");
      return;
    }
    router.push(`/join-ride/${rideOfferId}`);
  };

  return (
    <Box sx={style.ridesCard}>
      <Box sx={style.align}>
        <Box component="img" src={driverProfilePic} sx={style.driverImg} />
      </Box>
      <Box sx={{ margin: "20px 0" }}>
        <Typography sx={style.driverName}>
          {driverFirstName} {driverLastName}
        </Typography>
        <Typography sx={{ fontWeight: 600, lineHeight: 1.2 }}>
          {driverPhoneNumber}
        </Typography>
      </Box>

      <Divider />
      <Box sx={style.detailsWrap}>
        <Box sx={{ width: "150px" }}>
          <Typography>Location</Typography>
          <Typography>Destination</Typography>
          <Typography>Amount</Typography>
        </Box>
        <Box sx={{ width: "150px" }}>
          <Typography sx={style.details}>{location}</Typography>
          <Typography sx={style.details}>{destination}</Typography>
          <Typography sx={style.details}>&#x20A6;{amount}</Typography>
        </Box>
      </Box>
      <Button
        onClick={handleRoute}
        variant="contained"
        sx={style.actionBtn}
        fullWidth
      >
        Join Ride
      </Button>
    </Box>
  );
};

export default Offer;
