import { FILM_LOADED } from "./constants";
import { CREATE_NEW_FILM } from "./constants";
import { DELETE_FILM } from "./constants";

const initialState = {
  filmList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILM_LOADED:
      let newFilmList = [...state.filmList, ...action.payload];
      return {
        filmList: newFilmList
      };

    case CREATE_NEW_FILM:
      let newFilm = action.payload;
      let newArrFilm = [...state.filmList, newFilm];
      return {
        filmList: newArrFilm
      };

    case DELETE_FILM:
      let deletedFilm = state.filmList.filter(film => film.Title !== action.payload);
      return {
        filmList: deletedFilm
      };
    default:
      return state;
  }
};

export default reducer;
