import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PassengerLayout from "@/components/layouts/PassengerLayout";
import { getAllOffers } from "@/services/passenger";
import style from "@/components/PassengerDashboard/style";
import Offer from "@/components/PassengerDashboard/Offer";
import { JoinOffers } from "@/types/responses";

const Dashboard = (): JSX.Element => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [rides, setRides] = useState<null | JoinOffers[]>(null);
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

  if (rides && rides.length < 1) {
    return <Typography>No rides yet</Typography>;
  }

  return (
    <Box sx={{ padding: { xs: "5px", md: "25px" } }}>
      <Typography sx={style.head}>Meet available driver's</Typography>
      <Box sx={style.ridesWrap}>
        {rides &&
          rides.map((ride) => <Offer key={ride.ride_offer_id} {...ride} />)}
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
