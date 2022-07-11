import React, { useEffect, useState } from "react";
import bg3 from "./images/Bg3.png";
import bg4 from "./images/Bg4.png";
import grp from "./images/Group.png";
import grp2 from "./images/Group2.jpg";
import rect2 from "./images/Rectangle2.png";
import e3 from "./images/Ellipse3.jpg";
import e1 from "./images/Ellipse1.jpg";
import customer from "./images/Customer.png";

import facebook from "./images/Facebook.jpg";
import insta from "./images/Instagram.jpg";
import Pinterest from "./images/Pinterest.jpg";
import Twitter from "./images/Twitter.jpg";
import Youtube from "./images/YouTube.jpg";
import Linkdin from "./images/LinkedIn.jpg";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import "./index.css";
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExitingRight: {
    animation: `$myEffectExitright 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItem3: {
    animation: `$myEffectExit3 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes myEffectExitright": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },

  "@keyframes myEffectExit3": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundRepeatX: "no-repeat",
          backgroundSize: "63% 120%",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${bg4})`,
            backgroundRepeatX: "no-repeat",
            backgroundSize: "60% 120%",
            height: "100vh",
            width: "100%",
          }}
        >
          <div style={{ height: "10vh" }}>
            <Nav />
          </div>

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

            <Grid item sm={5}>
              <div
                style={{
                  display: "flex",
                  transform: `${
                    document.documentElement.scrollTop === 0
                      ? "translateX(0%)"
                      : "translateX(-200%)"
                  } ${console.log(
                    document.documentElement.scrollTop,
                    "grp2"
                  )}}`,

                  height: "90vh",
                }}
                className={
                  document.documentElement.scrollTop === 0
                    ? classes.animatedItem
                    : ""
                }
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
          {console.log(document.documentElement.scrollTop)}
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
      >
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid item sm={5}>
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
                MEET YOUR TUTOR
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
          <Grid item sm={1}></Grid>
          <Grid item sm={5}>
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
                  position: "relative",
                  height: "60%",
                  width: "100%",
                  backgroundImage: `url(${e3})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "45px",
                    height: "80%",
                    width: "50%",
                    backgroundImage: `url(${customer})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/*  div 3 ends */}

      <div style={{ height: "100vh", marginTop: "100px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "60px",

              color: "black",
            }}
          >
            OUR BOOKS
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100%",
          postion: "fixed",
        }}
      >
        <div
          style={{
            height: "35vh",
            width: "100%",

            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${e1})`,
            backgroundPosition: "0% 100%",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "60px",
              marginTop: "20px",
              color: "white",
            }}
          >
            Want to know more about us?
          </Typography>
        </div>

        <div style={{ height: "20vh", marginTop: "50px" }}>
          <Grid container>
            <Grid item sm={3}></Grid>

            <Grid item sm={2}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "black",
                }}
              >
                About
              </Typography>

              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Courses
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                What we do
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Who are we
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Blog
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Books
              </Typography>
            </Grid>

            <Grid item sm={2}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "black",
                }}
              >
                Support
              </Typography>

              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                24 hr support
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Help Centre
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Community
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Customer Care
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Research
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Contact
              </Typography>
            </Grid>

            <Grid item sm={2}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "black",
                }}
              >
                Contact Us
              </Typography>

              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                24 hr support
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Help Centre
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Community
              </Typography>
            </Grid>

            <Grid item sm={3}></Grid>
          </Grid>
        </div>
      </div>
      {/*div 4 footer*/}
      <hr style={{ border: "1px solid black" }} />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <div style={{ margin: "10px" }}>
            <img src={facebook} style={{ height: "50px" }} alt="facebook" />
            <img src={insta} style={{ height: "50px" }} alt="facebook" />{" "}
            <img src={Pinterest} style={{ height: "50px" }} alt="facebook" />{" "}
            <img src={Twitter} style={{ height: "50px" }} alt="facebook" />{" "}
            <img src={Youtube} style={{ height: "50px" }} alt="facebook" />{" "}
            <img src={Linkdin} style={{ height: "50px" }} alt="facebook" />{" "}
          </div>

          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "200",
              color: "black",
              marginLeft: "600px",
            }}
          >
            Terms and Conditions
          </Typography>

          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "200",
              color: "black",
              marginLeft: "30px",
            }}
          >
            Privacy Policy
          </Typography>
        </div>
      </div>
    </>
  );
};

export default App;
