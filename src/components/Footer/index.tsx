import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import { Lexend } from "@next/font/google";
import Logo from "../Logo";
import {
  data,
  socialMedia,
  footer,
  footerDetails,
} from "@/staticData/FooterData";
import style from "./style";
import { DataItem, IconLink, LinkFooter } from "@/types/links";

const lexend = Lexend({ subsets: ["latin"] });

const Footer = (): JSX.Element => {
  return (
    <Box sx={style.container}>
      <Box sx={style.semiContainer}>
        <Grid container rowGap="30px" sx={style.spacing}>
          <Grid item xs={12} sm={6} lg={3}>
            <Box sx={{ marginBottom: "2rem" }}>
              <Logo text="Rides" />
            </Box>
            <Link href="/">
              <Box sx={style.langWrap}>
                <LanguageIcon />
                <Typography sx={style.text} className={lexend.className}>
                  English
                </Typography>
              </Box>
            </Link>
          </Grid>

          {data.map((item: DataItem) => (
            <Grid item xs={12} sm={6} lg={3} key={item.title}>
              <Typography sx={style.titles} className={lexend.className}>
                {item.title}
              </Typography>
              {item.others.map((info) => (
                <Link href={info.link} key={info.label}>
                  <Typography sx={style.texts} className={lexend.className}>
                    {info.label}
                  </Typography>
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box sx={style.socialWrap}>
          <Box sx={style.socialContainer}>
            <Box sx={{ display: "flex", columnGap: "16px" }}>
              {socialMedia.map((item: IconLink) => {
                const { icon, link, id } = item;
                return (
                  <Link href={link} key={id}>
                    <Box sx={style.icons}>{icon}</Box>
                  </Link>
                );
              })}
            </Box>
            <Box sx={style.footer}>
              {footer.map((item: string) => (
                <Typography
                  key={item}
                  sx={style.fText}
                  className={lexend.className}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={style.wrap}>
            <Typography>© 2023 Rides Technology OÜ</Typography>
            <Box sx={style.semiWrap}>
              {footerDetails.map((item: LinkFooter) => {
                const { label, link } = item;
                return (
                  <Link href={link} key={label}>
                    <Typography sx={style.label} className={lexend.className}>
                      {label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
