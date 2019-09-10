import React from "react";
import s from "./index.module.css";
import { connect } from "react-redux";
import { deleteFilm } from "../ReduxStore/actions";

const FilmListItem = ({ title, year, format, stars, id, deleteFilm }) => {
  return (
    <div className={s.filmListItem}>
      <p className={s.text}>
        <span className={s.spanText}>Name: </span>
        {title}
      </p>
      <p className={s.text}>
        <span className={s.spanText}>Release Year: </span>
        {year}
      </p>
      <p className={s.text}>
        <span className={s.spanText}>Format: </span>
        {format}
      </p>
      <p className={s.text}>
        <span className={s.spanText}>Stars: </span>
        {stars}
      </p>
      <button className={s.btn} onClick={() => deleteFilm(id)}>
        Delete Film
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteFilm
};

export default connect(
  null,
  mapDispatchToProps
)(FilmListItem);
