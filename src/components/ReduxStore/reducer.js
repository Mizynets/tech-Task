import { FILM_LOADED } from './constants';

const initialState = {
    filmList: [],
};

const reducer = (state = initialState, action) => {
    
    switch(action.type){        
            case FILM_LOADED:
                return {
                    filmList: action.payload,
                }
            default: return state;
        }
        
}

export default reducer;
