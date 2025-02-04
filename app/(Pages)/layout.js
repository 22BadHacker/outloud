import React from "react";
import Header from "../Component/Header";
import Marquee from "../Component/Marquee";

const Layout = ({ children }) => {
  return <div>
    <Marquee />
    <Header />
    {children}
  </div>;
};

export default Layout;