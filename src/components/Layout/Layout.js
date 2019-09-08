import React from "react";
import s from "./index.module.css";
import Header from "../Header";

const Layout = props => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.inner}>{props.children}</div>
    </div>
  );
};

export default Layout;
