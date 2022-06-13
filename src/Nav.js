import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import logo from "./images/Logo.jpg";
const Nav = () => {
  return (
    <div>
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
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",

                color: "white",
                fontWeight: "100",
              }}
            >
              Home
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                marginLeft: "50px",
                color: "white",
                fontWeight: "300",
              }}
            >
              About us
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                marginLeft: "50px",
                color: "white",
                fontWeight: "300",
              }}
            >
              Shop
            </Typography>{" "}
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                marginLeft: "50px",
                color: "black",
                fontWeight: "500",
              }}
            >
              Support
            </Typography>{" "}
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                marginLeft: "50px",
                color: "black",
                fontWeight: "500",
              }}
            >
              Contact us
            </Typography>
          </div>
        </Grid>

        <Grid item sm={1}></Grid>
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
    </div>
  );
};

export default Nav;
