import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { userJoinRide } from "@/services/driver";
import DriverLayout from "@/components/layouts/DriverLayout";
import style from "@/components/PassengerDashboard/style";
import { OffersResponseType } from "@/types";
import styleOffer from "@/components/PagesStyle/style";

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
      setIsloading(false);
      setOffers(error.message);
    }
  };

  useEffect(() => {
    getUserJoinedRide();
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      {offers && (
        <Box sx={styleOffer.offersWrap}>
          <Box sx={style.ridesCard}>
            <Box component="img" src={offers.profilePic} sx={style.driverImg} />
            <Typography sx={style.driverName}>
              {offers.firstName} {offers.lastName}
            </Typography>
            <Typography sx={styleOffer.offersTel}>
              {offers.phoneNumber}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

UserJoin.getLayout = DriverLayout;
UserJoin.auth = true;
export default UserJoin;
