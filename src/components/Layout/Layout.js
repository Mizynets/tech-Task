import React from "react";
import s from './index.module.css';

const Layout = props => {
  return <div className={s.Layout}>{props.children}</div>;
};

export default Layout;
