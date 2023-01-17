import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Lexend } from "@next/font/google";
import style from "./style";

const lexend = Lexend({ subsets: ["latin"] });

const EarnExtraMoney = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.wrap}>
        <Box sx={style.contentWrap}>
          <Box sx={style.extra}>
            <Typography sx={style.text} className={lexend.className}>
              Earn extra money driving
            </Typography>
            <Typography sx={style.schedule} className={lexend.className}>
              Set your own schedule, be your own boss.
            </Typography>
          </Box>
          <Link href="/driver-signup">
            <Typography sx={style.button} className={lexend.className}>
              SIGN UP TO DRIVE
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default EarnExtraMoney;
