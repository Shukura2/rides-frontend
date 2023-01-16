import color from "@/assets/base/colors";

const style = {
  container: {
    background: "#d9fde5",
  },
  wrapCenter: {
    maxWidth: "1536px",
    margin: "0 auto",
  },
  gridContainer: {
    justifyContent: { xs: "flex-start", md: "center" },
    padding: { xs: "56px 25px", md: "7rem 0" },
    rowGap: { xs: "44px", md: 0 },
  },
  imgWrap: {
    padding: { xs: "0 10px", lg: "0 20px" },
  },
  item: {
    display: "flex",
    flexDirection: { xs: "row", md: "column" },
    columnGap: { xs: "24px", md: "0" },
  },
  imgContainer: {
    maxWidth: { xs: "80px", md: "162px" },
    maxHeight: "162px",
    marginBottom: "60px",
    marginTop: { xs: "0", md: "60px" },
  },
  imgResponsive: {
    width: "100%",
    height: "100%",
  },
  ride: {
    fontSize: "30px",
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: { xs: "10px", md: "16px" },
    color: color.black.main,
  },
  subs: {
    fontSize: "18px",
    color: "#818391",
  },
  others: {
    maxWidth: { xs: "70px", md: "140px" },
    maxHeight: "140px",
    marginBottom: "45px",
    marginTop: { xs: "0", md: "30px" },
  },
  othersWrap: {
    maxWidth: { xs: "70px", md: "140px" },
    maxHeight: "140px",
    marginBottom: "50px",
  },
};

export default style;
