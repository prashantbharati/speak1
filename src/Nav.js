import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import logo from "./images/Logo.jpg";
import useStyles from "./styles2.js";
const Nav = () => {
  const classes = useStyles();
  return (
    <div id="header" className={classes.header}>
      <Grid container>
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            height: "10vh",
            width: "100px",
            margin: "5px 0px 0px 5px",
          }}
        ></div>

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
                color: `${
                  document.documentElement.scrollTop === 0 ? "black" : "white"
                }`,
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
                color: `${
                  document.documentElement.scrollTop === 0 ? "black" : "white"
                }`,
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
        console.log(document.documentElement.scrollTop);

        var header = document.getElementById("header");
        header.classList.toggle(classes.headersticky, window.scrollY > 0);

        var t1 = document.getElementById("t1");
        t1.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var t2 = document.getElementById("t2");
        t2.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var t3 = document.getElementById("t3");
        t3.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var t4 = document.getElementById("t4");
        t4.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var t5 = document.getElementById("t5");
        t5.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var ld = document.getElementById("ld");
        ld.classList.toggle(classes.headerld, window.scrollY > 0);
      })}
    </div>
  );
};

export default Nav;
