import Link from "next/link";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Lexend } from "@next/font/google";
import { pages } from "@/staticData/NavbarData";
import { NavLink } from "@/types/links";
import style from "./style";

const lexend = Lexend({ subsets: ["latin"] });

const DrawerComponent = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page: NavLink) => {
            const { link, path } = page;
            return (
              <ListItem key={link} onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link href={path}>
                    <Typography
                      sx={style.drawerLink}
                      className={lexend.className}
                    >
                      {link}
                    </Typography>
                  </Link>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
