import color from "@/assets/base/colors";

const style = {
  container: {
    backgroundColor: color.white.main,
  },
  semiContainer: {
    maxWidth: "1536px",
    margin: "0 auto",
  },
  spacing: {
    padding: {
      xs: "50px 25px 0",
      md: "28px 40px",
      xl: "56px 72px 0px",
    },
  },
  langWrap: {
    display: "flex",
    backgroundColor: color.gray.main,
    padding: "7px 15px",
    borderRadius: "10px",
    cursor: "pointer",
    color: color.black.main,
    width: "115px",
  },
  text: {
    marginLeft: "5px",
    fontSize: "16px",
    fontWeight: 600,
  },
  titles: {
    fontWeight: 600,
  },
  texts: {
    marginTop: "16px",
    color: color.black.main,
    ":hover": { color: color.blue.main },
  },
  socialWrap: {
    margin: { xs: "0px", md: "0 49.5px" },
    padding: "24px",
  },
  socialContainer: {
    padding: { xs: "0", md: "24px" },
    marginBottom: "24px",
    display: "flex",
    justifyContent: { xs: "center", lg: "space-between" },
    borderBottom: "1px solid #F0F0F0",
    flexWrap: "wrap",
    rowGap: "15px",
  },
  icons: {
    background: color.gray.main,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: color.black.main,
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: "12px",
    rowGap: "20px",
  },
  fText: {
    background: color.gray.main,
    color: color.black.main,
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: 600,
    cursor: "pointer",
  },
  wrap: {
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    flexWrap: "wrap",
  },
  semiWrap: {
    display: "flex",
    columnGap: "16px",
    flexWrap: "wrap",
  },
  label: {
    color: color.black.main,
    ":hover": { color: color.blue.main },
  },
};

export default style;
