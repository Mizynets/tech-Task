import { FILM_LOADED } from '../constants';
import { CREATE_NEW_FILM } from '../constants';
import { DELETE_FILM } from '../constants';
// import { SEACRH_FILM } from '../constants';


export const filmLoaded = (data) => {
    return {
        type: FILM_LOADED,
        payload: data,
    }
};

export const addFilm = (newFile) => {
    return {
        type: CREATE_NEW_FILM,
        payload: newFile,
    }
};

export const deleteFilm = (id) => {
    return {
        type: DELETE_FILM,
        payload: id,
    }
};

// export const searchValue = (inputValue) => {
//     return {
//         type: SEACRH_FILM,
//         payload: inputValue,
//     }
// };