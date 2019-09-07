import { FILM_LOADED } from '../constants';

export const filmLoaded = (data) => {
    return {
        type: FILM_LOADED,
        payload: data,
    }
};