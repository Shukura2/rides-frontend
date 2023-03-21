import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logo from "../Logo";
import color from "@/assets/base/colors";
import style from "./style";
import { pages } from "@/staticData/PassengerDashboard";
import { OpenType } from "@/types";

const PassengerDrawer = ({ open, setOpen }: OpenType): JSX.Element => {
  const handleCloseDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer open={open} onClose={handleCloseDrawer}>
      <Box sx={{ display: "flex", padding: "15px" }}>
        <IconButton
          sx={{ marginRight: "8px", color: color.black.main }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Logo text="Rides" />
      </Box>

      <List sx={{ margin: "0 15px" }}>
        {pages.map((page) => (
          <Link href={page.link} key={page.label}>
            <ListItem sx={style.link} onClick={handleCloseDrawer}>
              <ListItemIcon
                sx={{
                  minWidth: "0",
                  marginRight: "24px",
                  color: color.black.main,
                }}
              >
                {page.icon}
              </ListItemIcon>
              <ListItemText>{page.label}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default PassengerDrawer;
