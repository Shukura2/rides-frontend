import color from "@/assets/base/colors";

const style = {
  background: {
    background: color.blue.main,
  },
  wrapper: {
    maxWidth: "1536px",
    margin: "0 auto",
  },
  align: {
    padding: {
      xs: "30px 45px",
      md: "50px",
      xxl: "130px 42px 80px 100px",
    },
  },
  main: {
    fontSize: { xs: "38px", md: "72px" },
    fontWeight: 700,
    lineHeight: 1.4,
    color: color.white.main,
    marginBottom: "44px",
    marginTop: { xs: "32px", lg: "0" },
  },
  link: {
    textTransform: "uppercase",
    color: color.white.main,
    marginBottom: "32px",
    display: "flex",
  },
  imageWrap: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default style;
