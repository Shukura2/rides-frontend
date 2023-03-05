import Link from "next/link";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import style from "../PassengerDashboard/style";
import { pages } from "@/staticData/driverDashboard";

const SidebarMax = (): JSX.Element => {
  const router = useRouter();
  return (
    <List sx={{ padding: "10px 20px" }}>
      {pages.map((item) => {
        const { label, link } = item;
        return (
          <Link href={link} key={link}>
            <ListItem
              sx={
                `${router.pathname}` === `${link}`
                  ? [style.link, style.activeLink]
                  : style.link
              }
            >
              <ListItemText sx={style.listItemText}>{label}</ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default SidebarMax;
