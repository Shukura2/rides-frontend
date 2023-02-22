import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import style from "./style";

const GetRide = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.wrapCenter}>
        <Grid container sx={style.gridContainer}>
          <Grid item md={3.74} sx={style.imgWrap}>
            <Box sx={style.item}>
              <Box sx={style.imgContainer}>
                <Box
                  component="img"
                  src="/images/car-image.svg"
                  sx={style.imgResponsive}
                />
              </Box>
              <Box>
                <Typography sx={style.ride}>Get a ride</Typography>
                <Typography sx={style.subs}>
                  Bolt offers you a ride in minutes.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={3.74} sx={style.imgWrap}>
            <Box sx={style.item}>
              <Box sx={style.others}>
                <Box
                  component="img"
                  src="/images/coins-image.svg"
                  sx={style.imgResponsive}
                />
              </Box>
              <Box>
                <Typography sx={style.ride}>The best prices</Typography>
                <Typography sx={style.subs}>
                  We aim to offer the best ride prices in every city. See for
                  yourself!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3.74} sx={style.imgWrap}>
            <Box sx={style.item}>
              <Box sx={style.othersWrap}>
                <Box
                  component="img"
                  src="/images/phone-image.svg"
                  sx={style.imgResponsive}
                />
              </Box>
              <Box>
                <Typography sx={style.ride}>Easy to use</Typography>
                <Typography sx={style.subs}>
                  Get wherever you need to go as quickly as possible.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GetRide;
