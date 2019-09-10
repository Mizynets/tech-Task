import React, { Component } from "react";
import s from "./index.module.css";
import FilmListItem from "../FilmListItem";
import { connect } from "react-redux";

class FilmList extends Component {
  state = {
    localStorageFilms: []
  };

  componentDidMount = () => {
    const getFilmsFromFile = JSON.parse(localStorage.getItem("filmArr"));
    if(getFilmsFromFile){
      this.setState({
              localStorageFilms: getFilmsFromFile,
            })
    }
    
  };

  render() {
    const { searchFilm } = this.props;
    const filmsList =
      searchFilm.length !== 0 ? [ ...searchFilm] : [...this.state.localStorageFilms];
      console.log(filmsList);
  
    const list = filmsList.map(film => {
      const { Title, ReleaseYear, Format, Stars } = film;
      return (
        <li key={film.Title} className={s.listItem}>
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

    return <ul className={s.filmList}>{list}</ul>;
  }
}

const mapStateToProps = ({ searchFilm }) => ({
  searchFilm
});

export default connect(
  mapStateToProps,
  null
)(FilmList);
