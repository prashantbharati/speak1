import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import logo from "./images/Logo.jpg";
import useStyles from "./styles2.js";
const Nav = () => {
  const classes = useStyles();
  return (
    <div id="header" className={classes.header}>
      <Grid container>
        <Grid item sm={1}>
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              height: "10vh",
            }}
          ></div>
        </Grid>

        <Grid item sm={2}></Grid>

        <Grid item={7}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}
          >
            <Typography
              id="t1"
              className={classes.typography}
              style={{ marginLeft: "0px" }}
            >
              Home
            </Typography>
            <Typography
              id="t2"
              className={classes.typography}
              style={{
                marginLeft: "50px",
              }}
            >
              About us
            </Typography>
            <Typography
              id="t3"
              className={classes.typography}
              style={{
                fontWeight: "300",
              }}
            >
              Shop
            </Typography>{" "}
            <Typography
              id="t4"
              className={classes.typography}
              style={{
                marginLeft: "60px",
                color: "black",
                fontWeight: "500",
              }}
            >
              Support
            </Typography>{" "}
            <Typography
              id="t5"
              className={classes.typography}
              style={{
                marginLeft: "50px",
                color: "black",
                fontWeight: "500",
              }}
            >
              Contact us
            </Typography>
          </div>
        </Grid>

        <Grid item sm={1} id="ld"></Grid>
        <Grid item sm={2}>
          {" "}
          <Button
            style={{
              backgroundColor: "#002A29",
              color: "white",
              marginTop: "13px",
              marginLeft: "100px",
            }}
            variant="contained"
          >
            Join Now
          </Button>
        </Grid>
      </Grid>

      {window.addEventListener("scroll", function () {
        var header = document.getElementById("header");
        header.classList.toggle(classes.headersticky, window.scrollY > 0);

        var logo = document.getElementById("t1");
        logo.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var home = document.getElementById("t2");
        home.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var filter = document.getElementById("t3");
        filter.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var iwell = document.getElementById("t4");
        iwell.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var blog = document.getElementById("t5");
        blog.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var aboutus = document.getElementById("ld");
        aboutus.classList.toggle(classes.headerld, window.scrollY > 0);

        var urbanecology = document.getElementById("urbanecology");
        urbanecology.classList.toggle(
          classes.headerstickylogo,
          window.scrollY > 0
        );
      })}
    </div>
  );
};

export default Nav;
