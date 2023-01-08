import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Lexend } from "@next/font/google";
import style from "./style";
import { Props } from "@/types/props";

const lexend = Lexend({ subsets: ["latin"] });

const Logo = ({ text }: Props) => {
  return (
    <Link href="/">
      <Typography sx={style.rides} className={lexend.className}>
        {text}
      </Typography>
    </Link>
  );
};

export default Logo;
