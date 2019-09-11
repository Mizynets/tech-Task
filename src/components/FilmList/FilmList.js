import React, { Component } from "react";
import s from "./index.module.css";
import FilmListItem from "../FilmListItem";
import { filmLoaded } from '../ReduxStore/actions';
import { connect } from "react-redux";

class FilmList extends Component {
  state = {
    localStorageFilms: []
  };

  // componentDidMount = () => {
  //       const getfilms = JSON.parse(localStorage.getItem('filmArr'))
  //       this.setState({
  //         localStorageFilms: getfilms,
  //       })
  // };

  render() {
    const { searchFilm } = this.props;
  //  const filmsList = searchFilm.length === 0 ? this.state.localStorageFilms : searchFilm;
    
    const list = searchFilm.map(film => {
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

const mapDispatchToProps = {
  filmLoaded,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmList);
