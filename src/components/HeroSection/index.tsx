import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastIcon from "@mui/icons-material/East";
import { Lexend } from "@next/font/google";
import style from "./style";

const lexend = Lexend({ subsets: ["latin"] });

const HeroSection = (): JSX.Element => {
  return (
    <Box sx={style.background}>
      <Box sx={style.wrapper}>
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={12} lg={6} sx={style.align}>
            <Typography sx={style.main} className={lexend.className}>
              The fast, affordable way to ride.
            </Typography>

            <Link href="/">
              <Typography sx={style.link} className={lexend.className}>
                Request a ride online
                <span>
                  <EastIcon sx={{ marginLeft: "16px" }} />
                </span>
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              maxHeight: "770px",
            }}
          >
            <Box
              component="img"
              src="/images/smiling-girl.jpg"
              sx={style.imageWrap}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
