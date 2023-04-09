import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../../PassengerDashboard/Navbar";
import SidebarMax from "../../DriverDashboard/SidebarMax";
import SidebarMin from "../../PassengerDashboard/SidebarMin";
import style from "../../PassengerDashboard/style";
import color from "../../../assets/base/colors";

const PassengerLayout = (page: any) => {
  const theme = useTheme();
  const isSidebarMax = useMediaQuery(theme.breakpoints.up("xl"));
  const [show, setShow] = useState(false);

  const handleClick = (show: boolean) => {
    setShow(!show);
  };

  return (
    <Box sx={{ backgroundColor: color.green.main }}>
      <Box sx={style.layout}>
        <Navbar handleClick={handleClick} />
        <Grid container>
          <Grid item lg={1.85} sx={style.sideBar}>
            {isSidebarMax && !show && <SidebarMax />}
            {isSidebarMax && show && <SidebarMin />}
          </Grid>
          <Grid item xs={12} lg={10.15}>
            {page}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PassengerLayout;
