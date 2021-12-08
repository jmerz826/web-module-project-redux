import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE}  from './../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoritesReducer = (state = initialState, action)=> {
    switch(action.type) {
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case (ADD_FAVORITE): {
            const exists = state.favorites.find(el => el.id === action.payload.id);
            if (!exists) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            } else {
                alert('Already a favorite!');
            }
        }
        case(REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item => (item.id !== action.payload))
            };
        }
        default:
            return(state);
    }
}

export default favoritesReducer;