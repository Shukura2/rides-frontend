import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Lexend } from "@next/font/google";
import DrawerComponent from "./Drawer";
import { pages } from "@/staticData/NavbarData";
import style from "./style";
import { NavLink } from "@/types/links";
import Logo from "../Logo";

const lexend = Lexend({ subsets: ["latin"] });

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav>
      <AppBar sx={style.navbarWrap} elevation={0}>
        <Toolbar sx={style.toolbar}>
          <Grid container sx={style.navWrap}>
            <Grid item xs={1}>
              <Logo text="Rides" />
            </Grid>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <Grid item xs={10.75} display="flex">
                {pages.map((page: NavLink) => {
                  const { link, path } = page;
                  return (
                    <Link href={path} key={link}>
                      <Typography
                        sx={style.navLink}
                        className={lexend.className}
                      >
                        {link}
                      </Typography>
                    </Link>
                  );
                })}
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
