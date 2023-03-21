import color from "@/assets/base/colors";

const style = {
  container: {
    maxWidth: "1536px",
    margin: "0 auto",
  },
  wrap: {
    height: "80vh",
    background: color.green.main,
    clipPath: "polygon(0 0, 100% 0%, 100% calc(100% - 10vw), 0% 100%)",
    marginBottom: "-10vw",
    padding: "30px",
  },
  rides: {
    fontSize: "60px",
    fontWeight: 700,
    color: color.blue.main,
    position: "relative",
    "&:before": {
      content: `""`,
      position: "absolute",
      border: "3px solid #1976d2",
      bottom: "0",
      width: "80px",
      borderRadius: "10px",
    },
  },
  wrapper: {
    height: "50vh",
    background: color.blue.main,
  },
  box: {
    zIndex: 1,
    position: "relative",
    padding: { xs: "50px", md: "115px 50px 0", xl: "185px 50px" },
  },
  start: {
    fontSize: "20px",
    color: color.white.main,
    marginBottom: "10px",
  },
  customInput: {
    input: {
      "&::after": {
        color: "white !important",
      },
      "&::placeholder": {
        color: "white !important",
        opacity: "1",
        fontSize: "18px",
      },
    },
  },
  cta: {
    background: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    marginTop: "15px",
    "&:hover": {
      background: "white",
    },
  },
};

export default style;
