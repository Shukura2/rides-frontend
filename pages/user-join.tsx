import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { userJoinRide } from "@/services/driver";
import DriverLayout from "@/components/layouts/DriverLayout";
import style from "@/components/PassengerDashboard/style";
import { OffersResponseType } from "@/types";

const UserJoin = (): JSX.Element => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [offers, setOffers] = useState<null | OffersResponseType>(null);

  const getUserJoinedRide = async () => {
    setIsloading(true);
    try {
      const response = await userJoinRide();
      setOffers(response.message);
      setIsloading(false);
    } catch (error: any) {
      setOffers(error.message);
    }
  };

  useEffect(() => {
    getUserJoinedRide();
  }, []);

  return (
    <Box sx={{ padding: "25px", width: { xs: "100%", md: "35%" } }}>
      {isLoading && <h4>Loading...</h4>}
      {offers && (
        <Box sx={style.ridesCard}>
          <Box component="img" src={offers.profilePic} sx={style.driverImg} />
          <Typography sx={style.driverName}>
            {offers.firstName} {offers.lastName}
          </Typography>
          <Typography
            sx={{ fontWeight: 600, lineHeight: 1.2, marginTop: "10px" }}
          >
            {offers.phoneNumber}
          </Typography>
        </Box>
      )}
      {!offers && <Typography>No offers yet!!!</Typography>}
    </Box>
  );
};

UserJoin.getLayout = DriverLayout;
UserJoin.auth = true;
export default UserJoin;
