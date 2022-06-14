import React from "react";
import bg4 from "./images/Bg4.png";
import grp from "./images/Group.jpg";
import grp2 from "./images/Group2.jpg";
import rect2 from "./images/Rectangle2.png";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import "./index.css";
import Nav from "./Nav";
const App = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundRepeatX: "no-repeat",
          backgroundSize: "60% 120%",
          height: "100vh",
          width: "100%",
        }}
      >
        <Nav />
        <Grid container>
          <Grid item sm={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
                fontSize: "70px",
                color: "white",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "70px",
                  textAlign: "center",
                }}
              >
                {" "}
                Study
              </Typography>

              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "70px",
                  textAlign: "center",
                }}
              >
                {" "}
                with us!
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  marginLeft: "40px",
                }}
              >
                Learn english easily on one click from your house.
              </Typography>

              <Button
                style={{
                  backgroundColor: "#FFB750",
                  color: "black",
                  marginTop: "30px",
                }}
                variant="contained"
              >
                Know More
              </Button>
            </div>
          </Grid>

          <Grid item sm={3}></Grid>

          <Grid item sm={5}>
            <div
              style={{
                display: "flex",

                height: "90vh",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${grp})`,
                  backgroundRepeatX: "no-repeat",
                  backgroundSize: "contain",
                  height: "90%",
                  width: "100%",
                  marginLeft: "20px",
                }}
              ></div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/*div 1 ends*/}

      <Grid container>
        <Grid item sm={1}></Grid>
        <Grid item sm={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div
              style={{
                height: "60%",
                width: "100%",
                backgroundImage: `url(${grp2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </Grid>
        <Grid item sm={1}></Grid>
        <Grid item sm={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              height: "100vh",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "60px",

                color: "black",
              }}
            >
              WHAT DO WE DO?
            </Typography>

            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "25px",
                fontWeight: "200",
                color: "black",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </Grid>
      </Grid>

      {/* div2 ends*/}

      <div
        style={{
          backgroundImage: `url(${rect2})`,
          backgroundRepeatX: "no-repeat",
          backgroundSize: "75% 120%",
          height: "100vh",
          width: "100%",
        }}
      ></div>
    </>
  );
};

export default App;
