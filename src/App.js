import React from "react";
import bg4 from "./images/Bg4.png";
import grp from "./images/Group.jpg";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import "./index.css";
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
        <Grid container>
          <Grid item sm={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
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
                  marginLeft: "50px",
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
        </Grid>

        {/* <div
          style={{
            backgroundImage: `url(${grp})`,
            backgroundRepeatX: "no-repeat",
            backgroundSize: "50% 120%",
            height: "100vh",
            width: "100%",
          }}
        ></div> */}
      </div>
    </>
  );
};

export default App;
