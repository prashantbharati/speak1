import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    position: "fixed",
    transition: "transform .5s ease-in-out",
    width: "100%",
    display: "flex",
    justifContent: "space-evenly",

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

  button: {
    // display: "table-cell",
    padding: "8px 30px",
    marginLeft: "30px",
    backgroundColor: "#68CBC1",
    color: "white",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "500",
    letterSpacing: "0.2px",

    borderStyle: "none",
    borderRadius: "999px 999px 999px 999px",
    boxShadow: "0px 5px 15px 0px rgb(39 48 112 / 51%)",
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
    position: "relative",

    // color: "#fff",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "200",
    fontFamily: "Poppins",

    letterSpacing: "2px",
    color: "#fff",
  },

  headerul: {
    position: "relative",
    fontFamily: "Poppins",
    display: "flex",
  },

  headerulli: {
    fontFamily: "Poppins",
    position: "relative",
    listStyle: "none",
  },

  headerullia: {
    position: "relative",

    textDecoration: "none",
    color: "#000",

    fontWeight: "500px",
    fontSize: "17px",
    transition: "0.6s",
  },

  banner: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "url(admin-ajax.jpg)",
    backgroundSize: "cover",
  },
}));
