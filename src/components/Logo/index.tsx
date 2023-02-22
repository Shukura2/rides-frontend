import Link from "next/link";
import Typography from "@mui/material/Typography";
import style from "./style";
import { Props } from "@/types/props";

const Logo = ({ text }: Props) => {
  return (
    <Link href="/">
      <Typography sx={style.rides}>
        {text}
      </Typography>
    </Link>
  );
};

export default Logo;
