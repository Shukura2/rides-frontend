import color from "@/assets/base/colors";

const style = {
  container: {
    position: "static",
    background: color.green.main,
    borderBottom: "1px solid grey",
    justifyContent: "center",
    height: "80px",
  },
  toolboxWrap: {
    maxWidth: "1536px",
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "16px",
      fontWeight: 500,
    },
  },
  wrap: {
    textAlign: "center",
    "&:hover": {
      background: color.black.main,
    },
  },
  link: {
    color: color.black.main,
    marginBottom: "10px",
    "&:hover": {
      background: color.gray.focus,
      borderRadius: "15px",
    },
  },
  activeLink: {
    background: color.gray.focus,
    borderRadius: "15px",
  },
  linkPad: {
    padding: "10px 20px",
  },
  head: {
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: 500,
    fontSize: "18px",
  },
  ridesWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: "25px",
    rowGap: "25px",
  },
  ridesCard: {
    background: color.white.main,
    borderRadius: "20px",
    padding: { xs: "15px", md: "25px" },
    textAlign: "center",
    boxShadow: "0 0 5px 2px #888888",
  },
  align: {
    display: "flex",
    justifyContent: "center",
  },
  driverImg: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  driverName: {
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: "20px",
    textTransform: "capitalize",
  },
  detailsWrap: {
    textAlign: "left",
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
  },
  details: {
    fontWeight: 600,
    textTransform: "capitalize",
  },
  actionBtn: {
    borderRadius: "15px",
    background: color.blue.main,
    color: color.white.main,
    "&:hover": { background: color.blue.main },
  },
  iconSize: {
    fontSize: "30px",
  },
  layout: {
    backgroundColor: color.green.main,
    maxWidth: "1536px",
    margin: "0 auto",
  },
  sideBar: {
    padding: { xs: 0, md: "0 18px" },
  },
  profilePicWrap: {
    width: "50px",
    height: "50px",
    background: "red",
    borderRadius: "50%",
    objectFit: "cover",
  },
  profilePicAvatarWrap: {
    width: "50px",
    height: "50px",
    background: color.blue.main,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "28px",
    color: color.white.main,
  },
};

export default style;
