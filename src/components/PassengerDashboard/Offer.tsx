import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import style from "./style";
import { Offers } from "@/types/responses";
import Link from "next/link";

const Offer = ({
  ride_offer_id: rideOfferId,
  driver_first_name: driverFirstName,
  driver_last_name: driverLastName,
  driver_phone_number: driverPhoneNumber,
  driver_profile_pic: driverProfilePic,
  amount,
  location,
  destination,
}: Offers) => {
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
      <Link href={`/join-ride/${rideOfferId}`}>
        <Button variant="contained" sx={style.actionBtn} fullWidth>
          Join Ride
        </Button>
      </Link>
    </Box>
  );
};

export default Offer;
