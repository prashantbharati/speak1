import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    position: "fixed",

    width: "100%",
    display: "flex",
    justifContent: "space-evenly",
    transition: "0.6s",
    zIndex: "100",
  },

  headersticky: {
    fontSize: "20px",
    transition: "transform .5s ease-in-out",
    height: "13vh",
    background: "rgba(0, 0, 0, 0.45);",
    backdropFilter: "saturate(180%) blur(20px)",
  },

  typography: {
    fontFamily: "Poppins",
    fontSize: "20px",
    marginLeft: "50px",
    color: "white",
    fontWeight: "100",
  },

  headerlogo: {
    position: "relative",
    fontWeight: "700",
    color: "#fff",
    textDecoration: "none",
    fontSize: "2em",
    fontFamily: "Poppins",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  headerstickylogo: {
    // position: "relative",

    // color: "#fff",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "200",
    fontFamily: "Poppins",

    // letterSpacing: "2px",
  },
}));
