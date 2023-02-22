import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PassengerLayout from "@/components/layouts/PassengerLayout";
import { getAllOffers } from "@/services/passenger";
import style from "@/components/PassengerDashboard/style";

const Dashboard = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [rides, setRides] = useState<null>(null);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(3);
  const [totalPages, setTotalPages] = useState<number>(1);

  const response = async () => {
    setIsloading(true);
    try {
      const offers = await getAllOffers(page, size);
      setRides(offers.message);
      setTotalPages(offers.totalSize);
      setIsloading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    response();
  }, [page, size]);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 3);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 3);
    }
  };

  return (
    <Box sx={{ padding: "25px" }}>
      <Typography sx={style.head}>Meet available driver's</Typography>
      <Box sx={style.ridesWrap}>
        {rides &&
          rides.map((ride) => {
            const {
              ride_offer_id: rideOfferId,
              driver_first_name: driverFirstName,
              driver_last_name: driverLastName,
              driver_phone_number: driverPhoneNumber,
              driver_profile_pic: driverProfilePic,
              amount,
              location,
              destination,
            } = ride;
            return (
              <Box key={rideOfferId} sx={style.ridesCard}>
                <Box sx={style.align}>
                  <Box
                    component="img"
                    src={driverProfilePic}
                    sx={style.driverImg}
                  />
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
                <Button variant="contained" sx={style.actionBtn} fullWidth>
                  Join Ride
                </Button>
              </Box>
            );
          })}
      </Box>

      <Box sx={{ textAlign: "center", padding: "30px 0" }}>
        <Button onClick={handlePrevPage}>
          <NavigateBeforeIcon sx={style.iconSize} />
        </Button>
        <Button onClick={handleNextPage}>
          <NavigateNextIcon sx={style.iconSize} />
        </Button>
      </Box>
    </Box>
  );
};

Dashboard.getLayout = PassengerLayout;
Dashboard.auth = true;
export default Dashboard;
