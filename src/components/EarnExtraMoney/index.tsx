import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./style";

const EarnExtraMoney = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.wrap}>
        <Box sx={style.contentWrap}>
          <Box sx={style.extra}>
            <Typography sx={style.text}>Earn extra money driving</Typography>
            <Typography sx={style.schedule}>
              Set your own schedule, be your own boss.
            </Typography>
          </Box>
          <Link href="/driver-signup">
            <Typography sx={style.button}>SIGN UP TO DRIVE</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default EarnExtraMoney;
