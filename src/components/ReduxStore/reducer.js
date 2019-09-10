import { FILM_LOADED } from "./constants";
import { CREATE_NEW_FILM } from "./constants";
import { DELETE_FILM } from "./constants";
import { SEACRH_FILM } from './constants';

const initialState = {
  filmList: [],
  searchFilm: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILM_LOADED:

    return {
        filmList: [...state.filmList, ...action.payload],
        searchFilm: [...state.filmList, ...action.payload],
      };

    case CREATE_NEW_FILM:
      return {
        filmList: [action.payload, ...state.filmList],
        searchFilm: [action.payload, ...state.filmList],
      };

    case DELETE_FILM:
      const deletedFilm = state.filmList.filter(film => film.Title !== action.payload);
      return {
        filmList: deletedFilm,
        searchFilm: deletedFilm,
      };

    case SEACRH_FILM: 
    const { searchTypeTitle, inputValue } = action.payload;
    const { filmList } = state;
    let searchType = searchTypeTitle ? "Title" : "Stars";
    let searchedFilm = filmList.filter(film => {
      return film[searchType].toLowerCase().includes(inputValue.toLowerCase().trim());
    })

    return{
      ...state,
      searchFilm: searchedFilm,
    }

    default:
      return state;
  }
};

export default reducer;
