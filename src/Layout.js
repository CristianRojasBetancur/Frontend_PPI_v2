import React from "react";
import Navbar from "./components/Navbar";

const Layout = (props) => {
  return (
    <>
      <div className="container-fluid d-block">
        <Navbar />
      </div>
      {props.children}
    </>
  );
};

export default Layout;
