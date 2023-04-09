import Link from "next/link";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import color from "../../assets/base/colors";
import style from "./style";
import { pages } from "../../staticData/PassengerDashboard";

const SidebarMax = () => {
  const router = useRouter();
  return (
    <List>
      {pages.map((item) => {
        const { icon, label, link } = item;
        return (
          <Link href={link} key={link}>
            <ListItem
              sx={
                `${router.pathname}` === `${link}`
                  ? [style.link, style.activeLink]
                  : style.link
              }
            >
              <ListItemIcon
                sx={{
                  minWidth: "0",
                  marginRight: "15px",
                  color: color.black.main,
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText sx={style.listItemText}>{label}</ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default SidebarMax;
