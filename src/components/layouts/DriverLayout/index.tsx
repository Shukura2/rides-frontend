import { useState } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import DriverDashboardNavbar from "@/components/DriverDashboard/Navbar";
import SidebarMax from "@/components/DriverDashboard/SidebarMax";
import style from "@/components/PassengerDashboard/style";

const DriverLayout = (page: any) => {
  const theme = useTheme();
  const [show, setShow] = useState<boolean>(false);
  const isSidebarMax = useMediaQuery(theme.breakpoints.up("xl"));

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box sx={style.layout}>
      <DriverDashboardNavbar handleClick={handleClick} />
      <Grid container>
        <Grid item lg={1.75}>
          {isSidebarMax && !show && <SidebarMax />}
          {isSidebarMax && show && <SidebarMax />}
        </Grid>
        <Grid item xs={12} lg={10.25}>
          {page}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DriverLayout;
