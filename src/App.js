import React from "react";
import bg4 from "./images/Bg4.png";
import grp from "./images/Group.jpg";
const App = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundRepeatX: "no-repeat",
          backgroundSize: "50% 120%",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${grp})`,
            backgroundRepeatX: "no-repeat",
            backgroundSize: "50% 120%",
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </div>
    </>
  );
};

export default App;
