import { Grid } from "@material-ui/core";
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
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "10vh",
            }}
          >
            Nav
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
