import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className={s.Header}>
      <Link className={s.link} to="/">HOME</Link>
      <Link className={s.link} to="/add">ADD FILM</Link>
    </div>
  )
};

export default Header;
