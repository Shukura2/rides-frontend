import color from "@/assets/base/colors";

const style = {
  navbarWrap: {
    height: "4rem",
    backgroundColor: color.white.main,
    position: "sticky",
    top: "0px",
    justifyContent: "center",
    borderBottom: "1px solid #eee",
  },
  toolbar: {
    maxWidth: "1536px",
    alignSelf: "center",
    width: "100%",
  },
  rides: {
    color: "#0000FF",
    fontSize: "24px",
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: "__Lexend_4bc04a",
  },
  drawerLink: {
    padding: "12px 20px",
    color: color.black.main,
    fontWeight: 500,
    lineHeight: 1.2,
    fontFamily: "__Lexend_4bc04a",
  },
  navWrap: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 25px",
  },
  navLink: {
    padding: "12px 20px",
    color: color.black.main,
    fontWeight: 500,
    fontFamily: "__Lexend_4bc04a",
    lineHeight: 1.2,
    ":hover": {
      backgroundColor: "#F0F0F0",
      borderRadius: "5px",
    },
  },
};

export default style;
