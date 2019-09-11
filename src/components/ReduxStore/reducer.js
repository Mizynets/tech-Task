import { FILM_LOADED } from "./constants";
import { CREATE_NEW_FILM } from "./constants";
import { DELETE_FILM } from "./constants";

const initialState = {
  filmList: [],
  newAddFilm: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILM_LOADED:

    return {
      ...state,
        filmList: [...state.newAddFilm, ...action.payload],
      };

    case CREATE_NEW_FILM:
      return {
        filmList: [action.payload, ...state.filmList],
        newAddFilm: [action.payload],
      };

    case DELETE_FILM:
      const deletedFilm = state.filmList.filter(film => film.Title !== action.payload);
      return {
        ...state,
        filmList: deletedFilm,
       };

    default:
      return state;
  }
};

export default reducer;
