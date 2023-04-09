import color from "../../assets/base/colors";

const style = {
  container: {
    background: "#32bb78",
  },
  wrap: {
    maxWidth: "1536px",
    margin: "0 auto",
  },
  contentWrap: {
    padding: { xs: "35px 25px", lg: "80px 0 64px" },
    display: "flex",
    justifyContent: { xs: "flex-start", lg: "center" },
    alignItems: "start",
    flexWrap: "wrap",
  },
  extra: {
    marginRight: { xs: "0", sm: "150px" },
  },
  text: {
    fontSize: { xs: "28px", md: "34px" },
    lineHeight: 1.2,
    fontWeight: 600,
    color: color.white.main,
  },
  schedule: {
    fontSize: "18px",
    margin: "8px 0 18px",
    color: color.white.main,
  },
  button: {
    background: color.white.main,
    color: color.black.main,
    fontSize: "16px",
    textTransform: "capitalize",
    borderRadius: "40px",
    padding: { xs: "8px 16px", md: "16px 36px" },
    ":hover": {
      background: color.white.main,
      color: color.black.main,
    },
  },
};

export default style;
