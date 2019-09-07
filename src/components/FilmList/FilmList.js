import React from "react";
import s from "./index.module.css";
import FilmListItem from "../FilmListItem";
import { connect } from "react-redux";

const FilmList = props => {
  const { filmList } = props;
  let list = filmList.map(film => {
    const { Title, ReleaseYear, Format, Stars } = film;
    return (
      <li key={film.Title}>
        <FilmListItem
          title={Title}
          year={ReleaseYear}
          format={Format}
          stars={Stars}
          id={Title}
        />
      </li>
    );
  });

  return <ul className={s.FilmList}>{list}</ul>;
};

const mapStateToProps = state => {
  return {
    filmList: state.filmList
  };
};

export default connect(
  mapStateToProps,
  null
)(FilmList);
