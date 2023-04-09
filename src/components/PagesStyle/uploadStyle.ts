import color from "../../assets/base/colors";

const style = {
  container: {
    display: "grid",
    placeContent: "center",
    height: "100vh",
  },
  box: {
    boxShadow: "0 0 5px 2px #888888",
    padding: "25px 20px",
    borderRadius: "10px",
    margin: { xs: "0 30px", md: "0" },
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
  },
  upload: {
    border: "1px dashed #929292",
    borderRadius: "10px",
    background: color.white.main,
    width: "100%",
    padding: { xs: "10px", md: "20px" },
    marginBottom: "30px",
    "&:hover": {
      background: color.white.main,
    },
  },
  file: {
    marginX: "5px",
    color: "#858585",
    fontSize: { xs: "13px", md: "16px" },
  },
  wrap: {
    marginX: "5px",
    color: "#4C7EFC",
    fontSize: { xs: "13px", md: "16px" },
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default style;
