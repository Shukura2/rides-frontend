import color from "@/assets/base/colors";

const style = {
  wrap: {
    background: color.white.main,
  },
  container: {
    maxWidth: "1536px",
    margin: "0 auto",
    padding: { xs: "0", md: "70px 0" },
  },
  gridWrap: {
    background: color.gray.main,
    padding: "30px",
  },
  title: {
    fontWeight: 600,
    fontSize: "28px",
    color: color.blue.main,
    textAlign: "center",
  },
  signupWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },
  linkBtn: {
    color: color.black.main,
    background: "rgba(76, 126, 252, 0.1)",
    padding: "10px 20px",
    borderRadius: "20px",
  },
  authWrap: {
    display: "flex",
    alignItems: "center",
    background: color.white.main,
    color: color.black.main,
    padding: "10px 20px",
    borderRadius: "20px",
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  authText: {
    marginLeft: "10px",
    xs: "14px",
    lg: "16px",
  },
  createAcct: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "25px",
    flexWrap: "wrap",
    rowGap: "15px",
  },
};

export default style;
