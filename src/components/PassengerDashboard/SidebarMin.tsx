import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./style";
import { pages } from "@/staticData/PassengerDashboard";

const SidebarMin = () => {
  const router = useRouter();
  return (
    <Box sx={{ width: "112px", textAlign: "center" }}>
      {pages.map((item) => {
        const { icon, label, link } = item;
        return (
          <Link href={link} key={link}>
            <Box
              sx={
                `${router.pathname}` === `${link}`
                  ? [style.link, style.linkPad, style.activeLink]
                  : [style.link, style.linkPad]
              }
            >
              <Typography>{icon}</Typography>
              <Typography sx={{ fontWeight: 500, lineHeight: 1.2 }}>
                {label}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default SidebarMin;
