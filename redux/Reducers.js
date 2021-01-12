import { SEARCH_MOVIES, ADD_INPUT, GET_MOVIE } from './Types'

const initialState = {
    movies: [],
    movieSearch: '',
    movie: []
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
            return { ...state, movies: action.payload }
        case ADD_INPUT:
            return { ...state, movieSearch: action.payload }
        case GET_MOVIE:
            return { ...state, movie: action.payload }
        default:
            return state
    };
}