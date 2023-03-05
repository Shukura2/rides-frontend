import { useState } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import Navbar from "@/components/PassengerDashboard/Navbar";
import SidebarMax from "@/components/PassengerDashboard/SidebarMax";
import SidebarMin from "@/components/PassengerDashboard/SidebarMin";
import style from "@/components/PassengerDashboard/style";
import color from "@/assets/base/colors";

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
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={style.sideBar}>
            {isSidebarMax && !show && <SidebarMax />}
            {isSidebarMax && show && <SidebarMin />}
          </Box>
          <Box>{page}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PassengerLayout;
