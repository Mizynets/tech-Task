import React, { Component } from "react";
import s from "./index.module.css";
import FilmListItem from "../FilmListItem";
import { connect } from "react-redux";

class FilmList extends Component {
  state = {
    localStorageFilms: []
  };

  componentDidMount = () => {
        const getfilms = JSON.parse(localStorage.getItem('filmArr'))
        if(getfilms){
          this.setState({
            localStorageFilms: getfilms,
          })
        }
  };

  render() {
    const { filmList, filterInfo } = this.props;
    const {searchTypeTitle, inputValue} = filterInfo;

    const searchType = searchTypeTitle ? "Title" : "Stars";

   let listFilm = filmList.length === 0 ? this.state.localStorageFilms : filmList;
    
   let searchFilm = listFilm.filter(film => {
      return film[searchType].toLowerCase().includes(inputValue.toLowerCase().trim());
    })
  
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

const mapStateToProps = ({ filmList }) => ({
  filmList
});

export default connect(
  mapStateToProps,
  null,
)(FilmList);
